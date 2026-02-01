"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import ServicesDropdown from "./ServicesDropdown";
import Sidebar from "../sidebar";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSelector";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openSidebar, setOpenSideBar] = useState<boolean>(false);
  const { t } = useTranslation();
  const pathname = usePathname();
  // const pathname = "/" + url.pathname.split("/")[1]

  const getTextColor = (path: string) => {
    if (pathname === path) {
      return "text-[#3E8EF4]";
    } else {
      return "text-[#fff]";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleToggle() {
    if (!scrolled) {
      setScrolled(true);
    } else {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    setServicesOpen(!servicesOpen);
  }
  return (
    <div
      className={`fixed z-99 w-full py-5 px-5 md:py-5 md:px-10 ${scrolled ? "bg-[#4B2615]" : "bg-transparent"}`}
    >
      <div className="max-w-325 mx-auto flex justify-between items-center">
        <a href="/">Logo </a>
        <ul className="items-center gap-6.75 hidden min-[1100px]:flex">
          <li className=" cursor-pointer relative  inline-block group">
            <Link
              className={`p-1.5 font-normal translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] leading-[150%] ${getTextColor("/")}`}
              href={"/"}
            >
              {t("home")}
            </Link>
            <span
              className={`absolute left-0 bottom-0.5 rounded-xs h-px w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full`}
            ></span>
          </li>
          <li className=" cursor-pointer relative  inline-block group">
            <Link
              className={`p-1.5 font-normal translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] leading-[150%] ${getTextColor("/about")}`}
              href={"/"}
            >
              {t("about")}
            </Link>
            <span
              className={`absolute left-0 bottom-0.5 rounded-xs h-px w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full`}
            ></span>
          </li>
          <li className="cursor-pointer relative  inline-block group" onClick={() => handleToggle()}>
            <Link
              className={`p-1.5 font-normal translate-all duration-300 flex items-center gap-1 text-[16px] group-hover:text-[#3E8EF4] leading-[150%] ${getTextColor("/services")}`}
              href={"/services"}
            >
              {t("services")}
              <IoIosArrowDown/>
            </Link>
            <span
              className={`absolute left-0 bottom-0.5 rounded-xs h-px w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full`}
            ></span>
          </li>
          <li className=" cursor-pointer relative  inline-block group">
            <Link
              className={`p-1.5 font-normal translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] leading-[150%] ${getTextColor("/blog")}`}
              href={"/blog"}
            >
              {t("blog")}
            </Link>
            <span
              className={`absolute left-0 bottom-0.5 rounded-xs h-px w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full`}
            ></span>
          </li>
          <li className=" cursor-pointer relative  inline-block group">
            <Link
              className={`p-1.5 font-normal translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] leading-[150%] ${getTextColor("/team")}`}
              href={"/team"}
            >
              {t("team")}
            </Link>
            <span
              className={`absolute left-0 bottom-0.5 rounded-xs h-px w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full`}
            ></span>
          </li>
          <li className=" cursor-pointer relative  inline-block group">
            <Link
              className={`p-1.5 font-normal translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] leading-[150%] ${getTextColor("/contact")}`}
              href={"/contact"}
            >
              {t("contact")}
            </Link>
            <span
              className={`absolute left-0 bottom-0.5 rounded-xs h-px w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full`}
            ></span>
          </li>
        </ul>
        <div className="nav-items items-center gap-10 hidden min-[1100px]:flex">
          <button className="cursor-pointer">
            <IoSearchOutline className="text-white" size={25} />
          </button>
          <LanguageSwitcher />
          <button className="text-white p-3 rounded-lg cursor-pointer border text-[12px] font-medium leading-4">
            <span className="p-2">{t("bookAppintment")}</span>
          </button>
        </div>
        <div
          onClick={() => setOpenSideBar(true)}
          className="w-10 h-10 min-[1100px]:hidden flex  rounded-xl bg-white/20 cursor-pointer items-center justify-center"
        >
          <IoMenu size={25} />
        </div>
      </div>
      {servicesOpen && (
        <div className="bg-[#4B2615]  absolute top-20 left-5 right-5 rounded-bl-3xl rounded-br-3xl">
          <ServicesDropdown />
        </div>
      )}
      <Sidebar setOpenSideBar={setOpenSideBar} openSidebar={openSidebar} />
    </div>
  );
}

export default Header;
