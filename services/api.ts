import { Product } from "@/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/api/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${BASE_URL}/api/categories`, {
    cache: "no-store",
  });
  
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}
