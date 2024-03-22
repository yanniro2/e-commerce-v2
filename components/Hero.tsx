import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="w-screen h-screen bg-black relative">
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="left flex items-start justify-center flex-col gap-[1rem]">
          <h3 className="uppercase font-Manrope text-[14px] font-normal tracking-[10px] text-white opacity-50">
            new product
          </h3>
          <h1 className="h1 text-white">XX99 Mark II Headphones</h1>
          <p className="text-white opacity-75 font-Manrope text-[15px] font-medium w-1/2">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="btn btn-1">see product</button>
        </div>
        <div className="right flex items-center justify-center p-[5rem]">
          <Image
            src="/assets/home/desktop/image-hero.png"
            alt="hero img"
            className="object-contain drop-shadow-md shadow-lg h-screen absolute right-0 bottom-0 scale-125"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
