import React from "react";
import Facebook from "/src/assets/facebook.png";
import Instagram from "/src/assets/instagram.png";
import Twitter from "/src/assets/twitter.png";
import Linkedin from "/src/assets/linkedin.png";
import line from "/src/assets/line.png";

const Footer = () => {
  return (
    <section className="bg-lightGreen lg:h-[350px] md:px-12">
      <div className="container mx-auto lg:max-w-[1440px]">
        <h1 className="text-5xl md:text-8xl text-oliveGreen text-center py-16 font-montserrat font-medium ">
          in4lytics
        </h1>
        <img
          src={line}
          className="w-full bg-oliveGreen h-[2px]"
          alt="horizontal-line"
        />
        <div className="lg:flex lg:justify-between py-8 space-y-8 lg:space-y-0">
          <div className="flex gap-4 h-1/2 mx-auto items-center justify-center">
            <a href="">
              <img src={Facebook} alt="Facebook-logo" />
            </a>
            <a href="">
              <img src={Twitter} alt="Twitter-logo" />
            </a>
            <a href="">
              <img src={Instagram} alt="Instagram-logo" />
            </a>
            <a href="">
              <img src={Linkedin} alt="LinkedIn-logo" />
            </a>
          </div>
          <div className="flex gap-4 font-inter mx-auto items-center justify-center">
            <h1>2024</h1>
            <span>©iN4lytics</span>
          </div>
          <div className="flex gap-4 font-inter mx-auto items-center justify-center">
            <a>Terms of Service</a>
            <a>Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
