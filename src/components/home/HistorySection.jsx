import React from "react";
import handModels from "/src/assets/hand-models.svg";
import handModelsMobile from "/src/assets/hand-models-mobile.png";
import rightArrow from "/src/assets/arrow-right.png";

const HistorySection = () => {
  return (
    <>
      <section className="bg-lightGreen md:w-full mx-auto pb-12 md:pb-24">
        <div className="md:max-w-[1580px] md:mx-auto md:items-center">
          <div className="text-center py-8">
            <h2 className="text-[#60A308]">A Brief History</h2>
            <h1>Beyond the Threads</h1>
          </div>
          <div>
            <img
              src={handModelsMobile}
              className="w-full md:hidden"
              alt="hand models on mobile"
            />
            <img
              src={handModels}
              className="hidden w-5/6 md:block pl-12"
              alt="hand models on desktop"
            />
          </div>
          <div className="bg-oliveGreen p-6 space-y-4 md:relative md:float-right md:rounded-xl md:z-10 md:top-[-14rem] md:max-w-md md:mr-24">
            <article className="text-white justify-end">
              We're not just a design studio. We're a tapestry of talent, a
              vibrant spool of creators, knit together by a shared passion for
              crafting experiences that thread themselves into the heart. We
              don't just design; we embroider stories, stitch together dreams,
              and weave possibilities into reality. From loose threads to
              masterpieces, we're here to unravel your potential and stitch
              together a masterpiece that's uniquely you.
            </article>
            <hr className="w-full text-lightYellow " />
            <button className="flex items-center text-white font-inter gap-2">
              <h3 className="text-sm font-medium">About Us</h3>
              <img
                src={rightArrow}
                className="bg-lightYellow rounded-full p-1"
                alt=""
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistorySection;
