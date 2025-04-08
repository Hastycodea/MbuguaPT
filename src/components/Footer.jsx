import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="bg-[#f2f2f2] mt-10 md:p-10 p-2 flex flex-col md:flex-row justify-between text-gray-500">
        <div className="flex  flex-row justify-between md:w-[55%] ">
          <div className="text-xs leading-loose">
            <h2 className="text-base text-gray-800 font-light ">Services</h2>
            <p>Personal Training</p>
            <p>Online Coaching</p>
            <p>Couples Personal Training</p>
            <p>One on One Coaching</p>
            <p>Mindset Course</p>
          </div>
          <div className="text-xs leading-loose">
            <h2 className="text-base text-gray-800 font-light ">
              Useful Links
            </h2>

            <Link
              to="hero"
              smooth={true}
              offset={-120}
              duration={500}
              className="cursor-pointer"
            >
              <p>Home</p>
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={-120}
              duration={500}
              className="cursor-pointer"
            >
              <p>About</p>
            </Link>
            <Link
              to="works"
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer"
            >
              <p>How it works</p>
            </Link>
          </div>
          <div className="text-xs leading-loose">
            <h2 className="text-base text-gray-800 font-light ">Support</h2>
            <Link to="contact" smooth={true} offset={-100} duration={500} className="cursor-pointer">
              <p>Contact</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-right text-xs text-gray-500">
          <p>Mbagathi Road,</p>
          <p>Nairobi,</p>
          <p>00 100,</p>
          <p>Kenya.</p>

          <div className="flex items-center justify-end gap-2 mt-5 text-sm text-gray-800">
            <a href="https://www.instagram.com/coach_mbugua/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="" />
            </a>
            {/* <a href="https://wa.me/<phone_number>" target="_blank">Chat on WhatsApp</a> */}
            <a href="https://wa.me/254748951815" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} className="" />
            </a>
            <a href="tel:+254748951815" target="_blank">
              <FontAwesomeIcon icon={faPhone} className="" />
            </a>
            <a href="mailto:mbuguambuthi24@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} className="" />
            </a>
          </div>
        </div>
      </div>
      <div className="  text-[10px] flex md:flex-row flex-col  items-center justify-between md:mx-10 py-3 border outline-none  border-t-gray-400">
        <p className="text-gray-500 mb-5 md:mb-0">
          © COPYRIGHT 2024. ALL RIGHTS RESERVED.
        </p>
        <p className="md:text-xs text-gray-600 font-light">
          Website Design by <span className="text-black font-semibold">Hastycode Andreh</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
