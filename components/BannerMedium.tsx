import Image from 'next/image'
import React from 'react'

const BannerMedium = () => {
  return (
    

<section className="w-screen h-[50vh] bg-milkWhite py-[1.5rem]">
  <div
    className="container mx-auto bg-gray h-full rounded-xl flex relative overflow-hidden">
    <Image
      src="/banner/Medium/desktop/image-speaker-zx7.jpg"
      alt="bg banner"
      className="absolute w-full h-full top-0 left-0 right-0 bottom-0 z-10 object-cover"
      width={1000}
      height={800}
    />
    <div
      className="right flex flex-col h-full items-start justify-center gap-[2rem] pl-[5rem] z-20">
      <h1 className="h4 text-black w-1/2">ZX7 SPEAKER</h1>
      <button className="btn btn-2 bg-transparent">see product</button>
    </div>
  </div>
</section>

  )
}

export default BannerMedium
