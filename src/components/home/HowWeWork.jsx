import React from "react";
import bulbIcon from "/src/assets/bulb-icon.svg";
import figmaIcon from "/src/assets/figma-icon.svg";
import beakerIcon from "/src/assets/beaker-icon.svg";
import htmlIcon from "/src/assets/htmltag-icon.svg";

const HowWeWork = () => {
    const heading = ""
    const Paragraph = ""
    const Card = ""
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
      <div className="flex w-full items-center mx-auto justify-center">
        <div className="bg-lightYellow">
          <img src={bulbIcon} alt="bulb icon" />
          <h1>Requirement Gathering</h1>
          <p>
            Book a call with us so that we can have the preliminary discussions
            on your ideas.
          </p>
        </div>
        <div>
          <img src={figmaIcon} alt="figma icon" />
          <h1>We design your idea</h1>
          <p>
            UI ideation and design from initial concept to iterative designs.
          </p>
        </div>
        <div>
          <img src={beakerIcon} alt="beaker icon" />
          <h1>You give the go ahead</h1>
          <p>
            We take you through the design and make changes based on your
            feedback.
          </p>
        </div>
        <div>
          <img src={htmlIcon} alt="html icon" />
          <h1>Development</h1>
          <p>
            If you are satisfied with the design, we build the final solution
            and test.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
