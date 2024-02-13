import React from "react";
import bulbIcon from "/src/assets/bulb-icon.svg";
import figmaIcon from "/src/assets/figma-icon.svg";
import beakerIcon from "/src/assets/beaker-icon.svg";
import htmlIcon from "/src/assets/htmltag-icon.svg";
import group from "/src/assets/Group-48.svg"

const HowWeWork = () => {
    const heading = ""
    const Paragraph = ""
    const Card = ""
    const Image = ""
  return (
    <section className="bg-oliveGreen z-10 absolute">
      <div className="w-full text-center mx-auto justify-center">
        <h1 className="text-[#60A308]">Our Loom</h1>
        <h2 className="text-lightYellow">How we Work</h2>
        <p className="text-white">
          As a design and development agency, we are dedicated to our craft,
          always working to improve one output from the last. We structure our
          approach to achieve the best work within the least amount of time.
        </p>
      </div>
      {/* cards section */}
      <div className="md:flex w-full text-center mx-auto justify-center">
        <div className="bg-lightYellow m-6 p-6 h-96 w-80 rounded-lg mx-auto">
          <img src={bulbIcon} className="mx-auto ml-4" alt="bulb icon" />
          <h1 className="mt-[-20px] md:mt-0 text-oliveGreen text-lg font-bold">Requirement Gathering</h1>
          <p className="text-xs mt-4 text-[#3D4631] font-normal font-onest">
            Book a call with us so that we can have the preliminary discussions
            on your ideas.
          </p>
        </div>
        <div className="bg-lightGreen m-6 p-6 h-96 w-80 rounded-lg mx-auto">
          <img src={figmaIcon} className="mx-auto mt-4" alt="figma icon" />
          <h1 className=" md:mt-0 text-oliveGreen text-lg font-bold">We design your idea</h1>
          <p className="text-xs mt-4 text-[#3D4631] font-normal font-onest">
            UI ideation and design from initial concept to iterative designs.
          </p>
        </div>
        <div className="bg-[#49543A] m-6 p-6 h-96 w-80 rounded-lg mx-auto">
          <img src={beakerIcon} className="mx-auto " alt="beaker icon" />
          <h1 className=" md:mt-0 text-lightYellow text-lg font-bold">You give the go ahead</h1>
          <p className="text-xs mt-4 text-lightGreen font-normal font-onest">
            We take you through the design and make changes based on your
            feedback.
          </p>
        </div>
        <div className="bg-lightYellow m-6 p-6 h-96 w-80 rounded-lg mx-auto">
          <img src={htmlIcon} className="mx-auto mt-10" alt="html icon" />
          <h1 className="md:mt-0 text-oliveGreen text-lg font-bold">Development</h1>
          <p className="text-xs mt-4 text-[#3D4631] font-normal font-onest">
            If you are satisfied with the design, we build the final solution
            and test.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
