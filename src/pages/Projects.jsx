import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My {""}
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I have embarked on numerous projects over the years, but these are the
          ones i am proud to share. Some of them are open source, so feel free
          to explore the code base and contribute your ideas for further
          enhancement.
        </p>
      </div>

      <div className="flex flex-wrap gap-16 my-20 justify-center lg:justify-between">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-[300px]" key={project.name}>
            <div className="block-container w-full h-[150px] md:h-[200px]">
              <div className={`btn-back rounded-xl ${project.theme}`} />

              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="project icon"
                  className="w-full  object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>

              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>

                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain "
                  />
                </div>

                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Github Link
                  </Link>

                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
