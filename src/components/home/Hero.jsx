import React from "react";
import phoneIcon from "/src/assets/call-icon.svg";
import tuple from "/src/assets/tuple.png";
import transistor from "/src/assets/transistor.png";
import mirage from "/src/assets/mirage.png";
import statickit from "/src/assets/statickit.png";
import workcation from "/src/assets/workcation.png";

const Hero = () => {
  return (
    <>
      <section className="mt-24 text-center mx-auto flow-root max-w-5xl">
        <h1 className="font-montserrat text-2xl md:text-7xl font-bold m-4 md:m-6 text-white">
          Elevating digital ideas from meh to magnificent
        </h1>
        <p className="text-sm md:text-xl font-normal text-white m-4 md:m-6 md:px-24">
          Transform and elevate your digital product ideas from simple ideas
          into digital products that captivate through our design and
          development agency.
        </p>
        <div className="m-4 md:m-6">
          <button className="mx-auto items-center px-6 py-2 md:px-5 md:py-3 flex bg-lightYellow rounded-full gap-2">
            <img
              className="bg-oliveGreen rounded-full p-2"
              src={phoneIcon}
              alt=""
            />
            Book a Call
          </button>
        </div>
        <h2 className="text-lightYellow mt-28 md:mt-32 max-w-xs md:max-w-full mx-auto font-bold text-lg md:text-2xl">
          Woven with trust, stitched with success
        </h2>
        <div className=" flex overflow-hidden mx-auto items-center justify-center h-8 gap-8 md:gap-44 md:w-30 md:h-auto mt-3 md:mt-8 ">
          <img src={mirage} alt="mirage-logo" />
          <img src={tuple} alt="tuple-logo" />
          <img src={transistor} alt="transistor-logo" />
          <img src={statickit} alt="statickit-logo" />
          <img src={workcation} alt="workcation logo" />
        </div>
      </section>
    </>
  );
};

export default Hero;
