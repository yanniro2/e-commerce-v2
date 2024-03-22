import Heading from "@/components/Heading";
import Product from "@/components/Product";
import React from "react";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
const reader = createReader(process.cwd(), keystaticConfig);
import data from "../../data/speakersData.json";
export default async function Page() {
  const newProducts = data.products.filter((product) => product.newProduct);
  const regularProducts = data.products.filter(
    (product) => !product.newProduct
  );
  return (
    <div>
      <Heading title="speakers" />
      {newProducts.map((product) => (
        <Product
          key={product.title}
          title={product.title}
          slug={`speakers/${product.slug}`}
          img={product.img ?? ""} // Use nullish coalescing operator
          newProduct={product.newProduct}
          details={product.details}
          flex={"flex-row"}
        />
      ))}

      {regularProducts.map((product, index) => (
        <Product
          key={product.title}
          title={product.title}
          slug={`/speakers/${product.slug}`}
          img={product.img ?? ""} // Use nullish coalescing operator
          newProduct={product.newProduct}
          details={product.details}
          flex={`${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
        />
      ))}
    </div>
  );
}
