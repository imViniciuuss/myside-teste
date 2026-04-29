import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { CartProvider } from "@/context/CartContext";
import { Product } from "@/types";

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  price: 49.99,
  description: "A great product for testing purposes",
  category: "electronics",
  image: "https://fakestoreapi.com/img/test.jpg",
  rating: { rate: 4.5, count: 120 },
};

function renderWithCart() {
  render(
    <CartProvider>
      <ProductCard product={mockProduct} />
    </CartProvider>
  );
}

describe("ProductCard", () => {
  it("renders title, price and description", () => {
    renderWithCart();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$49.99")).toBeInTheDocument();
    expect(
      screen.getByText("A great product for testing purposes")
    ).toBeInTheDocument();
  });

  it("renders category and rating", () => {
    renderWithCart();
    expect(screen.getByText("electronics")).toBeInTheDocument();
    expect(screen.getByText("(4.5)")).toBeInTheDocument();
  });

  it("renders product link to detail page", () => {
    renderWithCart();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/products/1");
  });

  it("renders Add to Cart button and allows click", () => {
    renderWithCart();
    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});