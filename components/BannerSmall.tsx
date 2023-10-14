import Image from 'next/image'
import React from 'react'

const BannerSmall = () => {
  return (
    

<section className="w-screen h-[50vh] bg-milkWhite py-[1.5rem]">
  <div
    className="container mx-auto h-full flex gap-[2rem] items-center justify-between">
    <div className="left relative h-full rounded-xl overflow-hidden">
      <Image
        src="/banner/small/desktop/image-earphones-yx1.jpg"
        width={410}
        height={493}
        alt="banner img"
        className="w-full h-full object-cover z-20 absolute bottom-0 rounded-xl overflow-hidden"
      />
    </div>
    <div
      className="right flex flex-col h-full items-start justify-center gap-[2rem] pl-[6rem] bg-gray rounded-xl overflow-hidden">
      <h1 className="h4 w-1/2">YX1 EARPHONES</h1>

      <button className="btn btn-2 bg-transparent">see product</button>
    </div>
  </div>
</section>

  )
}

export default BannerSmall
