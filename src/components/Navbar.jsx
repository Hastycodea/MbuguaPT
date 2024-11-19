import React from "react";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="hidden md:flex items-center justify-between pb-5 pt-2 px-5">
      <img src={logo} alt="" className="w-48 object-contain cursor-pointer  " />
      <ul className="flex gap-10 text-[12px] items-center justify-center text-slate-900 ">
        <li className="uppercase outline outline-black outline-1 py-1 px-4 hover:text-slate-400 cursor-pointer transition-all duration-200">Home</li>
        <li className="uppercase hover:text-slate-400 cursor-pointer transition-all duration-200">about</li>
        <li className="uppercase hover:text-slate-400 cursor-pointer transition-all duration-200">how it works</li>
        <li className="uppercase hover:text-slate-400 cursor-pointer transition-all duration-200">success stories</li>
        <li className="uppercase hover:text-slate-400 cursor-pointer transition-all duration-200">contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
