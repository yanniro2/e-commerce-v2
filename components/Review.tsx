import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <section className="w-screen h-screen bg-milkWhite my-[6rem]">
      <div className="container mx-auto h-full flex items-center justify-center gap-[5rem]">
        <div className="left flex items-start justify-center flex-col pr-[5rem] gap-[2rem] h-full">
          <h1 className="h2 w-[80%]">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h1>
          <p className="p-body opacity-50 w-[80%]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="right flex h-full items-center justify-center">
          <Image
            src="/review/desktop/image-best-gear.jpg"
            width={1000}
            height={1000}
            alt="review img"
            className="w-full h-3/4 object-cover rounded-xl overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Review;
