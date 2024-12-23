import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNutritionix } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faGamepad, faHeart, faPersonRunning } from "@fortawesome/free-solid-svg-icons";

const Reasons = () => {
  return (
    <div className="mt-3 flex md:flex-col flex-col-reverse  p-2 items-center justify-center">
      <div className="my-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="outline outline-slate-400 outline-1 flex flex-col items-center justify-center p-3">
            <FontAwesomeIcon
              icon={faNutritionix}
              className="outline outline-black outline-1 p-3 rounded-full border-b-2 text-orange-700   "
            />
            <p className="mb-2 text-gray-800">Nutrition</p>
            <p className="py-4 border-t-[1px] border-gray-300 mb-2 text-center text-gray-700">
              Learn about and implement nutritional strategies that will
              transform your physique without feeling starved.
            </p>
          </div>
          <div className="outline outline-slate-400 outline-1 flex flex-col items-center justify-center p-3">
            <FontAwesomeIcon
              icon={faHeart}
              className="outline outline-black outline-1 p-3 rounded-full border-b-2 text-orange-700   "
            />
            <p className="mb-2 text-gray-800">Lifestyle</p>
            <p className="py-4 border-t-[1px] border-gray-300 mb-2 text-center text-gray-700">
              Learn about and implement vital lifestyle habits to start feeling
              amazing on the inside and looking great on the outside.
            </p>
          </div>
          <div className="outline outline-slate-400 outline-1 flex flex-col items-center justify-center p-3">
            <FontAwesomeIcon
              icon={faPersonRunning}
              className="outline outline-black outline-1 p-3 rounded-full border-b-2 text-orange-700   "
            />
            <p className="mb-2 text-gray-800">Exercise</p>
            <p className="py-4 border-t-[1px] border-gray-300 mb-2 text-center text-gray-700">
              Tailored, structured, time-efficient & progressive exercise
              programme to cater for your requirements and goals.
            </p>
          </div>
          <div className="outline outline-slate-400 outline-1 flex flex-col items-center justify-center p-3">
            <FontAwesomeIcon
              icon={faBrain}
              className="outline outline-black outline-1 p-3 rounded-full border-b-2 text-orange-700   "
            />
            <p className="mb-2 text-gray-800">Mindset</p>
            <p className="py-4 border-t-[1px] border-gray-300 mb-2 text-center text-gray-700">
              By applying mindset principles to your burning desire of achieving
              your goals - you will become a better version of you.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-large md:text-2xl font-light mb-3 flex items-center justify-center">
          WHY <span className="text-orange-500 px-2"> MBUGUA FITNESS </span>{" "}
          WILL WORK FOR YOU
        </h2>
        <p className="mb-3 flex justify-center text-center">
          A tonne of useful advice, guidance and coaching across the 4 keys to
          success that will ​help you: ​
        </p>
        <ul className="text-gray-700  md:grid md:grid-cols-2 gap-3">
          <li>✓ Eat better, without dieting or feeling deprived.</li>
          <li>✓ Get active, no matter what shape you’re in now.</li>
          <li>
            ✓ Ditch the food rules, drop the fad diets and conflicting advice.
          </li>
          <li>✓ Build fitness into your life, without it taking over.</li>
          <li>
            ✓ Achieve, and maintain, your goals, even when life gets busy.
          </li>
          <li>
            ✓ Boost your confidence, energy, and aesthetics to feel great inside and out.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reasons;
