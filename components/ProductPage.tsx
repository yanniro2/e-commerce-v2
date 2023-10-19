import Image from "next/image";
import React from "react";
import Number from "./Number";

interface ProductItem {
  name: string;
  quantity: number | null;
}

type ProductPageProps = {
  props: {
    name: string;
    title: string;
    product: string;
    newProduct: boolean;
    description: string;
    price: string;
    quantity: number;
    features: string;
    inthebox: ProductItem[];
  };
};

function ProductPage({ props }: ProductPageProps) {
  return (
    <section className="w-screen h-full flex items-center justify-center flex-col">
      <div className="container pt-[4rem]">
        <a href="/headphones" className="items-start  opacity-50 capitalize">
          go back
        </a>
      </div>

      <div className="container h-[80vh] flex items-center justify-center mx-auto gap-[2rem]  flex-row-reverse">
        <div className="left w-full h-full flex items-start justify-center flex-col gap-[2.5rem]">
          <div className="flex flex-col items-start gap-5">
            {props.newProduct ? (
              <p className="p text-primary">NEW PRODUCT</p>
            ) : (
              <></>
            )}
            <h1 className="h2 w-1/2">{props.title}</h1>
          </div>
          <p className="p-body text-black opacity-50 w-3/4 font-normal">
            {props.description}
          </p>

          <div className="h6 font-semibold">${props.price}</div>
          <div className="flex items-center gap-[2rem]">
            <Number quantity={props.quantity} />
            <button className="btn btn-1">add to cart</button>
          </div>
        </div>
        <div className="left w-full h-full flex items-center justify-center pr-[3rem]">
          <Image
            src={props.product}
            width={1000}
            height={1000}
            alt="product img"
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="container h-[60vh] mx-auto flex justify-between items-start py-[2rem] gap-[4rem] pr-[6rem]">
        <div className="w-2/3">
          <h1 className="h3">features</h1>
          <p className="p-body opacity-50 leading-relaxed w-full outline-0 min-h-max whitespace-pre-line py-[2rem] font-normal">
            {props.features}
          </p>
        </div>
        <div className="w-1/3">
          <h1 className="h3 pb-[2rem]">in the box</h1>
          {props.inthebox.map((data) => (
            <div
              key={data.name}
              className="flex items-center gap-[1rem] w-full  p-body justify-between pb-[10px]">
              <div className="text-primary font-bold w-[2rem]">
                {data.quantity}x
              </div>
              <div className="opacity-50 font-normal capitalize w-full">
                {data.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container h-[80vh] mx-auto py-[2rem]">
        <div className="grid grid-rows-2 grid-cols-3 w-full h-full gap-[2rem]">
          <div className=" row-start-1 row-end-2 col-start-1 col-end-2">
            <Image
              src={props.min_1}
              width={500}
              height={500}
              alt="img gallery min 1"
              className="rounded-xl object-cover w-full h-full hover:scale-105 cursor-pointer transition"
            />
          </div>
          <div className=" row-start-2 row-end-3 col-start-1 col-end-2">
            <Image
              src={props.min_2}
              width={500}
              height={500}
              alt="img gallery min 2"
              className="rounded-xl object-cover w-full h-full hover:scale-105 cursor-pointer transition"
            />
          </div>
          <div className=" row-start-1 row-end-3 col-start-2 col-end-4">
            <Image
              src={props.max}
              width={1000}
              height={1000}
              alt="img gallery max"
              className="rounded-xl object-cover w-full h-full hover:scale-105 cursor-pointer transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
