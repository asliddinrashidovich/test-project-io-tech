"use client"

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import axios from "axios";
import toast from "react-hot-toast";

function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const response = await axios.post("https://brave-heart-b9081f69c0.strapiapp.com/api/subscribers", {
        data: { email },
      });
      toast.success("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      toast.error("Error submitting email:");
      setSuccess("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-5 md:px-10 pb-10 pt-15 bg-[#4B2615]">
      <div className="max-w-300 mx-auto ">
        <div className="flex items-center max-[800px]:gap-4 max-[800px]:flex-col gap-10 mb-10">
          <form
            onSubmit={handleSubmit}
            className="rounded-md min-[800px]:ml-auto bg-white px-1 flex items-center"
          >
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black text-[16px] outline-none py-2 px-3"
              required
            />
            <button
              type="submit"
              className="text-white text-[16px] rounded-lg font-medium leading-4 py-2 px-6 bg-[#4B2615]"
              disabled={loading}
            >
              {loading ? "Loading..." : t("submit")}
            </button>
          </form>

          {success && <p className="text-white ml-4">{success}</p>}

          <p className="text-white font-normal text-[16px] leading-7">
            {t("contacts")}
          </p>
          <div className="flex items-center gap-7">
            <FaTwitter size={20} className="text-white cursor-pointer" />
            <FaFacebookF size={20} className="text-white cursor-pointer" />
            <GrGooglePlus size={25} className="text-white cursor-pointer" />
          </div>
        </div>
        <hr className="border border-white opacity-20 mb-10" />
        <div className="flex flex-col min-[800px]:flex-row max-[800px]:gap-10 items-center justify-between">
          <ul className="flex items-center flex-wrap gap-6.75">
            <li>
              <a className="text-white font-normal text-[16px] leading-6.5" href="/about">{t("about")}</a>
            </li>
            <li>
              <a className="text-white font-normal text-[16px] leading-6.5" href="#">{t("strategy")}</a>
            </li>
            <li>
              <a className="text-white font-normal text-[16px] leading-6.5" href="#">{t("advantages")}</a>
            </li>
            <li>
              <a className="text-white font-normal text-[16px] leading-6.5" href="#">{t("responsibility")}</a>
            </li>
            <li>
              <a className="text-white font-normal text-[16px] leading-6.5" href="/services">{t("ourServices")}</a>
            </li>
          </ul>
          <p className="text-white font-normal text-[16px] leading-6.5">© 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
