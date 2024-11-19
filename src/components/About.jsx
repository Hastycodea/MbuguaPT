import React from "react";
import mbugua from "../assets/about.jpeg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center my-0 md:my-10 md:px-[10%]">
      <h2 className="uppercase text-3xl text-orange-500 font-light mb-5">
        About Me
      </h2>
      <div className="flex md:flex-row flex-col  ">
        <img
          src={mbugua}
          alt="Mbugua Fitness"
          className="w-[100%] md:w-6/12 md:h-[600px] h-[40vh] md:mx-4 rounded shadow mb-4 md:mb-0 object-left-top object-cover"
        />
        <div className="text-gray-600 leading-loose px-2  ">
          <p className="text-sm font-light md:leading-8  ">
            I’m Mbugua, a dedicated personal trainer and bodybuilding competitor
            with a proven track record of transforming lives. I’m passionate
            about my craft and specialize in helping busy men and women
            completely overhaul their health and fitness through a holistic and
            sustainable approach.
          </p>

          <h2>What I Help You Achieve</h2>
          <ul className="text-sm font-light md:leading-8">
            <li>Feel confident and attractive in any setting.</li>
            <li>
              Build physical and mental strength to tackle challenges
              effortlessly.
            </li>
            <li>Fit into the clothes you love.</li>
            <li>
              Stop worrying about health risks and enjoy a longer, healthier
              life.
            </li>
            <li>
              Play with your kids or grandkids without fatigue and maintain
              energy every day.
            </li>
            <li>Add years of vitality to your retirement.</li>
          </ul>

          <h2>What You Don’t Have to Do</h2>
          <ul className="text-sm font-light md:leading-8">
            <li>Starve or diet.</li>
            <li>Count calories or weigh foods.</li>
            <li>Give up your favorite treats.</li>
            <li>Spend hours on cooking or exercise.</li>
            <li>Share gym spaces with others.</li>
          </ul>

          <p>
            My approach is all about making health and fitness a natural,
            enjoyable part of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
