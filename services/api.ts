import { Product, ProductPayload, ProductsPayload } from "@/types";

const API_BASE_URL = "https://dummyjson.com";

function mapProductPayloadToProduct(product: ProductPayload): Product {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.thumbnail ?? product.images?.[0] ?? "",
    rating: {
      rate: product.rating,
      count: product.reviews?.length ?? product.stock ?? 0,
    },
  };
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/products?limit=60`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductsPayload = await response.json();
  return data.products.map(mapProductPayloadToProduct);
}

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const data: ProductPayload = await response.json();
  return mapProductPayloadToProduct(data);
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${API_BASE_URL}/products/category-list`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}
