import { Outlet } from "react-router-dom";
import Hero from "../components/home/Hero";
import NavBar from "../common/NavBar";
import HistorySection from "../components/home/HistorySection";
import HowWeWork from "../components/home/HowWeWork";
import WhatWeProvide from "../components/home/WhatWeProvide";
import OurWork from "../components/home/OurWork";
import LogoSection from "../components/home/LogoSection";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <div className="bg-[#49543A]">
        <NavBar />
        <Hero />
      </div>
      <HistorySection />
      <div className="bg-[#49543A]"> 
        <HowWeWork />
        <WhatWeProvide />
        <OurWork />
        <LogoSection />
        <Testimonials />
      </div>
      
    </>
  );
}
