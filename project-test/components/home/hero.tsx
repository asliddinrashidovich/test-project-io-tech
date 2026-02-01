"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useAxios } from "@/hooks/useAxios";
import Image from "next/image";
import HeroLoader from "./heroLoader";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

type Services = {
  data: {
    id: number;
    slug: string;
    title_ar: string;
    title_en: string;
    description_ar: {
      type: string;
      children: {
        type: string;
        text: string;
      }[];
    }[];
    description_en: {
      type: string;
      children: {
        type: string;
        text: string;
      }[];
    }[];
    image: {
      id: number;
      url: string;
      name: string;
    }[];
  }[];
};

interface CorrectLang {
  title_en: string;
  title_ar: string;
  description_ar: {
      type: string;
      children: {
        type: string;
        text: string;
      }[];
    }[];
    description_en: {
      type: string;
      children: {
        type: string;
        text: string;
      }[];
    }[];
}

function Hero() {
  const router = useRouter();
  const {t} = useTranslation()
  const { data, loading, error, refetch } = useAxios<Services>({
    url: "/api/services?populate=*",
  });
  const lang = localStorage.getItem("app_language") || "en";

  function getCorrectLang(ser: CorrectLang) {
    if (lang === "en") {
      return [ser.title_en, ser.description_en[0].children[0].text];
    } else {
      return [ser.title_ar, ser.description_ar[0].children[0].text];
    }
  }

  if (loading) {
    return <HeroLoader />;
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.data?.map((item) => {
          const [title, text] = getCorrectLang(item)
          return (
            <SwiperSlide key={item.id} className="relative px-5">
              <div className="w-screen h-screen absolute top-0 left-0 z-10 overflow-hidden">
                <video
                  src={`${item.image[0].url}`}
                  className="object-cover w-full h-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="z-50 relative h-screen py-5 md:py-5 md:px-10 flex items-center">
                <div className="max-w-325 w-full mx-auto flex-row max-[850px]:flex-col flex justify-between items-center gap-20">
                  <div className="w-full">
                    <h1 className="text-white text-[30px] md:text-[40px] leading-7 font-bold mb-8.75">
                      {title}
                    </h1>
                    <p className="text-white text-[15px] md:text-[18px] leading-7 font-medium mb-17">
                      {text}
                    </p>
                    <button
                      onClick={() => router.push(`/services/${item.id}`)}
                      className="bg-white text-[#4B2615] py-4 px-8 rounded-xl cursor-pointer hover:bg-[#4B2615] translation-all duration-300 hover:text-white font-medium text-[18px] leading-7"
                    >
                      {t("readMore")}
                    </button>
                  </div>
                  <div className="max-w-80 w-full max-h-100 max-[850px]:hidden">
                    <Image
                      src={`${item.image[1].url}`}
                      alt="hero image"
                      width={320}
                      height={400}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Hero;
