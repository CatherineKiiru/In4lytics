import React from "react";
import phoneIcon from "/src/assets/call-icon.svg";

const Hero = () => {
  return (
    <>
      <section className="mt-24 text-center flow-root">
        <h1 className="font-montserrat text-2xl font-bold m-4 text-white">
          Elevating digital ideas from meh to magnificent
        </h1>
        <p className="text-sm font-normal text-white m-4">
          Transform and elevate your digital product ideas from simple ideas
          into digital products that captivate through our design and
          development agency.
        </p>

        <button className="mx-auto items-center m-4 px-2 py-4 flex bg-lightYellow rounded-full gap-2">
          <img className="bg-oliveGreen rounded-full" src={phoneIcon} alt="" />
          Book a Call
        </button>
      </section>
    </>
  );
};

export default Hero;
