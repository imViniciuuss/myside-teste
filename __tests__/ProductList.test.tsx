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
  createProduct(9, "Gaming Mouse", "electronics"),
  createProduct(10, "Blue Dress", "women's clothing"),
  createProduct(11, "Smart Watch", "electronics"),
  createProduct(12, "Winter Coat", "men's clothing"),
  createProduct(13, "Pearl Earrings", "jewelery"),
  createProduct(14, "Running Shorts", "men's clothing"),
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
  it("renders list with initial pagination (12 items on page 1)", () => {
    renderList();

    expect(screen.getByText("Backpack Alpha")).toBeInTheDocument();
    expect(screen.getByText("Headphones Pro")).toBeInTheDocument();

    expect(screen.getByText("Gold Necklace")).toBeInTheDocument();
    expect(screen.getByText("Winter Coat")).toBeInTheDocument();
    expect(screen.queryByText("Pearl Earrings")).not.toBeInTheDocument();
    expect(screen.queryByText("Running Shorts")).not.toBeInTheDocument();

    expect(screen.getByText("Showing 12 of 14 products")).toBeInTheDocument();
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
    expect(screen.getByText("Showing 3 of 3 products")).toBeInTheDocument();
  });

  it("changes page when clicking next page button", () => {
    renderList();

    fireEvent.click(screen.getByRole("button", { name: "2" }));

    expect(screen.getByText("Pearl Earrings")).toBeInTheDocument();
    expect(screen.getByText("Running Shorts")).toBeInTheDocument();
    expect(screen.queryByText("Backpack Alpha")).not.toBeInTheDocument();
    expect(screen.getByText("Showing 2 of 14 products")).toBeInTheDocument();
  });
});