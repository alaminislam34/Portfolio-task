"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, Sun, Moon } from "lucide-react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme only on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle(
          "dark",
          savedTheme === "dark"
        );
      }
    }
  }, []);

  // Update theme class and localStorage whenever theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="text-black dark:text-white relative">
      <nav className="max-w-7xl flex justify-between items-center w-11/12 mx-auto py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight">DEVLOP.ME</h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6 *:cursor-pointer *:hover:text-[#425830]">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Blog</li>
          </ul>

          <button onClick={handleTheme} className="cursor-pointer">
            {theme === "light" ? <Moon /> : <Sun />}
          </button>

          <button className="flex items-center gap-2 border rounded-full hover:bg-[#C5FF41] transition hover:dark:text-black cursor-pointer py-2">
            <span className="border rounded-full p-2">
              {" "}
              <ArrowRight size={16} />
            </span>
            <span className="px-2">Start Project</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="lg:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`lg:hidden absolute ${
            menuOpen === true ? "top-0" : "-top-60"
          } left-0 w-full p-6 bg-white dark:bg-black text-black dark:text-white flex flex-col gap-4 pb-6`}
        >
          <div className="relative">
            {/* Close Button */}
            <button onClick={toggleMenu} className="absolute top-0 right-0">
              <RxCross1 />
            </button>
          </div>
          {/* Menu Items */}
          <ul className="flex flex-col gap-2">
            <li
              onClick={toggleMenu}
              className="cursor-pointer hover:text-[#425830]"
            >
              Home
            </li>
            <li
              onClick={toggleMenu}
              className="cursor-pointer hover:text-[#425830]"
            >
              About
            </li>
            <li
              onClick={toggleMenu}
              className="cursor-pointer hover:text-[#425830]"
            >
              Portfolio
            </li>
            <li
              onClick={toggleMenu}
              className="cursor-pointer hover:text-[#425830]"
            >
              Blog
            </li>
          </ul>

          <button onClick={handleTheme} className="flex items-center gap-2">
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
          <button className="flex items-center gap-2 border rounded-full px-4 py-2 w-fit hover:bg-[#C5FF41] dark:bg-[#303a1a] transition cursor-pointer">
            <ArrowRight size={16} />
            <span className="">Start Project</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
