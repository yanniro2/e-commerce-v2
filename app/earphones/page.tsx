import Heading from '@/components/Heading'
import Product from '@/components/Product'
import React from 'react'
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
const reader = createReader(process.cwd(), keystaticConfig);
export default async function Page() {
  
  const product = await reader.collections.earphones.all();

  const newProducts = product.filter((product) => product.entry.newProduct);
  const regularProducts = product.filter((product) => !product.entry.newProduct);
  return (
    <div>
      <Heading title="earphones" />
      {newProducts.map((product) => (
        <Product
          key={product.entry.title}
          title={product.entry.title}
          slug={`earphones/${product.slug}`}
          img={product.entry.img ?? ""} // Use nullish coalescing operator
          newProduct={product.entry.newProduct}
          details={product.entry.details}
          flex={"flex-row"}
        />
      ))}

      {regularProducts.map((product, index) => (
        <Product
          key={product.entry.title}
          title={product.entry.title}
          slug={`/earphones/${product.slug}`}
          img={product.entry.img ?? ""} // Use nullish coalescing operator
          newProduct={product.entry.newProduct}
          details={product.entry.details}
          flex={`${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
        />
      ))}
    </div>
  );

 
}


