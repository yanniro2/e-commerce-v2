
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";
import Image from 'next/image';
import React from 'react'
const reader = createReader(process.cwd(), keystaticConfig);

export default async function Category() {
  const category = await reader.collections.category.all();
  return (
    <section className="w-screen h-[70vh] bg-milkWhite">
      <div className="container mx-auto py-[5rem] h-full flex items-center justify-between gap-[2rem]">
        {category.map((category) => (
          <div
            key={category.slug}
            className="w-1/3 h-2/3  bg-gray rounded-xl relative flex items-center justify-center flex-col pt-[5rem]">
            <Image
              src={category.entry.avatar?? ""}
              alt="category img"
              className=" absolute top-0 left-1/2 -translate-y-1/4 w-full h-full -translate-x-1/2 object-contain"
              width={500}
              height={500}
            />
            <h1 className="h6 mt-[3rem]">{category.entry.title}</h1>
            <a href={category.slug} className="btn btn-3">
              Shop &#8250;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}


