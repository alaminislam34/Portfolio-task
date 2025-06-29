import React from "react";
import SectionTitle from "../../shared/sectionTitle";
import { ArrowDown } from "lucide-react";
import AiSection from "./PreviousWork";

const About = () => {
  return (
    <div className=" py-12 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-end px-4">
        <div className="flex items-center mb-4">
          <span className="border border-black rounded-full p-2 flex items-center text-gray-800 dark:text-white dark:border-white justify-center">
            <ArrowDown size={18} />
          </span>
          <p className="py-2 px-4 rounded-full border text-sm text-gray-800 dark:text-white">
            About
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl text-right md:text-4xl lg:text-6xl font-bold leading-loose">
            I’ve been
            <span>
              {" "}
              <span className="bg-black rounded-lg text-white">Developing</span>
            </span>{" "}
            <br /> Websites since
            <span>
              {" "}
              <span className="bg-black rounded-lg text-white">2013</span>
            </span>{" "}
          </h1>
          <p className="text-center w-11/12 mx-auto">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other and recommend the best course
            of action.
          </p>
        </div>
      </div>
      <AiSection />
    </div>
  );
};

export default About;
