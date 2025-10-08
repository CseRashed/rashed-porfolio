import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 ">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center bg-gradient-to-r from-[#1fcaff] to-[#0ea5e9] text-transparent bg-clip-text mb-16">
        Contact Me
      </h1>

      {/* Contact Cards */}
      <div className="flex flex-col md:flex-row gap-8 mb-16 w-full max-w-6xl">
        {/* Phone Card */}
        <div className="flex items-center gap-4 p-6 flex-1 bg-gradient-to-r from-blue-200/40 to-blue-200/50 rounded-2xl shadow-lg hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.3)] transition-all duration-300">
          <div className="p-4 bg-blue-400 text-white rounded-full text-2xl">
            <FaPhoneAlt />
          </div>
          <div>
            <h2 className="font-bold text-lg text-gray-700">Mobile</h2>
            <p className="text-gray-600">+8801751077550</p>
          </div>
        </div>

        {/* Email Card */}
        <div className="flex items-center gap-4 p-6 flex-1 bg-gradient-to-r from-blue-200/40 to-blue-200/50  rounded-2xl shadow-lg hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.3)] transition-all duration-300">
          <div className="p-4 bg-blue-500 text-white rounded-full text-2xl">
            <FaEnvelope />
          </div>
          <div>
            <h2 className="font-bold text-lg text-gray-700">Email</h2>
            <p className="text-gray-600">cserashedul@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-2xl bg-gradient-to-r from-blue-200/40 to-blue-200/50  p-8 rounded-3xl shadow-lg hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.3)] transition-all duration-300">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-xl outline-none bg-gray-100 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-xl outline-none bg-gray-100 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-xl outline-none bg-gray-100 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-400 to-gray-400 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.5)] transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
