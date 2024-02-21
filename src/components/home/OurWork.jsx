import React from "react";
import landingPage from "/src/assets/landing.png";
import greenArrow from "/src/assets/arrow-right.png";
import yellowArrow from "/src/assets/arrow-right-yellow.png";

const OurWork = () => {
  return (
    <section className="bg-[#49543A]">
      <div className="mx-auto text-center px-4 lg:px-0 lg:pt-24 md:max-w-md">
        <h1 className="text-[#60A308] md:text-xl font-montserrat font-bold">
          Our Work
        </h1>
        <h2 className="text-lightYellow font-montserrat font-bold text-lg md:text-3xl md:pt-2">
          Our Wall of Fame
        </h2>
        <p className="text-white font-onest text-xs md:text-base md:pt-6">
          A showcase of our triumphs and innovations and a reflection of the
          height of excellence we strive to attain in every project.
        </p>
      </div>
      <div className="bg-lightGreen lg:mt-16">
        {/* Project image */}
        <div className="lg:flex px-12">
          <div className=" lg:p-11">
            <img src={landingPage} className="" alt="mentorlst-landing-page" />
          </div>
          {/* Project description & carousel */}
          <div className="lg:w-1/2 lg:mt-11">
            <h1 className="md:text-4xl font-bold">Mentorlst</h1>
            <div className="flex gap-3 mt-2">
              <span className="bg-lightYellow px-4 rounded-full">
                Software Development
              </span>
              <span className="bg-lightYellow px-3 rounded-full">
                UI/UX Design
              </span>
            </div>
            <p className="md:mt-5">
              Mentorlst.com is a platform for techies to meet mentors, learn and
              grow in the careers. Mentorlst.com is a platform for techies to
              meet mentors, learn and grow in the careers. Mentorlst.com is a
              platform for techies to meet mentors, learn and grow in the
              careers.{" "}
            </p>
            <hr className="bg-oliveGreen md:mt-4" />
            <div className="flex justify-between md:mt-6">
              <button className="flex">
                <img src={greenArrow} className="rotate-180" alt="" />
                Prev
              </button>
              <button className="flex">
                Next
                <img src={greenArrow} alt="" />
              </button>
            </div>
            <div className="mt-24">
              <hr className="bg-oliveGreen md:mt-4" />
              <button className="flex items-center gap-2 mt-6">More Projects
                <img src={yellowArrow} className="bg-oliveGreen rounded-full p-1" alt="yellow-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
