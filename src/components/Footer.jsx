import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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
            <p>About</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="text-xs leading-loose">
            <h2 className="text-base text-gray-800 font-light ">Support</h2>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex flex-col text-right text-xs text-gray-500">
          <p>Mbagathi Road,</p>
          <p>Nairobi,</p>
          <p>00 100,</p>
          <p>Kenya.</p>

          <div className="flex items-start justify-end gap-2 mt-5 text-sm text-gray-800">
            <FontAwesomeIcon icon={faInstagram} className="" />
            <FontAwesomeIcon icon={faFacebook} className="" />
            <FontAwesomeIcon icon={faXTwitter} className="" />
            <FontAwesomeIcon icon={faWhatsapp} className="" />
            <FontAwesomeIcon icon={faPhone} className="" />
          </div>
        </div>
      </div>
      <div className="  text-[10px] flex md:flex-row flex-col  items-center justify-between md:mx-10 py-3 border outline-none  border-t-gray-400">
        <p className="text-gray-500 mb-5 md:mb-0">© COPYRIGHT 2015. ALL RIGHTS RESERVED.</p>
        <p className="md:text-base font-light">
          Website Design by Hastycode Andreh
        </p>
      </div>
    </div>
  );
};

export default Footer;
