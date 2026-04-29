import { getProducts, getProductById } from "@/services/api";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  return <ProductDetail product={product} />;
}
