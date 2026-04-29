import { NextResponse } from "next/server";

const API_BASE_URL = "https://fakestoreapi.com";

export async function GET() {
  const response = await fetch(`${API_BASE_URL}/products/categories`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Failed to fetch categories" },
      { status: 502 }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
