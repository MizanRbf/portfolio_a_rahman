import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#012741] py-10 border border-x-0 border-b-0 border-t-blue-300">
      <div className="flex-col md:flex-row  md:justify-between px-4 md:px-10 space-y-4">
        {/* Name */}
        <div className="">
          <h1 className="text-2xl md:text-4xl font-bold text-primary text-center">
            MD Abdur Rahman
          </h1>
        </div>
        {/* Social Icons */}
        <div className="flex gap-3 text-2xl md:text-4xl justify-center">
          <a
            className="hover:text-secondary text-white"
            href="https://www.facebook.com/"
          >
            <FaFacebook />
          </a>

          <a
            className="hover:text-secondary text-white"
            href="https://www.linkedin.com/"
          >
            <FaLinkedin />
          </a>

          <a className="hover:text-secondary text-white" href="https://x.com/">
            <FaXTwitter />
          </a>

          <a
            className="hover:text-secondary text-white"
            href="https://www.whatsapp.com/"
          >
            <FaWhatsappSquare />
          </a>

          <a
            className="hover:text-secondary text-white"
            href="https://www.instagram.com/"
          >
            <FaInstagramSquare />
          </a>
        </div>
        <hr className="border-dashed text-blue-300" />

        {/* Copy Right */}
        <div className="text-center text-white text-sm">
          &copy; 2025 <span className="font-semibold">MD Abdur Rahman</span>.
          All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
