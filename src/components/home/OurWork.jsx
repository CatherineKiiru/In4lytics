import React from "react";
import landingPage from "/src/assets/landing.png";
import greenArrow from "/src/assets/arrow-right.png";
import yellowArrow from "/src/assets/arrow-right-yellow.png";
import line from "/src/assets/line.png"

const OurWork = () => {
  return (
    <section className="bg-[#49543A]">
      <div className="mx-auto text-center px-4 lg:px-0 pt-16 lg:pt-24 max-w-xs md:max-w-md">
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
        <div className="lg:flex lg:px-12">
          <div className="mt-7 lg:p-11">
            <img src={landingPage} className="" alt="mentorlst-landing-page" />
          </div>
          {/* Project description & carousel */}
          <div className="lg:w-1/2 px-6 md:px-0 mt-9 lg:mt-11">
            <h1 className="text-2xl md:text-4xl font-bold">Mentorlst</h1>
            <div className="flex gap-3 mt-2">
              <span className="bg-lightYellow px-4 rounded-full">
                Software Development
              </span>
              <span className="bg-lightYellow px-3 rounded-full">
                UI/UX Design
              </span>
            </div>
            <p className="mt-5">
              Mentorlst.com is a platform for techies to meet mentors, learn and
              grow in the careers. Mentorlst.com is a platform for techies to
              meet mentors, learn and grow in the careers. Mentorlst.com is a
              platform for techies to meet mentors, learn and grow in the
              careers.{" "}
            </p>
            <img src={line} className="mt-4 w-full bg-oliveGreen h-[1px]" alt="horizontal-line" />
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
            <div className="mt-12 md:mt-24">
              <img src={line} className="md:mt-4 w-full bg-oliveGreen h-[1px]" alt="horizontal-line" />
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
