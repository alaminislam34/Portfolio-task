"use client";

import { ArrowRight } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between w-11/12 mx-auto py-2 md:py-4">
        <div>
          <h1 className="text-[#000000] font-sans text-2xl md:text-3xl tracking-tighter font-bold">
            DEVLOP.ME
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <div>
            <ul className="flex items-center gap-6 *:cursor-pointer">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <button className="flex items-center">
              <Moon />
              <Sun />
            </button>
          </div>
          <button className="flex items-center gap-2 rounded-full border ">
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
