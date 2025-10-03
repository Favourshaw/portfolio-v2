import React from "react";
import Twitter from "../assets/icons/twitter.svg";
import Instagram from "../assets/icons/insta.svg";
import Git from "../assets/icons/github.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";

const Socials = () => {
  return (
    <div>
      {" "}
      <div className="relative flex items-center justify-center w-[200px] h-[50px] overflow-hidden bg-gray-200 shadow-md transition-all duration-300 group font-medium rounded-lg text-sm ">
        <div className="absolute left-0 flex items-center justify-end w-1/2 h-full bg-gradient-to-l from-[#00c6ff] to-[#0072ff] transition-transform duration-300 group-hover:-translate-y-full opacity-70" />
        <div className="absolute right-0 flex items-center justify-start w-1/2 h-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] transition-transform duration-300 group-hover:translate-y-full opacity-70" />

        <span className="absolute flex items-center justify-center w-full h-full text-white font-mono text-xl font-bold transition-opacity duration-300 group-hover:opacity-0 z-10">
          Socials
        </span>

        <div className="relative z-20 flex items-center justify-around w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <a
            href="#"
            className="flex items-center justify-center w-1/4 h-full transition hover:bg-white/70 hover:scale-110"
          >
            <img src={Twitter} alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/2348167679576"
            className="flex items-center justify-center w-1/4 h-full transition hover:bg-white/70 hover:scale-110"
          >
            <img src={Whatsapp} alt="Whatsapp" className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/senor_shaw/"
            className="flex items-center justify-center w-1/4 h-full transition hover:bg-white/70 hover:scale-110"
          >
            <img src={Instagram} alt="Insta" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Favourshaw/"
            className="flex items-center justify-center w-1/4 h-full transition hover:bg-white/70 hover:scale-110"
          >
            <img src={Git} alt="Git" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
