import React from "react";
import softwareCard from "/src/assets/software-card.svg";
import mobileCard from "/src/assets/mobile-card.png";
import designCard from "/src/assets/ux-card.svg";
import arrow from "/src/assets/arrow-right.png";
import yellowArrow from "/src/assets/arrow-right-yellow.png";

const WhatWeProvide = () => {
  return (
    <section className="mx-auto md:flex text-center pt-12 md:pt-56 lg:px-40 bg-oliveGreen lg:gap-8">
      {/* grid 1 */}
      <div className="">
        <article className="md:w-[500px] md:text-start text-wrap">
          <h1 className="font-montserrat font-bold text-sm text-[#60A308]">
            The Tapestry
          </h1>
          <h2 className="font-montserrat font-bold text-lg md:text-3xl text-lightYellow">
            What we Provide
          </h2>
          <p className="font-onest font-medium text-xs md:text-base text-white ">
            As a design and development agency we offer a variety of services to
            help you reach your vision. Each service is tailored to produce the
            best results efficiently from intuitive and creative design to
            cutting-edge web and mobile development
          </p>
          <div className="relative">
            <div className="absolute px-6 text-start ">
              <h1 className="text-2xl md:text-5xl font-montserrat font-bold mt-16">
                SOFTWARE DEV
              </h1>
              <p className="text-xs md:text-lg mt-2">
                Our team transforms concepts into robust applications, Embracing
                the latest technologies. From scalable backend systems to
                intuitive user interfaces, We craft software tailored to your
                unique needs
              </p>

              <button className="flex text-xs md:text-base text-oliveGreen border border-oliveGreen rounded-full p-4 gap-2 items-center mt-3">
                View Projects
                <img
                  src={yellowArrow}
                  className="bg-oliveGreen rounded-full"
                  alt="right arrow"
                />
              </button>
            </div>
            <div className="bg-lightGreen">
            <img src={softwareCard} className="h-80 lg:h-auto md:mt-8 md:rounded-lg" alt="ui-ux design card" />
            </div>
          </div>
        </article>
      </div>
      {/* grid 2 */}
      <div className="">
        <div className="relative">
          <div className="absolute px-6 text-start">
            <h1 className="text-2xl md:text-5xl font-montserrat font-bold mt-12">
              UI/UX DESIGN
            </h1>
            <p className="text-xs md:text-lg mt-2">
              Where aesthetics meets functionality, our team is responsible for
              crafting designs where every pixel is purposeful. Elevate User
              Experiences with visually stunning interfaces, intuitive
              navigation, and thoughtful design elements
            </p>

            <button className="flex text-xs border border-oliveGreen rounded-full p-4 gap-2 items-center mt-3">
              View Projects
              <img
                src={yellowArrow}
                className="bg-oliveGreen rounded-full text-lightYellow"
                alt="right arrow"
              />
            </button>
          </div>
          <img src={designCard} className="" alt="ui-ux design card" />
        </div>

        <div>
          <div className="relative ">
            <div className="absolute px-6 text-start">
              <h1 className="text-2xl md:text-5xl font-montserrat font-bold mt-16 text-lightYellow">
                MOBILE DEV
              </h1>
              <p className="text-xs md:text-lg mt-2 text-white">
                Lorem ipsum dolor sit amet consectetur. Varius ut purus blandit
                netus lectus nunc a. Lacus aliquam enim sit ultrices quis ut.
                Justo quis metus sit justo morbi. In id nibh neque proin
                curabitur condimentum quisque facilis.
              </p>

              <button className="flex text-xs text-lightYellow border border-lightYellow rounded-full p-4 gap-2 items-center mt-3">
                View Projects
                <img
                  src={arrow}
                  className="bg-lightYellow rounded-full"
                  alt="right arrow"
                />
              </button>
            </div>
            <img src={mobileCard} className="h-80" alt="ui-ux design card" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
