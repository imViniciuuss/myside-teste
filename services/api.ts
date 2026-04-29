import { Product } from "@/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/api/products`, {
    cache: "no-store",
  });

  const data = await response.json();

  return data;
}

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/api/products/${id}`, {
    cache: "no-store",
  });

  const data = await response.json();

  return data;
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${BASE_URL}/api/categories`, {
    cache: "no-store",
  });

  const data = await response.json();
  return data;
}
