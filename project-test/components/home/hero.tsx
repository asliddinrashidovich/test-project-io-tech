"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useAxios } from "@/hooks/useAxios";
import Image from "next/image";

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

function Hero() {
  const { data, loading, error, refetch } = useAxios<Services>({
    url: "/api/services?populate=*",
  });

  if (loading) {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <p className="text-white text-xl animate-pulse">Loading...</p>
    </div>
  );
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
        {data?.data?.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            <div className="w-screen h-screen absolute top-0 left-0 z-10 overflow-hidden">
              <video
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image[1].url}`}
                className="object-cover w-full h-full"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="z-50 relative h-screen py-5 md:py-5 md:px-10 flex items-center">
              <div className="max-w-325 w-full mx-auto flex justify-between items-center gap-20">
                <div className="w-full">
                  <h1 className="text-white text-[40px] leading-7 font-bold mb-8.75">
                    {item.title_en}
                  </h1>
                  <p className="text-white text-[18px] leading-7 font-medium mb-17">
                    {item.description_en[0].children[0].text}
                  </p>
                  <button className="bg-white text-[#4B2615] py-4 px-8 rounded-xl cursor-pointer font-medium text-[18px] leading-7">
                    Read More
                  </button>
                </div>
                <div className="max-w-80 max-h-100">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image[0].url}`}
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
        ))}
      </Swiper>
    </>
  );
}

export default Hero;
