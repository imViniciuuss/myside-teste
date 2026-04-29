import { NextResponse } from "next/server";

const API_BASE_URL = "https://fakestoreapi.com";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_: Request, { params }: RouteParams) {
  const { id } = await params;
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Failed to fetch product" },
      { status: response.status === 404 ? 404 : 502 }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
