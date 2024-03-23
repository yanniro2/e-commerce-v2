import React from "react";
import data from "../../../data/products/headphones.json";
import ProductPage from "../../../components/ProductPage";
import YoumayLike from "@/components/YoumayLike";
import Link from "next/link";
export default function Page({ params }: { params: { slug: string } }) {
  const current = data.products.find((product) => product.slug === params.slug);
  return (
    <>
      {current ? (
        <ProductPage props={current} />
      ) : (
        // <h1>shows</h1>
        <h1 className="container mx-auto pt-[4rem] text-center  font-semibold uppercase text-xl">
          No product founds go
          <Link
            href="/"
            className="text-primary hover:underline transition-all pl-3">
            home
          </Link>
        </h1>
      )}
      <YoumayLike />
    </>
  );
}
