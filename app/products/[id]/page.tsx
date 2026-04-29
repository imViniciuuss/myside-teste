import { notFound } from "next/navigation";
import { getProductById } from "@/services/api";
import ProductDetail from "@/components/ProductDetail/ProductDetail";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  try {
    const product = await getProductById(Number(id));
    return <ProductDetail product={product} />;
  } catch (error) {
    console.error(`Failed to fetch product ${id}:`, error);
    notFound();
  }
}
