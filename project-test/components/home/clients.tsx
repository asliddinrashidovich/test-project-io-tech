"use client";
import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { useAxios } from "@/hooks/useAxios";

type Client = {
  data: {
    id: number;
    name: string;
    testimonial_ar: string;
    testimonial_en: string;
    logo: {
      id: number;
      url: string;
    }[];
  }[];
};
function Clients() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { data, loading, error, refetch } = useAxios<Client>({
    url: "/api/clients?populate=*",
  });

  const totalSlides = data?.data.length || 0;

  return (
    <div className="py-25 px-5 md:px-10 bg-[#4B2615]">
      <div className="max-w-325 mx-auto">
        <div className="max-w-150 mb-10">
          <h2 className="text-white font-semibold text-[40px] leading-13 mb-7">
            What our clients are saying
          </h2>
          <p className="font-normal text-white opacity-70 text-[18px] leading-[130%]">
            Our clients range from individual investors, to local, international
            as well as fortune 500 companies.
          </p>
        </div>

        <div className="relative">
          <Swiper
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="space-y-5"
          >
            {data?.data?.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid gap-12 grid-cols-3">
                  <div className="flex-1 h-80 col-span-1">
                    <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${slide.logo[0].url}`} alt="user" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col justify-between col-span-2">
                    <p className="text-[24px] leading-10 font-normal opacity-80 text-white">
                      "{slide.testimonial_en}"
                    </p>
                    <div className="flex items-end justify-between mt-4">
                      <div>
                        <h4 className="text-white font-semibold text-[24px] mb-1">
                          Mohammad Saif
                        </h4>
                        <p className="text-white text-[16px] opacity-80">
                          CEO/Company
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute z-60 bottom-0 -translate-y-1/2 right-0 flex gap-10">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={activeIndex === 0}
              className={`w-12 h-12 flex items-center justify-center rounded-full z-40 ${
                activeIndex === 0
                  ? "bg-white cursor-not-allowed text-[#6d3a23]"
                  : "bg-[#6d3a23] text-white cursor-pointer"
              }`}
            >
              <FaArrowLeft size={20} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={activeIndex === totalSlides - 1}
              className={`w-12 h-12 flex items-center justify-center rounded-full ${
                activeIndex === totalSlides - 1
                  ? "bg-white text-[#4B2615] cursor-not-allowed"
                  : "bg-[#6d3a23] text-white cursor-pointer"
              }`}
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
