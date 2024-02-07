import React from "react";
import Logo from "./inf4lytics-logo.png";

const NavBar = () => {
  const Classes="text-white hover:text-lightYellow"
  return (
    <nav className="pt-8 px-4 md:px-12 max-w-md md:max-w-full md:pt-12 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="inf4lytics logo" />
        <h1 className="text-lightYellow font-semibold text-lg font-montserrat ">inf4lytics</h1>
      </div>
      <ul className="md:flex hidden gap-8 font-onest font-bold">
        <button className={Classes}>Home</button>
        <button className={Classes}>About Us</button>
        <button className={Classes}>Projects</button>
        <button className={Classes}>Contact Us</button>
      </ul>
      <div className="hidden md:block text-lightYellow px-10 rounded-xl bg-[#556243]">clock</div>
    </nav>
  );
};

export default NavBar;