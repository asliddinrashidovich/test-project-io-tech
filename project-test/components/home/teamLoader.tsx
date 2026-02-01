import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

function TeamLoader() {
  return (
    <div className="grid grid-cols-3 max-[700px]:grid-cols-1 max-[1000px]:grid-cols-2">
      <div className="flex justify-center w-full flex-col">
        <div className="w-80 h-60 mb-3.5 mx-auto">
          <img
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s`}
            alt="user"
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-[#4B2615] font-medium text-[22px] leading-8 text-center mb-2.5">
          Asliddin Norboyev
        </h3>
        <p className="text-[#15143966] font-semibold leading-7 text-[14px] text-center mb-2.5">
          Software Engineer
        </p>
        <div className="flex items-center justify-center gap-3">
          <FaWhatsapp className="cursor-pointer" size={22} color="black" />
          <FiPhoneCall className="cursor-pointer" size={22} color="black" />
          <CiMail className="cursor-pointer" size={22} color="black" />
        </div>
      </div>
      <div className="flex justify-center w-full flex-col  max-[700px]:hidden">
        <div className="w-80 h-60 mb-3.5 mx-auto">
          <img
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s`}
            alt="user"
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-[#4B2615] font-medium text-[22px] leading-8 text-center mb-2.5">
          Asliddin Norboyev
        </h3>
        <p className="text-[#15143966] font-semibold leading-7 text-[14px] text-center mb-2.5">
          Software Engineer
        </p>
        <div className="flex items-center justify-center gap-3">
          <FaWhatsapp className="cursor-pointer" size={22} color="black" />
          <FiPhoneCall className="cursor-pointer" size={22} color="black" />
          <CiMail className="cursor-pointer" size={22} color="black" />
        </div>
      </div>
      <div className="flex justify-center w-full flex-col  max-[1000px]:hidden">
        <div className="w-80 h-60 mb-3.5 mx-auto">
          <img
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s`}
            alt="user"
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-[#4B2615] font-medium text-[22px] leading-8 text-center mb-2.5">
          Asliddin Norboyev
        </h3>
        <p className="text-[#15143966] font-semibold leading-7 text-[14px] text-center mb-2.5">
          Software Engineer
        </p>
        <div className="flex items-center justify-center gap-3">
          <FaWhatsapp className="cursor-pointer" size={22} color="black" />
          <FiPhoneCall className="cursor-pointer" size={22} color="black" />
          <CiMail className="cursor-pointer" size={22} color="black" />
        </div>
      </div>
    </div>
  );
}

export default TeamLoader;
