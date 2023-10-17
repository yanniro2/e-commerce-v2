import Heading from '@/components/Heading'
import Product from '@/components/Product'
import React from 'react'
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
const reader = createReader(process.cwd(), keystaticConfig);
export default async function Page() {
  
  const product = await reader.collections.headphones.all();

  const newProducts = product.filter((product) => product.entry.newProduct);
  const regularProducts = product.filter((product) => !product.entry.newProduct);
  return (
    <div>
      <Heading title="headphones" />
      {newProducts.map((product) => (
        <Product
          key={product.entry.title}
          title={product.entry.title}
          slug={`headphones/${product.slug}`}
          img={product.entry.product ?? ""} // Use nullish coalescing operator
          newProduct={product.entry.newProduct}
          details={product.entry.description}
          flex={"flex-row"}
        />
      ))}

      {regularProducts.map((product, index) => (
        <Product
          key={product.entry.title}
          title={product.entry.title}
          slug={`/headphones/${product.slug}`}
          img={product.entry.product ?? ""} // Use nullish coalescing operator
          newProduct={product.entry.newProduct}
          details={product.entry.description}
          flex={`${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
        />
      ))}
    </div>
  );

 
}


