import Image from "next/image";
import React from "react";

const CartItem = ({ data }: any) => {
  function getShortName(longName: string, maxLength: number) {
    if (longName.length <= maxLength) {
      return longName;
    } else {
      return longName.slice(0, maxLength) + "...";
    }
  }
  // alert(data.img);
  return (
    <div className="w-full flex items-center justify-between">
      <Image
        src={`/assets/${data.slug}/desktop/image-category-page-preview.jpg`}
        alt="shop icon"
        className="w-[4rem] h-[4rem] rounded-md"
        width={25}
        height={25}
      />
      <div className="flex flex-col items-start">
        <h3 className="p-body font-bold uppercase">
          {getShortName(data.title, 10)}
        </h3>
        <h1 className="p tracking-wide font-bold text-black opacity-50">
          ${data.price * data.noOfItems}
        </h1>
      </div>

      {/* <Number quantity={10} /> */}
      <div className="p-body font-semibold">{data.noOfItems}</div>
    </div>
  );
};

export default CartItem;
