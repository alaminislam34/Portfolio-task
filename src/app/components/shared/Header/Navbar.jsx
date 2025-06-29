"use client";

import { ArrowRight } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage (client-side only)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div>
      <nav className="flex items-center justify-between w-11/12 mx-auto py-2 md:py-4">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-[#000000] font-sans text-2xl md:text-3xl tracking-tighter font-bold"
          >
            DEVLOP.ME
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <div>
            <ul
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex items-center gap-6 *:cursor-pointer *:hover:text-[#425830]"
            >
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Blog</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <button
              onClick={handleTheme}
              className="flex items-center cursor-pointer"
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </button>
          </div>
          <button
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex items-center gap-2 py-1 rounded-full border hover:bg-[#C5FF41] cursor-pointer duration-300"
          >
            <div className="border rounded-full">
              <ArrowRight />
            </div>

            <span className="px-2 py-2">Start Project</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
