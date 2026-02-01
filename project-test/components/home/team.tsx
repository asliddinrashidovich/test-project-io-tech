"use client";

import { useAxios } from "@/hooks/useAxios";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import TeamLoader from "./teamLoader";
import { useTranslation } from "react-i18next";

type User = {
  data: {
    id: number;
    name_ar: string;
    name_en: string;
    role_ar: string;
    role_en: string;
    photo: {
      id: number;
      url: string;
    };
  }[];
};

interface CorrectLang {
  role_ar: string;
  role_en: string;
}

function Team() {
  const { t } = useTranslation();
  const { data, loading, error, refetch } = useAxios<User>({
    url: "/api/team-members?populate=*",
  });

  const lang = localStorage.getItem("app_language") || "en";

  function getCorrectLang(ser: CorrectLang) {
    if (lang === "en") {
      return [ser.role_en];
    } else {
      return [ser.role_ar];
    }
  }

  return (
    <div className="px-5 md:px-10 pt-40 pb-22 bg-[#F3F3F3]">
      <div className=" ">
        <div className="max-w-191 mx-auto text-center mb-15">
          <h2 className="text-[42px] font-bold text-[#4B2615] mb-5">
            {t("team")}
          </h2>
          <p className="text-[18px] font-medium leading-7 text-[#1E1E1E] mb-5">
            {t("teamText")}
          </p>
        </div>
        {!loading ? (
          <div>
            <Swiper
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 2,
                },
                1180: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper flex gap-7.5 items-center justify-center "
            >
              {data?.data?.map((item) => {
                const [role] = getCorrectLang(item)
                return (
                  <SwiperSlide
                    key={item.id}
                    className="flex justify-center w-full"
                  >
                    <div className="w-80 h-60 mb-3.5 mx-auto">
                      <img
                        src={`${item.photo.url}`}
                        alt="user"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-[#4B2615] font-medium text-[22px] leading-8 text-center mb-2.5">
                      {item.name_en}
                    </h3>
                    <p className="text-[#15143966] font-semibold leading-7 text-[14px] text-center mb-2.5">
                      {role}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <FaWhatsapp
                        className="cursor-pointer"
                        size={22}
                        color="black"
                      />
                      <FiPhoneCall
                        className="cursor-pointer"
                        size={22}
                        color="black"
                      />
                      <CiMail
                        className="cursor-pointer"
                        size={22}
                        color="black"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <TeamLoader />
        )}
      </div>
    </div>
  );
}

export default Team;
