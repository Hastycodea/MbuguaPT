import React from "react";
import passport from "../assets/passport.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    //     const res = await axios.get(
    //     `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${import.meta.env.VITE_BOOKS_API}`
    // );

    formData.append("access_key", `${import.meta.env.VITE_SITE_API}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact mt-10">
      <h2 className="uppercase text-3xl text-orange-500 font-light mb-5 flex justify-center items-center">
        GET IN TOUCH
      </h2>
      <div className="flex flex-col  md:flex-row px-[5%] gap-8">
        <div className="md:w-[30%]  p-4 shadow-md rounded flex flex-col items-center justify-center text-gray-600 font-light bg-slate-100">
          <img src={passport} alt="" className="w-[200px] rounded-full p-4" />
          <h2 className="text-gray-800 font-semibold text-lg">Mbugua Mbuthi</h2>
          <p className="text-gray-800 font-normal mb-3">
            Personal Trainer & Bodybuilder
          </p>
          <p className="mb-5">
            Have a fitness goal you want to achieve? Whether it&apos;s getting
            stronger, healthier, or more confident, I&apos;m here to guide you.
            Reach out—let&apos;s make it happen!
          </p>

          <h2 className="uppercase">Connect with me</h2>
          <div className="flex gap-3 mt-5">
            <a href="https://www.instagram.com/coach_mbugua/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className=" p-4 rounded-full shadow-md cursor-pointer"
              />
            </a>
            <a href="https://wa.me/254748951815">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className=" p-4 rounded-full shadow-md cursor-pointer"
              />
            </a>
            <a href="tel:+254748951815" target="_blank">
              <FontAwesomeIcon
                icon={faPhone}
                className=" p-4 rounded-full shadow-md cursor-pointer"
              />
            </a>
            <a href="mailto:mbuguambuthi24@gmail.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                className=" p-4 rounded-full shadow-md cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className=" md:w-[70%]  mx-3 shadow-md rounded bg-slate-100 p-4">
          <form onSubmit={onSubmit} className="flex flex-col text-gray-600">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col">
                <label className="mb-2">Name</label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  id="name"
                  className="outline-none rounded p-4 mb-3"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Phone Number</label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  id="name"
                  className="outline-none rounded p-4 mb-3"
                />
              </div>
            </div>
            <label className="mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id="name"
              className="outline-none rounded p-4 mb-3"
            />
            <label className="mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter your subject"
              id="name"
              className="outline-none rounded p-4 mb-3"
            />
            <label className="mb-2">Message</label>
            <textarea
              className="outline-none rounded p-[10px] mb-3"
              name="mesaage"
              type="message"
              placeholder="Enter your message here"
              id=""
            ></textarea>
            <span className="text-green-700">{result}</span>
            <button
              type="submit"
              className="uppercase p-4 bg-blue-500 text-white rounded"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
