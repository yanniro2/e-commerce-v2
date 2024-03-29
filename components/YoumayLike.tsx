import Image from "next/image";
import React from "react";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";
import Link from "next/link";

const reader = createReader(process.cwd(), keystaticConfig);
import headphonesData from "../data/products/headphones.json";
import earphonesData from "../data/products/earphones.json";
import speakersData from "../data/products/speakers.json";

export default function YoumayLike() {
  const fetchAllData = async () => {
    const headphone = await reader.collections.headphones.all();
    const speaker = await reader.collections.speakers.all();
    const earphone = await reader.collections.earphones.all();
    return { headphone, speaker, earphone };
  };

  const Item = ({ data, slug }: any) => {
    return (
      <div
        key={data.title}
        className="flex items-center justify-center gap-[1rem] w-1/3 flex-col h-[80vh]">
        <Image
          src={`/assets/${data.slug}/desktop/image-category-page-preview.jpg`}
          alt="category img"
          className="w-full h-[40vh] object-cover rounded-xl bg-gray scale-90 "
          width={400}
          height={400}
        />
        <h2 className="h5">{data.title}</h2>
        <Link href={`/${slug}/${data.slug}`} className="btn btn-1 w-max">
          see product
        </Link>
      </div>
    );
  };

  const renderData = async () => {
    const { headphone, speaker, earphone } = await fetchAllData();
    return (
      <div className="container mx-auto h-[80vh] text-center pb-[6rem]">
        <h1 className="h3 py-[1rem] pt-[2rem]">you may also like</h1>
        <div className="flex flex-row justify-between items-center w-full h-full gap-[1rem]">
          {headphonesData.products.map((data: any, index: number) => {
            if (index === 0) {
              return <Item data={data} key={index} slug={"headphones"} />;
            }
            return null; // or you can ignore if you don't want to render anything for other indices
          })}
          {earphonesData.products.map((data: any, index: number) => {
            if (index === 0) {
              return <Item data={data} key={index} slug={"earphones"} />;
            }
            return null; // or you can ignore if you don't want to render anything for other indices
          })}
          {speakersData.products.map((data: any, index: number) => {
            if (index === 0) {
              return <Item data={data} key={index} slug={"speakers"} />;
            }
            return null; // or you can ignore if you don't want to render anything for other indices
          })}
        </div>
      </div>
    );
  };

  return <>{renderData()}</>;
}
