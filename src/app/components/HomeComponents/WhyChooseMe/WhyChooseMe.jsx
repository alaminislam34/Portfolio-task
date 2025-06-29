import { ArrowLeft, ArrowRight, ArrowDown } from "lucide-react";
import React, { useRef } from "react";

import react from "../../../../../public/images/react.png";
import Image from "next/image";

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
const WhyChooseMe = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -408 : 408;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-11/12 mx-auto py-12">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-4">
        <span className="border rounded-full p-2 flex items-center text-gray-400 justify-center">
          <ArrowDown size={18} />
        </span>
        <p className="py-2 px-4 rounded-full border text-sm text-gray-400">
          Why Choose Me
        </p>
      </div>

      {/* Heading and Description */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
          My Extensive <br className="hidden md:block" /> List of Skills
        </h1>
        <div className="mt-4 md:mt-0 md:max-w-md">
          <p className=" text-sm md:text-base text-right">
            Building the world's best marketing. <br />
            Your trusted partner for strategy, design, and dev.
          </p>
          <div className="border border-gray-500 my-4"></div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative w-full max-w-7xl mx-auto py-10">
        {/* Control Buttons  */}
        <div className="absolute -top-4 right-0 z-10 flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white/10 cursor-pointer"
            aria-label="Scroll Left"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white/10 cursor-pointer"
            aria-label="Scroll Right"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto py-10 px-2 mt-10 scroll-smooth scrollbar-hide"
        >
          {/* slider cards */}
          {data.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="min-w-[380px] h-[350px] bg-white/10 rounded-2xl shadow-md flex flex-col gap-4 p-4 justify-center font-semibold hover:rotate-12 transition-all duration-300 text-left"
            >
              <Image src={icon} alt={title} width={100} height={100} />
              <h1 className="text-xl lg:text-2xl">{title}</h1>
              <p className="w-3/4 text-gray-400 font-sans">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
