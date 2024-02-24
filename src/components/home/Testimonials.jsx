import React from "react";
import firebase from "/src/assets/logoList2/firebase.png";

const testimonialCard = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    src: firebase,
  },
];

const Testimonials = () => {
  return (
    <>
      <section>
        <div className=" mx-auto text-center mt-8 lg:mt-24 space-y-2 md:max-w-md">
          <h1 className="text-[#60A308] md:text-xl font-bold font-montserrat">
            Testimonials
          </h1>
          <h2 className="text-lightYellow md:text-3xl font-bold md:mt-2">
            Real Words From Real People
          </h2>
          <p className="text-white text-lg font-normal md:mt-6 w-">
            Explore words from those who entrusted us with their vision as
            testament to our work.
          </p>
        </div>

        {/* will refactor with map function */}
        <div className="md:flex gap-8 mx-auto justify-center mt-8 md:mt-20 overflow-hidden">
          <article className="bg-lightGreen md:max-w-xs p-8 lg:rounded-xl text-oliveGreen">
            <p>
              "Lorem ipsum dolor sit amet consectetur. Rhoncus integer cras
              venenatis diam."
            </p>
            <div className="flex justify-between mt-6">
              <div>
              <h1 className="">@Jane Doe</h1>
              <span>CTO, Camera Inc.</span>
              </div>
              <img src={firebase} alt="profile pic" />
            </div>
          </article>
          <article className="bg-oliveGreen md:max-w-xs p-8 rounded-xl text-white">
            <p>
              "Lorem ipsum dolor sit amet consectetur. Rhoncus integer cras
              venenatis diam."
            </p>
            <div className="flex justify-between mt-6">
              <div>
              <h1 className="">@Jane Doe</h1>
              <span>CTO, Camera Inc.</span>
              </div>
              <img src={firebase} alt="profile pic" />
            </div>
          </article>
          <article className="bg-lightGreen md:max-w-xs p-8 rounded-xl text-oliveGreen">
            <p>
              "Lorem ipsum dolor sit amet consectetur. Rhoncus integer cras
              venenatis diam."
            </p>
            <div className="flex justify-between mt-6">
              <div>
              <h1 className="">@Jane Doe</h1>
              <span>CTO, Camera Inc.</span>
              </div>
              <img src={firebase} alt="profile pic" />
            </div>
          </article>
          <article className="bg-lightYellow md:max-w-xs p-8 rounded-xl">
            <p>
              "Lorem ipsum dolor sit amet consectetur. Rhoncus integer cras
              venenatis diam."
            </p>
            <div className="flex justify-between mt-6">
              <div>
              <h1 className="">@Jane Doe</h1>
              <span>CTO, Camera Inc.</span>
              </div>
              <img src={firebase} alt="profile pic" />
            </div>
          </article>
          <article className="bg-oliveGreen md:max-w-xs p-8 rounded-xl text-white">
            <p>
              "Lorem ipsum dolor sit amet consectetur. Rhoncus integer cras
              venenatis diam."
            </p>
            <div className="flex justify-between mt-6">
              <div>
              <h1 className="">@Jane Doe</h1>
              <span>CTO, Camera Inc.</span>
              </div>
              <img src={firebase} alt="profile pic" />
            </div>
          </article>
          
        </div>
      </section>
    </>
  );
};

export default Testimonials;
