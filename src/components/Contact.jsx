import React from "react";
import passport from "../assets/passport.jpeg";

const Contact = () => {
  return (
    <div>
      <h2 className="uppercase text-3xl text-orange-500 font-light mb-5 flex justify-center items-center">
        GET IN TOUCH
      </h2>
      <div className="flex flex-col  md:flex-row px-[5%] gap-8">
        <div className="md:w-[30%]  p-4 shadow-md rounded flex flex-col items-center justify-center text-gray-600 font-light">
          <img src={passport} alt="" className="w-[200px] rounded-full p-4" />
          <h2 className="text-gray-800 font-semibold text-lg">Brian Mbugua</h2>
          <p className="text-gray-800 font-normal mb-3">Personal Trainer & Bodybuilder</p>
          <p className="mb-5">
            Have a fitness goal you want to achieve? Whether it&apos;s getting
            stronger, healthier, or more confident, I&apos;m here to guide you.
            Reach out—let&apos;s make it happen!
          </p>

          <h2>Connect with me</h2>
        </div>
        <div className=" md:w-[70%]  mx-3 shadow-md rounded bg-slate-100 p-4">
          <form action="" className="flex flex-col text-gray-600">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col">
                <label className="mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  id="name"
                  className="outline-none rounded p-4 mb-3"

                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Phone Number</label>
                <input
                  type="phone"
                  placeholder="Enter your phone number"
                  id="name"
                  className="outline-none rounded p-4 mb-3"
                />
              </div>
            </div>
            <label className="mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="name"
              className="outline-none rounded p-4 mb-3"
            />
            <label className="mb-2">Subject</label>
            <input
              type="text"
              placeholder="Enter your subject"
              id="name"
              className="outline-none rounded p-4 mb-3"
            />
            <label className="mb-2">Message</label>
            <textarea
              className="outline-none rounded p-[10px] mb-3"
              name=""
              type="message"
              placeholder="Enter your message here"
              id=""
            ></textarea>
            <button className="uppercase p-4 bg-blue-500 text-white rounded">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
