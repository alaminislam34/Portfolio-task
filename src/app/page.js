"use client";

import Hero from "./components/HomeComponents/HeroSection/Hero";
import WhyChooseMe from "./components/HomeComponents/WhyChooseMe/WhyChooseMe";
import Footer from "./components/shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="bg-black min-h-[500px] text-white rounded-4xl mx-4">
        <WhyChooseMe />
      </section>
      <Footer />
    </div>
  );
}
