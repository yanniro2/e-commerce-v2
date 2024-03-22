import Image from 'next/image';
import React from 'react'

const BannerMain = () => {
  return (
    <section className="w-screen h-[80vh] bg-milkWhite py-[1.5rem]">
      <div className="container mx-auto bg-primary h-full rounded-xl flex">
        <div className="left relative h-full">
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            width={410}
            height={493}
            alt="banner img"
            className="w-full h-full object-contain z-20 scale-75 absolute bottom-0"
          />
          <Image
            src="/assets/home/desktop/pattern-circles.svg"
            alt="bg banner"
            className="absolute w-full h-full top-0 left-0 right-0 bottom-0 z-10 object-contain"
            width={944}
            height={944}
          />
        </div>
        <div className="right flex flex-col h-full items-start justify-center gap-[1rem] pl-[2rem]">
          <h1 className="h1 text-white w-1/2">ZX9 SPEAKER</h1>
          <p className="p-body w-1/2 text-white opacity-75 font-medium">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="btn btn-2 bg-black text-white border-black">
            see product
          </button>
        </div>
      </div>
    </section>
  );
}

export default BannerMain
