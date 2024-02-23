import React from "react";
import handModels from "/src/assets/hand-models.svg";
import handModelsMobile from "/src/assets/hand-models-mobile.png";
import rightArrow from "/src/assets/arrow-right.png";

const HistorySection = () => {
  return (
    <>
      <section className="bg-lightGreen">
        <div className="container mx-auto lg:relative">
          <div className="">
            <div className="text-center py-8">
              <h2 className="text-[#60A308] text-sm font-montserrat font-bold">
                A Brief History
              </h2>
              <h1 className="text-oliveGreen text-2xl font-montserrat font-bold">
                Beyond the Threads
              </h1>
            </div>
            <div className="lg:pb-36">
              <img
                src={handModelsMobile}
                className="w-full lg:hidden"
                alt="hand models on mobile"
              />
              <img
                src={handModels}
                className="hidden lg:w-5/6 lg:block lg:pl-12"
                alt="hand models on desktop"
              />
            </div>

            <div className="bg-oliveGreen p-6 space-y-4 lg:absolute lg:bottom-12 lg:mt-10 right-0 lg:rounded-xl  lg:max-w-md lg:mr-24">
              <article className="text-white text-xs md:text-base justify-end">
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
        </div>
      </section>
    </>
  );
};

export default HistorySection;
