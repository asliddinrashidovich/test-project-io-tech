"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import ServicesDropdown from "./ServicesDropdown";
import Sidebar from "../sidebar";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSelector";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openSidebar, setOpenSideBar] = useState<boolean>(false)
  const { t } = useTranslation();

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
    if(!scrolled) {
      setScrolled(true);
    } else {
      if(window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    setServicesOpen(!servicesOpen);
  }
  return (
    <div
      className={`fixed z-99 w-full py-5 md:py-5 md:px-10 ${scrolled ? "bg-[#4B2615]" : "bg-transparent"}`}
    >
      <div className="max-w-325 mx-auto flex justify-between items-center">
        <a href="/">Logo {t("name")}</a>
        <ul className="items-center gap-6.75 hidden min-[1100px]:flex">
          <li>
            <a
              className="text-white font-normal text-[16px] leading-6.5"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-white font-normal text-[16px] leading-6.5"
              href="/about"
            >
              About us
            </a>
          </li>
          <li className=" flex items-center cursor-pointer" onClick={() => handleToggle()}>
            <span className="text-white font-normal text-[16px] leading-6.5">Services</span>
            <IoIosArrowDown size={15} className="ml-2 text-white" />
          </li>
          <li>
            <a
              className="text-white font-normal text-[16px] leading-6.5"
              href="/blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-white font-normal text-[16px] leading-6.5"
              href="/team"
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              className="text-white font-normal text-[16px] leading-6.5"
              href="/contact"
            >
              Contact us
            </a>
          </li>
        </ul>
        <div className="nav-items items-center gap-10 hidden min-[1100px]:flex">
          <button className="cursor-pointer">
            <IoSearchOutline className="text-white" size={25} />
          </button>
          <LanguageSwitcher/>
          <button className="text-white p-3 rounded-lg cursor-pointer border text-[12px] font-medium leading-4">
            <span className="p-2">Book Appointment</span>
          </button>
        </div>
        <div onClick={() => setOpenSideBar(true)} className="w-10 h-10 min-[1100px]:hidden flex  rounded-xl bg-white/20 cursor-pointer items-center justify-center">
          <IoMenu size={25}/>
        </div>
      </div>
      {servicesOpen && <div className="bg-[#4B2615]  absolute top-20 left-5 right-5 rounded-bl-3xl rounded-br-3xl">
        <ServicesDropdown />
      </div>}
      <Sidebar setOpenSideBar={setOpenSideBar} openSidebar={openSidebar}/>
    </div>
  );
}

export default Header;
