import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";

function Footer() {
  return (
    <div className="px-5 md:px-10 pb-10 pt-15 bg-[#4B2615]">
      <div className="max-w-300 mx-auto ">
        <div className="flex items-center gap-10 mb-10">
          <form className="rounded-md ml-auto bg-white  px-1 flex items-center">
            <input
              type="text"
              placeholder="Email"
              className="text-black text-[16px] outline-none py-2 px-3"
            />
            <button className="text-white text-[16px] rounded-lg font-medium leading-4 py-2 px-6 bg-[#4B2615]">
              Submit
            </button>
          </form>
          <p className="text-white font-normal text-[16px] leading-7">
            Contacts
          </p>
          <div className="flex items-center gap-7">
            <FaTwitter size={20} className="text-white cursor-pointer" />
            <FaFacebookF size={20} className="text-white cursor-pointer" />
            <GrGooglePlus size={25} className="text-white cursor-pointer" />
          </div>
        </div>
        <hr className="border border-white opacity-20 mb-10" />
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-6.75">
            <li>
              <a
                className="text-white font-normal text-[16px] leading-6.5"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-white font-normal text-[16px] leading-6.5"
                href="#"
              >
                Our Strategy
              </a>
            </li>
            <li>
              <a
                className="text-white font-normal text-[16px] leading-6.5"
                href="#"
              >
                Our Advantages
              </a>
            </li>
            <li>
              <a
                className="text-white font-normal text-[16px] leading-6.5"
                href="#"
              >
                Social Responsibility
              </a>
            </li>
            <li>
              <a
                className="text-white font-normal text-[16px] leading-6.5"
                href="/services"
              >
                Our Services
              </a>
            </li>
          </ul>
          <p className="text-white font-normal text-[16px] leading-6.5">© 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
