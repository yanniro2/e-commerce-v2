import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import ProductPage from "../../../components/ProductPage";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page({ params }: { params: { slug: string } }) {
  const slugs = await reader.collections.headphones.read(params.slug);

  if (!slugs) {
    return <div>No Products</div>;
  }

  const product = slugs.product !== null ? slugs.product : ""; // Default to an empty string if product is null
  const quantity = slugs.quantity !== null ? slugs.quantity : 0; // Default quantity to 0 if it's null

  const modifiedSlugs = {
    ...slugs,
    product,
    quantity,
  };

  return <ProductPage props={modifiedSlugs} />;
}
