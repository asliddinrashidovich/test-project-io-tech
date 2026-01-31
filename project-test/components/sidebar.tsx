"use client";

// import { X } from "lucide-react"
import { BiExit } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import LanguageSwitcher from "./languageSelector";
// import LanguageSelector from "./languageSelector";

interface SidebarProps {
  setOpenSideBar: (value: boolean) => void;
  openSidebar: boolean;
}

function Sidebar({ setOpenSideBar, openSidebar }: SidebarProps) {
  return (
    <div className="min-[1250px]:hidden flex">
      <div
        className={`fixed top-0 ${openSidebar ? "translate-x-0" : "translate-x-full"} transition-liniar duration-200  right-0 bottom-0 menu bg-white w-full md:w-[40%] z-30 p-9`}
      >
        <div className="flex items-center justify-between mb-5">
          <LanguageSwitcher />
          <button onClick={() => setOpenSideBar(false)}>
            <BiExit size={25} className="cursor-pointer text-black" />
          </button>
        </div>
        <div className="items-center gap-10 hidden max-[1000px]:flex flex-col mb-10">
          <button className="cursor-pointer">
            <IoSearchOutline className="text-black" size={25} />
          </button>
          <button className="text-black p-3 w-full rounded-lg cursor-pointer border text-[12px] font-medium leading-4">
            <span className="p-2">Book Appointment</span>
          </button>
        </div>
        <ul className="items-center gap-6.75 flex-col flex">
          <li>
            <a
              className="text-black font-normal text-[16px] leading-6.5"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-black font-normal text-[16px] leading-6.5"
              href="/about"
            >
              About us
            </a>
          </li>
          <li
            className=" flex items-center cursor-pointer"
            // onClick={() => handleToggle()}
          >
            <span className="text-black font-normal text-[16px] leading-6.5">
              Services
            </span>
            {/* <IoIosArrowDown size={15} className="ml-2 text-black" /> */}
          </li>
          <li>
            <a
              className="text-black font-normal text-[16px] leading-6.5"
              href="/blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-black font-normal text-[16px] leading-6.5"
              href="/team"
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              className="text-black font-normal text-[16px] leading-6.5"
              href="/contact"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
      {openSidebar && (
        <div
          onClick={() => setOpenSideBar(false)}
          className="fixed top-0 left-0 bottom-0 bg-black/50 w-[100%] brightness-50 z-20"
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
