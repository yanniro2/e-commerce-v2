import Image from "next/image";
import React from "react";
import Number from "../components/Number";

const CartItem = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <Image
        src="/desktop/category/earphones/product/yx-1-wireless-earphones/product.jpg"
        alt="shop icon"
        className="w-[4rem] h-[4rem] rounded-md"
        width={25}
        height={25}
      />
      <div className="flex flex-col items-start">
        <h3 className="p-body font-bold uppercase">xx 99 mk11</h3>
        <h1 className="p tracking-wide font-bold text-black opacity-50">
          $2999
        </h1>
      </div>

      <Number quantity={10} />
    </div>
  );
};

export default CartItem;
