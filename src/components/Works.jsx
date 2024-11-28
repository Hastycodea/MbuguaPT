import React from "react";

const Works = () => {
  return (
    <div className="works flex flex-col items-center justify-center p-3  mx-auto text-gray-500 leading-loose ">
      <h2 className="uppercase text-3xl text-orange-500 font-light mb-5">
        HOW IT WORKS
      </h2>
      <p className="pb-3 text-gray-700 text-center leading-normal"> At Mbugua Fitness, we ensure personalized, sustainable progress every step of the way!  </p>
      <ul className="grid md:grid-cols-2 font-light">
        <li>
          <strong className="text-gray-700">✓Consultation</strong>: Discuss your goals, lifestyle, and
          fitness needs.
        </li>
        <li>
          <strong className="text-gray-700">✓Health & Fitness Assessment</strong>: Evaluate your current
          health to create a tailored plan.
        </li>
        <li>
          <strong className="text-gray-700">✓Lifestyle Planning</strong>: Build sustainable habits beyond
          the gym for lasting results.
        </li>
        <li>
          <strong className="text-gray-700">✓Nutritional Guidance</strong>: Flexible, realistic eating
          strategies for effective weight management.
        </li>
        <li>
          <strong className="text-gray-700">✓Eating Tools</strong>: Practical methods to handle real-life
          challenges with nutrition.
        </li>
        <li>
          <strong className="text-gray-700">✓Food Shopping Coaching</strong>: Learn to make informed,
          healthy choices at the supermarket.
        </li>
      </ul>
    </div>
  );
};

export default Works;
