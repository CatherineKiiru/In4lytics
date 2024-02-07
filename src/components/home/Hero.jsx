import React from "react";
import phoneIcon from "/src/assets/call-icon.svg";

const Hero = () => {
  return (
    <>
      <section className="mt-24 text-center mx-auto flow-root max-w-5xl">
        <h1 className="font-montserrat text-2xl md:text-7xl font-bold m-4 md:m-6 text-white">
          Elevating digital ideas from meh to magnificent
        </h1>
        <p className="text-sm md:text-xl font-normal text-white m-4 md:m-6 px-24">
          Transform and elevate your digital product ideas from simple ideas
          into digital products that captivate through our design and
          development agency.
        </p>
        <div className="m-4 md:m-6">
        <button className="mx-auto items-center   px-6 py-2 md:px-5 md:py-3 flex bg-lightYellow rounded-full gap-2">
          <img className="bg-oliveGreen rounded-full p-2" src={phoneIcon} alt="" />
          Book a Call
        </button>
        </div>
        <h2 className="text-black">
        Woven with trust, stitched with success
        </h2>
      </section>
    </>
  );
};

export default Hero;
