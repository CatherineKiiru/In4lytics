import React from "react";
import Logo from "./inf4lytics-logo.png"

const NavBar = () => {
  
  return (
    <nav className="flex justify-between">
      <div>
        <img src={Logo} alt="inf4lytics logo" />
      </div>
      <ul className="md:flex">
        <li>Home</li>
        <li>About Us</li>
        <li>Projects</li>
        <li>Contact Us</li>
      </ul>
      <div>clock</div>
    </nav>
  );
};

export default NavBar;
