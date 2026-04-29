import { getProducts, getCategories } from "@/services/api";
import ProductList from "@/components/ProductList/ProductList";

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return <ProductList products={products} categories={categories} />;
}
