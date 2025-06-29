"use client";

import { useEffect } from "react";
import About from "./components/HomeComponents/About/About";
import Contact from "./components/HomeComponents/Contact/Contact";
import Hero from "./components/HomeComponents/HeroSection/Hero";
import WhyChooseMe from "./components/HomeComponents/WhyChooseMe/WhyChooseMe";
import WorkProcess from "./components/HomeComponents/WorkProcess/WorkProcess";
import Footer from "./components/shared/Footer/Footer";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  }, []);
  return (
    <div className="">
      <Hero />
      <section className="bg-[#141414] min-h-[300px] text-white rounded-4xl mx-4 ">
        <WhyChooseMe />
      </section>
      <section
        className={`bg-[url('/images/about.png')] bg-cover bg-center min-h-[500px]`}
      >
        <About />
      </section>
      <section className="bg-[#141414] min-h-[300px] text-white rounded-4xl mx-4 ">
        <WorkProcess />
      </section>
      <section
        className={`bg-[url('/images/contact.png')] bg-cover bg-center min-h-[500px]`}
      >
        <Contact />
      </section>
      <section className="bg-[#141414] min-h-[300px] text-white rounded-4xl mx-4">
        <Footer />
      </section>
    </div>
  );
}
