"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/types";

const API_BASE_URL = "https://fakestoreapi.com";

export default function ProdutoPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "ready">("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadProducts() {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await response.json();
        if (!cancelled) {
          setProducts(data);
          setStatus("ready");
        }
      } catch (error) {
        console.error("Failed to fetch products on client:", error);
        if (!cancelled) setStatus("error");
      }
    }

    loadProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") return <div>Carregando produtos...</div>;
  if (status === "error") return <div>Erro ao carregar produtos.</div>;

  return (
    <div>
      <h1>Produto</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}