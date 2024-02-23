import React from "react";
import LogoList1 from "./LogoList1";
import LogoList2 from "./LogoList2";

const LogoSection = () => {
  const softwareImage =
    "flex gap-4 h-1/2 w-full mx-auto items-center justify-center";
    const softwareText =
    "text-nowrap bg-lightYellow p-2 text-center rounded-full text-oliveGreen font-bold text-base gap-8 mx-auto";
  const mobileText =
    "text-nowrap text-base bg-lightGreen p-2 text-center rounded-full text-oliveGreen font-bold gap-8 mx-auto";
  return (
    <>
      {/* software dev logos */}
      <div className="flex w-full ">
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
      <div className="flex overflow-hidden mt-8">
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
