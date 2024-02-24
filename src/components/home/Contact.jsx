import React from "react";
import phoneIcon from "/src/assets/phone.png";
import arrow from "/src/assets/arrow-up.png";

const Contact = () => {
  return (
    <section>
      <div className="bg-backgroundImage w-full relative h-[300px] lg:h-[600px] md:mt-24 bg-cover">
        <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:max-w-md">
          <h1 className="text-2xl lg:text-3xl text-lightYellow font-bold">
            Ready to share your ideas with us? Tell us about them
          </h1>
          <button className="text-base text-inter text-oliveGreen font-medium flex mx-auto justify-center items-center bg-lightYellow rounded-full px-4 py-3 gap-2 mt-8">
            <img
              src={phoneIcon}
              className="bg-oliveGreen p-1 rounded-full"
              alt="phone-icon"
            />
            Book a Call
          </button>
        </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src={arrow}
            className="absolute bottom-10 md:bottom-20 right-0 bg-oliveGreen mr-10 rounded-full border border-lightYellow scroll-smooth w-12"
            alt="up-arrow-icon"
          />
        </button>
      </div>
    </section>
  );
};

export default Contact;
