import React from "react";
import LogoList1 from "./LogoList1";
import LogoList2 from "./LogoList2";

const LogoSection = () => {
  const softwareImage =
    "flex lg:gap-4 w-5 lg:w-auto lg:h-1/2 mx-auto items-center justify-center";
    const softwareText =
    "hidden lg:block text-[8px] lg:text-base text-oliveGreen font-bold text-nowrap text-center bg-lightYellow p-3 rounded-full gap-8 lg:mx-auto";
  const mobileText =
    "hidden lg:block text-[8px] lg:text-base text-oliveGreen font-bold text-nowrap text-center bg-lightGreen p-3 rounded-full gap-8 lg:mx-auto";
  return (
    <>
      {/* software dev logos */}
      <div className="flex w-full pt-6 lg:pt-24 ">
        <h1 className={softwareText}>Software Development</h1>
        <div className={softwareImage}>
          {LogoList1.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
        <h1 className={softwareText}>Software Development</h1>
        <div className={softwareImage}>
          {LogoList1.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
        <h1 className={softwareText}>Software Development</h1>
      </div>

      {/* mobile dev logos */}
      <div className="flex mt-8">
      <h1 className={mobileText}>Mobile Development</h1>
        <div className={softwareImage}>
          {LogoList2.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
        <h1 className={mobileText}>Mobile Development</h1>

        <div className={softwareImage}>
          {LogoList2.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
          ))}
          <h1 className={mobileText}>Mobile Development</h1>
        </div>
      </div>
    </>
  );
};

export default LogoSection;
