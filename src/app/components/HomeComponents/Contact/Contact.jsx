"use client";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";

import { ArrowDown, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-11/12 mx-auto py-16 max-w-7xl">
      <div className="flex items-center mb-4">
        <span className="border border-black rounded-full p-2 flex items-center text-gray-800 dark:text-white dark:border-white justify-center">
          <ArrowDown size={18} />
        </span>
        <p className="py-2 px-4 rounded-full border text-sm text-gray-800 dark:text-white">
          Contact
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row items-center justify-between">
        <div className="space-y-4">
          <h1 className="text-2xl text-left md:text-4xl lg:text-6xl font-bold leading-loose">
            Interested in <br />
            <span>
              <span className="bg-black rounded-lg text-white">Work</span>
            </span>{" "}
            together?
          </h1>
          <p className="w-5/7">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </p>
          <button className="flex items-center rounded-full border py-2">
            <div className="border rounded-full p-2">
              <IoCall />
            </div>

            <span className="px-4 py-2 text-sm">Schedule a call</span>
          </button>
        </div>
        <div className="rounded-2xl bg-black text-white p-6 md:p-8 max-w-[400px] w-full">
          <form className="flex flex-col gap-8 items-start">
            <input
              className="outline-none py-2 border-b border-gray-400 focus:border-[#C5FF41] text-white/80 w-full"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="outline-none py-2 border-b border-gray-400 focus:border-[#C5FF41] text-white/80 w-full"
              type="email"
              placeholder="Enter email address"
            />
            <input
              className="outline-none py-2 border-b border-gray-400 focus:border-[#C5FF41] text-white/80 w-full"
              type="text"
              placeholder="Describe your project"
            />
            <div className="flex flex-row gap-2 items-center">
              <button className="flex items-center gap-2 rounded-full border ">
                <div className="border rounded-full p-2">
                  <Send size={16} />
                </div>

                <span className="px-2 py-2 text-sm pr-2">Send</span>
              </button>
              or
              <button className="flex items-center gap-2 rounded-full border ">
                <div className="border rounded-full p-2">
                  <IoMail />
                </div>

                <span className="px-2 py-2 text-sm pr-2">Contact me</span>
              </button>
            </div>
            <div className="flex flex-row gap-4 items-center mt-8">
              <p className="text-white/60">@williamrey</p>
              <div className="flex flex-row items-center gap-2">
                <div className="border border-gray-500 w-10"></div>
                <div className="flex flex-row items-center gap-2">
                  <FaFacebook className="text-2xl" />
                  <FaInstagram className="text-2xl" />
                  <FaTwitter className="text-2xl" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
