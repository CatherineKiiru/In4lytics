import React from "react";
import phoneIcon from "/src/assets/phone.png";

const Contact = () => {
  return (
    <section>
      <div className="bg-backgroundImage w-full relative h-[300px] lg:h-[600px] md:mt-24 bg-cover">
        <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-md">
          <h1 className="text-3xl text-lightYellow font-bold">
            Ready to share your ideas with us? Tell us about them
          </h1>
          <button className="text-base text-inter text-oliveGreen font-medium flex mx-auto justify-center items-center bg-lightYellow rounded-full px-4 py-3 gap-2 mt-8">
            <img src={phoneIcon} className="bg-oliveGreen p-1 rounded-full" alt="phone-icon" />
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
