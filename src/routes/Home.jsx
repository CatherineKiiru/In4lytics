import { Outlet } from "react-router-dom";
import Hero from "../components/home/Hero";
import NavBar from "../common/NavBar";

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <Hero />
      </div>
    </>
  );
}
