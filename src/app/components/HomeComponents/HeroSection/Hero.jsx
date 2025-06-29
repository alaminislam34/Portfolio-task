import React from "react";
import Navbar from "../../shared/Header/Navbar";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div
      className={` bg-[url('/images/hero.png')] bg-top object-cover bg-cover min-h-[650px]`}
    >
      <Navbar />
      <section className="flex items-center min-h-[550px] w-full">
        <div className="w-11/12 mx-auto">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-2xl md:text-4xl lg:text-6xl font-bold leading-loose"
          >
            Trusted
            <span>
              {" "}
              <span className="bg-black rounded-lg text-white">Partner</span>
            </span>{" "}
            for <br /> Your Website{" "}
            <span>
              {" "}
              <span className="bg-black rounded-lg text-white">Develop.</span>
            </span>{" "}
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex justify-center gap-12 items-center mt-12"
          >
            <div className="-rotate-90 min-w-[200px]">
              <p>@williamrey</p>
              <div className="flex flex-row items-center">
                <div className="border w-10"></div>
                <div className="flex flex-row gap-4 mt-2">
                  <Facebook className="" />
                  <Instagram className="" />
                  <Twitter className="" />
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-8/12 mx-auto flex flex-col justify-start items-start gap-12
            "
            >
              <p className="max-w-2xl">
                Building the worlds best marketing websites for over a decade.
                Your trusted partner for strategy, design, and dev.
              </p>
              <button className="flex items-center gap-2 rounded-full border ">
                <div className="border rounded-full">
                  <ArrowRight />
                </div>

                <span className="px-2 py-2">Start Project</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
