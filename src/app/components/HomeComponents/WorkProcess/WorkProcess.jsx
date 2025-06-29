import { ArrowLeft, ArrowRight, ArrowDown } from "lucide-react";
import React, { useRef } from "react";

import react from "../../../../../public/images/react.png";
import Image from "next/image";
import SectionTitle from "../../shared/sectionTitle";

const data = [
  {
    icon: react,
    title: "HTML",
    description:
      "Semantic and accessible HTML structure for modern web standards and SEO best practices.",
  },
  {
    icon: react,
    title: "CSS",
    description:
      "Modern CSS techniques including Flexbox, Grid, and responsive layouts using Tailwind CSS.",
  },
  {
    icon: react,
    title: "JavaScript",
    description:
      "Interactive and dynamic web features using vanilla JS and ES6+ features like async/await.",
  },
  {
    icon: react,
    title: "WebFlow",
    description:
      "Building pixel-perfect no-code websites with smooth animations and CMS integration.",
  },
  {
    icon: react,
    title: "React",
    description:
      "Reusable component-based architecture with state management using hooks and context.",
  },
  {
    icon: react,
    title: "Next.js",
    description:
      "Full-stack React framework with SSR, routing, API routes, and optimized performance.",
  },
];
const WorkProcess = () => {
  return (
    <div className="w-11/12 mx-auto pt-12 pb-6 max-w-7xl">
      <div className="flex flex-col justify-between">
        <div className="relative">
          <h1 className="lg:absolute top-1/2 -translate-y-1/2">
            <SectionTitle title={"Work Process"} />
          </h1>
          <div className="w-full">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center leading-snug">
              My Work Process
            </h1>
          </div>
        </div>
        {/* card container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 my-6">
          <div className="text-white flex flex-col justify-between bg-black rounded-3xl p-6 min-h-[250px] group hover:rotate-4 duration-300 hover:bg-[#C5FF41]">
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-[#c5ffee] group-hover:bg-black group-hover:text-white p-1 px-3 text-sm text-black">
                Discovery
              </div>
              <div className="flex items-center group-hover:text-black">
                <ArrowRight />
                <span className="underline text-sm ">Read More</span>
              </div>
            </div>
            <p className="text-gray-400 group-hover:text-gray-700">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other, discuss your current and
              future objectives, and recommend the best course of action.
            </p>
          </div>
          <div className="text-white flex flex-col justify-between bg-black rounded-3xl p-6 min-h-[250px] group hover:rotate-4 duration-300 hover:bg-[#C5FF41]">
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-[#c5ffee] group-hover:bg-black group-hover:text-white p-1 px-3 text-sm text-black">
                Strategy
              </div>
              <div className="flex items-center group-hover:text-black">
                <ArrowRight />
                <span className="underline text-sm ">Read More</span>
              </div>
            </div>
            <p className="text-gray-400 group-hover:text-gray-700">
              Every end-to-end project of ours begins with a tEspoke pre-build
              strateu. From brand ID consultation to in-depth ccxle reviews
              we're here to set the stage for success.
            </p>
          </div>
          <div className="text-white flex flex-col justify-between bg-black rounded-3xl p-6 min-h-[250px] group hover:rotate-4 duration-300 hover:bg-[#C5FF41]">
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-[#c5ffee] group-hover:bg-black group-hover:text-white p-1 px-3 text-sm text-black">
                Design
              </div>
              <div className="flex items-center group-hover:text-black">
                <ArrowRight />
                <span className="underline text-sm ">Read More</span>
              </div>
            </div>
            <p className="text-gray-400 group-hover:text-gray-700">
              After we have a comprehensive understanding of your brand, we'll
              be ready to move onto design. Each page or will be designed,
              reviewed, and given your stamp of approval.
            </p>
          </div>
          <div className="text-white flex flex-col justify-between bg-black rounded-3xl p-6 min-h-[250px] group hover:rotate-4 duration-300 hover:bg-[#C5FF41]">
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-[#c5ffee] group-hover:bg-black group-hover:text-white p-1 px-3 text-sm text-black">
                Build
              </div>
              <div className="flex items-center group-hover:text-black">
                <ArrowRight />
                <span className="underline text-sm ">Read More</span>
              </div>
            </div>
            <p className="text-gray-400 group-hover:text-gray-700">
              Whether we've just finished designing your new site or you're
              handing off finished designs for us to develop in Webflow, we're
              here to apply our trusted development process to your project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
