import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 shadow-md z-10">
      <div className=" md:flex items-center justify-between pb-5 pt-2 px-5 bg-white">
        <img
          src={logo}
          alt=""
          className="md:w-48 w-28 pt-2 md:pt-0 object-contain cursor-pointer  "
        />


        {/* Menu Icon */}
        <div onClick={() => setOpen(!open)} className="absolute right-8 top-3 cursor-pointer md:hidden">
          {
            open ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} /> 
          }
        </div>




        <ul className={ `md:flex gap-10 absolute text-[12px] md:items-center md:pb-0 pb-12 md:static md:z-auto z-[-1] w-full md:w-auto left-0  pl-9 md:pl-0 pt-5 bg-white duration-500 transition-all md:justify-center text-slate-900 ${open ? 'top-12' : 'top-[-600px]'} ` }>
          <li className="uppercase md:outline outline-black outline-1 md:py-1 md:px-4 hover:text-slate-400 cursor-pointer transition-all duration-200">
            Home
          </li>
          <li className="uppercase hover:text-slate-400 cursor-pointer transition-all duration-200 my-7 md:my-0">
            about
          </li>
          <li className="uppercase hover:text-slate-400 cursor-pointer transition-all duration-200 my-7 md:my-0">
            how it works
          </li>
          <li className="uppercase hover:text-slate-400 cursor-pointer transition-all duration-200 my-7 md:my-0">
            success stories
          </li>
          <li className="uppercase hover:text-slate-400 cursor-pointer transition-all duration-200 my-7 md:my-0">
            contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
