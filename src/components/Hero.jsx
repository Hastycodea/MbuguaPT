import React from "react";
import bg from "../assets/trainer.jpeg";
import about from "../assets/about.jpeg"

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse  items-center">
      {/* className="bg-[url('./assets/trainer.jpg')] bg-cover bg-no-repeat" */}
      <section className="w-[100vw] md:w-[35%] hidden md:flex flex-col justify-center text-center md:text-left md:h-screen h-[50%] p-4   ">
        <h1 className="font-bold md:text-7xl text-3xl md:pb-4 pb-2">
          BUILD YOUR BEST BODY
        </h1>
        <p>
          Premium weight loss and lifestyle transformations which create long
          lasting, dramatic results to your health, body and mind.
        </p>
        <div className="flex gap-8 md:mt-5 mt-2 items-center justify-center md:justify-start">
          <button className="bg-orange-500 py-2 px-4 rounded text-white outline outline-orange-500 outline-1 hover:bg-transparent hover:text-orange-500 transition-all duration-200 text-xs">
            START HERE
          </button>

          <button className="  py-2 px-4 rounded text-black outline outline-black  outline-1 hover:bg-slate-50  transition-all duration-200 text-xs">
            GET IN TOUCH
          </button>
        </div>
      </section>
      <section className="relative md:static md:w-[65%] w-[100%]">
        <img src={bg} alt="" className="object-left-top object-cover md:w-[70vw] md:h-[100vh]   w-[100vw] brightness-[.3] md:brightness-100 rounded shadow-md" />
        <div className=" md:hidden absolute flex flex-col inset-0 m-auto  text-center items-center justify-center px-4 ">
          <h1 className="font-bold md:text-7xl text-3xl md:pb-4 pb-2 text-slate-200">
            BUILD YOUR BEST BODY
          </h1>
          <p className="text-slate-100">
            Premium weight loss and lifestyle transformations which create long
            lasting, dramatic results to your health, body and mind.
          </p>
          <div className="flex gap-8 md:mt-5 mt-2 items-center justify-center md:justify-start">
            <button className="bg-orange-500 py-2 px-4 rounded text-white outline outline-orange-500 outline-1 hover:bg-transparent hover:text-orange-500 transition-all duration-200 text-xs">
              START HERE
            </button>

            <button className="  py-2 px-4 rounded text-white outline outline-white  outline-1 hover:bg-slate-50  transition-all duration-200 text-xs">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
