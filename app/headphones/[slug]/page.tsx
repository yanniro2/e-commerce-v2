import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import ProductPage from "../../../components/ProductPage";

// Define the ProductItem type
type ProductItem = {
  name: string;
  quantity: number | null;
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page({ params }: { params: { slug: string } }) {
  const slugs = await reader.collections.headphones.read(params.slug);

  if (!slugs) {
    return <div>No Products</div>;
  }

  const product = slugs.product ?? ""; // Default to an empty string if product is null
  const quantity = slugs.quantity ?? 0; // Default quantity to 0 if it's null

  const modifiedSlugs = {
    ...slugs,
    product,
    quantity,
    inthebox: slugs.inthebox as ProductItem[], // Ensure the type is compatible
  };

  return <ProductPage props={modifiedSlugs} />;
}
