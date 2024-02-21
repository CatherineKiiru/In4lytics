import React from "react";
import softwareCard from "/src/assets/software-card.svg";
import mobileCard from "/src/assets/mobile-card.png";
import designCard from "/src/assets/ux-card.svg";
import greenArrow from "/src/assets/arrow-right.png";
import yellowArrow from "/src/assets/arrow-right-yellow.png";
import vector from "/src/assets/Vector.png";
import figma from "/src/assets//figma-half.png";
import phone from "/src/assets/phone-half.png"

const WhatWeProvide = () => {
  return (
    <>
      <section className="bg-[#49543A]">
        <div className="lg:px-20 lg:container mx-auto lg:flex lg:grid-col-2 lg:max-w-7xl lg:pt-32 md:gap-8">
          {/* First Grid */}
          <div className="lg:w-1/2">
            <div className="text-center md:text-start space-y-2 md:space-y-0 px-5">
              <h1 className="text-[#60A308] md:text-xl font-montserrat font-bold mt-16 lg:mt-8">
                The Tapestry
              </h1>
              <h2 className="text-lightYellow font-montserrat font-bold text-lg md:text-3xl md:pt-2">
                What we Provide
              </h2>
              <p className="text-white font-onest text-xs md:text-base md:pt-6">
                As a design and development agency we offer a variety of
                services to help you reach your vision. Each service is tailored
                to produce the best results efficiently from intuitive and
                creative design to cutting-edge web and mobile development
              </p>
            </div>
            <article className="relative bg-lightGreen h-[307px] md:h-[404px] mt-12 md:mt-8 px-7 lg:px-12 lg:rounded-2xl">
              <h1 className="text-oliveGreen text-2xl md:text-5xl font-black font-montserrat pt-11 lg:pt-16 ">
                SOFTWARE DEV
              </h1>
              <p className="text-oliveGreen text-xs md:text-lg lg:leading-5 font-inter font-medium mt-4">
                Our team transforms concepts into robust applications, Embracing
                the latest technologies. From scalable backend systems to
                intuitive user interfaces, We craft software tailored to your
                unique needs
              </p>
              <button className="flex rounded-full border border-oliveGreen py-4 px-4 items-center gap-2 mt-5">
                View Project
                <img
                  src={yellowArrow}
                  className="bg-oliveGreen rounded-full"
                  alt="yellow arrow"
                />
              </button>
              <div className="absolute bottom-0 right-0 w-44 md:max-w-md">
                <img src={vector} className="" alt="image vector" />
              </div>
            </article>
          </div>
          {/* Second Grid */}
          <div className="lg:w-1/2 lg:space-y-8">
            <article className="relative bg-lightYellow h-[307px] md:h-[404px] lg:mt-8 px-12 lg:rounded-2xl">
              <h1 className="text-oliveGreen text-2xl md:text-5xl font-black font-montserrat pt-11 lg:pt-16">
                UI/UX DESIGN
              </h1>
              <p className="text-oliveGreen text-xs md:text-lg lg:leading-5 font-inter font-medium mt-4">
                Where aesthetics meets functionality, our team is responsible
                for crafting designs where every pixel is purposeful. Elevate
                User Experiences with visually stunning interfaces, intuitive
                navigation, and thoughtful design elements
              </p>
              <button className="flex rounded-full border border-oliveGreen py-4 px-4 items-center gap-2 mt-5">
                View Project
                <img
                  src={yellowArrow}
                  className="bg-oliveGreen rounded-full"
                  alt="yellow arrow"
                />
              </button>
              <div className="absolute bottom-0 right-0 w-56 md:max-w-md">
                <img src={figma} className="" alt="half-figma-logo" />
              </div>
            </article>
            <article className="relative bg-oliveGreen h-[307px] md:h-[404px] lg:mt-8 px-12 lg:rounded-2xl">
              <h1 className="text-lightYellow text-2xl md:text-5xl font-black font-montserrat pt-11 lg:pt-16">
                MOBILE DEV
              </h1>
              <p className="text-white text-xs md:text-lg lg:leading-5 font-inter font-medium mt-4">
                Our team transforms concepts into robust applications, Embracing
                the latest technologies. From scalable backend systems to
                intuitive user interfaces, We craft software tailored to your
                unique needs
              </p>
              <button className="flex rounded-full border text-lightYellow border-lightYellow py-4 px-4 items-center gap-2 mt-5">
                View Project
                <img
                  src={greenArrow}
                  className="bg-lightYellow rounded-full"
                  alt="yellow arrow"
                />
              </button>
              <div className="absolute bottom-0 w-32  bg-no-repeat right-0 md:max-w-md">
                <img src={phone} className="" alt="half-phone-image" />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeProvide;
