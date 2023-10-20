import Image from "next/image";
import React from "react";


type Props = {
  title: string;
  slug: string;
  img: string;
  newProduct: boolean;
  details: string;
  flex: string;
};

function Product({ title, slug, img, newProduct, details, flex }: Props) {
  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <div
        className={`container h-3/4 flex items-center justify-center mx-auto gap-[2rem] pl-[2rem] ${flex}`}>
        <div className="left w-full h-full flex items-start justify-center flex-col gap-[2.5rem]">
          <div className="flex flex-col items-start gap-5">
            {newProduct ? <p className="p text-primary">NEW PRODUCT</p> : <></>}
            <h1 className="h2 w-1/2">{title}</h1>
          </div>

          <p className="p-body text-black opacity-50 w-3/4 font-normal">
            {details}
          </p>

          <a href={slug} className="btn btn-1">
            See Product
          </a>
        </div>
        <div className="left w-full h-full flex items-center justify-center pr-[3rem]">
          <Image
            src={img}
            width={1000}
            height={1000}
            alt="product img"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Product;
