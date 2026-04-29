import { getProducts, getCategories } from "@/services/api";
import ProductList from "@/components/ProductList/ProductList";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts().catch((error) => {
      console.error("Failed to fetch products on home:", error);
      return [];
    }),
    getCategories().catch((error) => {
      console.error("Failed to fetch categories on home:", error);
      return [];
    }),
  ]);

  return <ProductList products={products} categories={categories} />;
}
