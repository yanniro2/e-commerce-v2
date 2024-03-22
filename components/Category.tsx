

import Image from "next/image";
import React from "react";
import Link from "next/link";
import data from "../data/category.json";

export default async function Category() {
  return (
    <section className="w-screen h-[70vh] bg-milkWhite">
      <div className="container mx-auto py-[5rem] h-full flex items-center justify-between gap-[2rem]">
        {data.categories.map((category) => (
          <div
            key={category.title}
            className="w-1/3 h-2/3  bg-gray rounded-xl relative flex items-center justify-center flex-col pt-[5rem]">
            <Image
              src={`/assets/shared/desktop/${category.img}` ?? ""}
              alt="category img"
              className=" absolute top-0 left-1/2 -translate-y-1/4 w-full h-full -translate-x-1/2 object-contain"
              width={500}
              height={500}
            />
            <h1 className="h6 mt-[3rem]">{category.title}</h1>
            <Link href={`/${category.slug}`} className="btn btn-3">
              Shop &#8250;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}


