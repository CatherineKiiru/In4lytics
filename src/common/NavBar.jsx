import React from "react";
import Logo from "./inf4lytics-logo.png";

const NavBar = () => {
  const Classes = "text-white hover:text-lightYellow"
  return (
    // padding missing on design
    <nav className="flex justify-between items-center bg-oliveGreen">
      <dlexiv className="flex items-center gap-2">
        <img src={Logo} alt="inf4lytics logo" />
        <h1 className="text-lightYellow">inf4lytics</h1>
      </dlexiv>
      <ul className="md:flex hidden gap-4">
        <li className={Classes}>Home</li>
        <li className={Classes}>About Us</li>
        <li className={Classes}>Projects</li>
        <li className={Classes}>Contact Us</li>
      </ul>
      <div className="hidden md:block text-lightYellow px-10 rounded-xl bg-[#556243]">clock</div>
    </nav>
  );
};

export default NavBar;
