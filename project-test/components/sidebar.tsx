"use client";

// import { X } from "lucide-react"
import { BiExit } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import LanguageSwitcher from "./languageSelector";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  setOpenSideBar: (value: boolean) => void;
  openSidebar: boolean;
}

function Sidebar({ setOpenSideBar, openSidebar }: SidebarProps) {
  const pathname = usePathname();
  const {t} = useTranslation()

  const getTextColor = (path: string) => {
    if (pathname === path) {
      return "text-[#3E8EF4]";
    } else {
      return "text-[#1E1E1E]";
    }
  };
  return (
    <div className="min-[1100px]:hidden flex">
      <div
        className={`fixed top-0 ${openSidebar ? "translate-x-0" : "translate-x-full"} transition-liniar duration-200  right-0 bottom-0 menu bg-white w-full md:w-[40%] z-30 p-9`}
      >
        <div className="flex items-center justify-between mb-5">
          <LanguageSwitcher />
          <button onClick={() => setOpenSideBar(false)}>
            <BiExit size={25} className="cursor-pointer text-black" />
          </button>
        </div>
        <div className="items-center gap-10 hidden max-[1100px]:flex flex-col mb-10">
          <div className="border border-black p-2 rounded-xl w-full flex gap-3 items-center">
            <button className="cursor-pointer">
              <IoSearchOutline className="text-black" size={25} />
            </button>
            <input type="text" className="w-full outline-none text-black"/>
          </div>
          <button className="text-black p-3 w-full rounded-lg cursor-pointer border text-[12px] font-medium leading-4">
            <span className="p-2">{t("bookAppointment")}</span>
          </button>
        </div>
        <ul className="items-center gap-6.75 flex flex-col">
          <li onClick={() => setOpenSideBar(false)} className=" cursor-pointer relative  inline-block group">
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
          <li onClick={() => setOpenSideBar(false)} className=" cursor-pointer relative  inline-block group">
            <Link
              className={`p-1.5 font-normal translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] leading-[150%] ${getTextColor("/about")}`}
              href={"/about"}
            >
              {t("about")}
            </Link>
            <span
              className={`absolute left-0 bottom-0.5 rounded-xs h-px w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full`}
            ></span>
          </li>
          <li onClick={() => setOpenSideBar(false)} className=" cursor-pointer relative  inline-block group">
            <Link
              className={`p-1.5 font-normal translate-all duration-300  text-[16px] group-hover:text-[#3E8EF4] leading-[150%] ${getTextColor("/services")}`}
              href={"/services"}
            >
              {t("services")}
            </Link>
            <span
              className={`absolute left-0 bottom-0.5 rounded-xs h-px w-0 bg-[#3E8EF4] transition-all duration-300 group-hover:w-full`}
            ></span>
          </li>
          <li onClick={() => setOpenSideBar(false)} className=" cursor-pointer relative  inline-block group">
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
          <li onClick={() => setOpenSideBar(false)} className=" cursor-pointer relative  inline-block group">
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
          <li onClick={() => setOpenSideBar(false)} className=" cursor-pointer relative  inline-block group">
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
      </div>
      {openSidebar && (
        <div
          onClick={() => setOpenSideBar(false)}
          className="fixed top-0 left-0 bottom-0 bg-black/50 w-full brightness-50 z-20"
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
