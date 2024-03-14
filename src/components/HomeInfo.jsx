import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center 
    neo-brutalism-blue py-4 px-8 text-white mx-5"
    >
      Favour's Island <span className="semibold">Explore 👋</span> <br /> A
      software engineer from Nigeria
    </h1>
  ),

  2: (
    <InfoBox
      text="worked on my own as a software engineer"
      link="/about"
      btnText="Learn More"
    />
  ),

  3: (
    <InfoBox
      text="Worked on multiple projects over the years, check them out"
      link="/projects"
      btnText="Check out my work"
    />
  ),

  4: (
    <InfoBox
      text="Need to collaborate? or  looking for a dev?, i'm just a few keystrokes away"
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
