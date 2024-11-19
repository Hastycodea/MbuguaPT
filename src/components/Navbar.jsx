import React from "react";

const Navbar = () => {
  return (
    <div className="hidden md:flex items-center justify-between p-5">
      <h2 className="cursor-pointer">Mbugua Personal Trainer</h2>
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
