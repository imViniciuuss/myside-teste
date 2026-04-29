import { getProducts, getProductById } from "@/services/api";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  try {
    const products = await getProducts();

    return products.map((product) => ({
      id: String(product.id),
    }));
  } catch (error) {
    console.error("Failed to generate static params for products:", error);
    return [];
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  return <ProductDetail product={product} />;
}
