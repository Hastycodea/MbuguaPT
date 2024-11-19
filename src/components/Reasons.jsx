import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNutritionix } from "@fortawesome/free-brands-svg-icons";

const Reasons = () => {
  return (
    <div className="mt-3 flex flex-col p-2 items-center justify-center">
      <div className="my-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="outline outline-slate-400 outline-1 flex flex-col items-center justify-center p-3">
            <FontAwesomeIcon
              icon={faNutritionix}
              className="outline outline-black outline-1 p-3 rounded-full border-b-2 text-orange-700   "
            />
            <p className="mb-2 text-gray-800">Nutrition</p>
            <p className="py-4 border-t-[1px] border-black mb-2 text-center text-gray-700">
              Learn about and implement nutritional strategies that will
              transform your physique without feeling starved.
            </p>
          </div>
          <div className="outline outline-slate-400 outline-1 flex flex-col items-center justify-center p-3">
            <FontAwesomeIcon
              icon={faNutritionix}
              className="outline outline-black outline-1 p-3 rounded-full border-b-2 text-orange-700   "
            />
            <p className="mb-2 text-gray-800">Nutrition</p>
            <p className="py-4 border-t-[1px] border-black mb-2 text-center text-gray-700">
              Learn about and implement nutritional strategies that will
              transform your physique without feeling starved.
            </p>
          </div>
          <div className="outline outline-slate-400 outline-1 flex flex-col items-center justify-center p-3">
            <FontAwesomeIcon
              icon={faNutritionix}
              className="outline outline-black outline-1 p-3 rounded-full border-b-2 text-orange-700   "
            />
            <p className="mb-2 text-gray-800">Nutrition</p>
            <p className="py-4 border-t-[1px] border-black mb-2 text-center text-gray-700">
              Learn about and implement nutritional strategies that will
              transform your physique without feeling starved.
            </p>
          </div>
          <div className="outline outline-slate-400 outline-1 flex flex-col items-center justify-center p-3">
            <FontAwesomeIcon
              icon={faNutritionix}
              className="outline outline-black outline-1 p-3 rounded-full border-b-2 text-orange-700   "
            />
            <p className="mb-2 text-gray-800">Nutrition</p>
            <p className="py-4 border-t-[1px] border-black mb-2 text-center text-gray-700">
              Learn about and implement nutritional strategies that will
              transform your physique without feeling starved.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-large md:text-2xl font-light mb-3">
        WHY <span className="text-orange-500">MBUGUA FITNESS</span> WILL WORK
        FOR YOU
      </h2>
      <p className="mb-3">
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
        <li>✓ Achieve, and maintain, your goals, even when life gets busy.</li>
        <li>
          ✓ Boost your confidence and energy levels to feel great inside and
          out.
        </li>
      </ul>
    </div>
  );
};

export default Reasons;
