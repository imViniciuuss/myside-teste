import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductList from "@/components/ProductList/ProductList";
import { CartProvider } from "@/context/CartContext";
import { Product } from "@/types";

function createProduct(id: number, title: string, category: string): Product {
  return {
    id,
    title,
    price: 10 + id,
    description: `Description for ${title}`,
    category,
    image: `https://fakestoreapi.com/img/${id}.jpg`,
    rating: { rate: 4.2, count: 100 + id },
  };
}

const mockProducts: Product[] = [
  createProduct(1, "Backpack Alpha", "electronics"),
  createProduct(2, "Speaker Boom", "electronics"),
  createProduct(3, "Silver Ring", "jewelery"),
  createProduct(4, "Leather Jacket", "men's clothing"),
  createProduct(5, "Canvas Shoes", "women's clothing"),
  createProduct(6, "Headphones Pro", "electronics"),
  createProduct(7, "Gold Necklace", "jewelery"),
  createProduct(8, "Denim Pants", "men's clothing"),
];

const mockCategories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

function renderList() {
  render(
    <CartProvider>
      <ProductList products={mockProducts} categories={mockCategories} />
    </CartProvider>
  );
}

describe("ProductList", () => {
  it("renders list with initial pagination (6 items on page 1)", () => {
    renderList();

    expect(screen.getByText("Backpack Alpha")).toBeInTheDocument();
    expect(screen.getByText("Headphones Pro")).toBeInTheDocument();

    expect(screen.queryByText("Gold Necklace")).not.toBeInTheDocument();
    expect(screen.queryByText("Denim Pants")).not.toBeInTheDocument();

    expect(screen.getByText("Showing 6 of 8 products")).toBeInTheDocument();
  });

  it("filters products by search input", () => {
    renderList();

    const searchInput = screen.getByPlaceholderText("Search products...");
    fireEvent.change(searchInput, { target: { value: "speaker" } });

    expect(screen.getByText("Speaker Boom")).toBeInTheDocument();
    expect(screen.queryByText("Backpack Alpha")).not.toBeInTheDocument();
    expect(screen.getByText("Showing 1 of 1 products")).toBeInTheDocument();
  });

  it("filters products by category using dropdown", () => {
    renderList();

    const dropdownButton = screen.getByRole("button", { name: /all categories/i });
    fireEvent.click(dropdownButton);

    fireEvent.click(screen.getByText("Jewelery"));

    expect(screen.getByText("Silver Ring")).toBeInTheDocument();
    expect(screen.queryByText("Backpack Alpha")).not.toBeInTheDocument();
    expect(screen.getByText("Showing 2 of 2 products")).toBeInTheDocument();
  });

  it("changes page when clicking next page button", () => {
    renderList();

    fireEvent.click(screen.getByRole("button", { name: "2" }));

    expect(screen.getByText("Gold Necklace")).toBeInTheDocument();
    expect(screen.getByText("Denim Pants")).toBeInTheDocument();
    expect(screen.queryByText("Backpack Alpha")).not.toBeInTheDocument();
    expect(screen.getByText("Showing 2 of 8 products")).toBeInTheDocument();
  });
});