import { Outlet } from "react-router-dom";
import Hero from "../components/home/Hero";
import NavBar from "../common/NavBar";
import HistorySection from "../components/home/HistorySection";
import HowWeWork from "../components/home/HowWeWork";

export default function Home() {
  return (
    <>
      <div className="bg-oliveGreen">
        <NavBar />
        <Hero />
      </div>
      <HistorySection />
      <HowWeWork />
    </>
  );
}
