import Image from "next/image";
import React from "react";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);
export default async function YoumayLike() {
  const headphone = await reader.collections.headphones.all();
  const speaker = await reader.collections.speakers.all();
  const earphone = await reader.collections.earphones.all();

  const Item = ({ data }: any) => {
    return (
      <div
        key={data.entry.title}
        className="flex items-center justify-center gap-[1rem] w-1/3 flex-col h-[60vh]">
        <Image
          src={data.entry.product}
          alt="category img"
          className="w-full h-[40vh] object-cover rounded-xl  bg-gray scale-90 "
          width={400}
          height={400}
        />

        <h2 className="h5">{data.entry.name}</h2>
        <a href={data.entry.title} className="btn btn-1 w-max">
          see product
        </a>
      </div>
    );
  };

  return (
    <div className="container mx-auto h-[80vh] text-center py-[1rem]">
      <h1 className="h3 py-[1rem] pt-[2rem]">you may also like</h1>
      <div className="flex flex-row justify-between items-center w-full h-full gap-[1rem]">
        {headphone.map((data, index) => {
          if (index === 0) {
            return <Item data={data} key={index} />;
          }
          return null; // or you can ignore if you don't want to render anything for other indices
        })}

        {speaker.map((data, index) => {
          if (index === 0) {
            return <Item data={data} key={index} />;
          }
          return null; // or you can ignore if you don't want to render anything for other indices
        })}

        {earphone.map((data, index) => {
          if (index === 0) {
            return <Item data={data} key={index} />;
          }
          return null; // or you can ignore if you don't want to render anything for other indices
        })}
      </div>
    </div>
  );
}
