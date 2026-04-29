import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { CartProvider } from "@/context/CartContext";
import { useCart } from "@/hooks/useCart";
import { Product } from "@/types";

const productA: Product = {
  id: 1,
  title: "Backpack",
  price: 30,
  description: "Backpack description",
  category: "electronics",
  image: "https://fakestoreapi.com/img/1.jpg",
  rating: { rate: 4.5, count: 10 },
};

const productB: Product = {
  id: 2,
  title: "Speaker",
  price: 30,
  description: "Speaker description",
  category: "electronics",
  image: "https://fakestoreapi.com/img/2.jpg",
  rating: { rate: 4.2, count: 20 },
};

function CartTestHarness() {
  const {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCart();

  return (
    <div>
      <p data-testid="items-count">{items.length}</p>
      <p data-testid="total-items">{totalItems}</p>
      <p data-testid="total-price">{totalPrice}</p>
      <p data-testid="qty-product-1">
        {items.find((item) => item.product.id === 1)?.quantity ?? 0}
      </p>

      <button onClick={() => addItem(productA)}>add-a</button>
      <button onClick={() => addItem(productB)}>add-b</button>
      <button onClick={() => removeItem(1)}>remove-a</button>
      <button onClick={() => updateQuantity(1, 3)}>qty-a-3</button>
      <button onClick={() => updateQuantity(1, 0)}>qty-a-0</button>
      <button onClick={clearCart}>clear</button>
    </div>
  );
}

function renderCart() {
  render(
    <CartProvider>
      <CartTestHarness />
    </CartProvider>
  );
}

describe("CartContext", () => {
  it("starts with empty cart", () => {
    renderCart();
    expect(screen.getByTestId("items-count")).toHaveTextContent("0");
    expect(screen.getByTestId("total-items")).toHaveTextContent("0");
    expect(screen.getByTestId("total-price")).toHaveTextContent("0");
  });

  it("adds a new item to cart", () => {
    renderCart();
    fireEvent.click(screen.getByText("add-a"));

    expect(screen.getByTestId("items-count")).toHaveTextContent("1");
    expect(screen.getByTestId("total-items")).toHaveTextContent("1");
    expect(screen.getByTestId("total-price")).toHaveTextContent("50");
    expect(screen.getByTestId("qty-product-1")).toHaveTextContent("1");
  });

  it("increments quantity when adding same product again", () => {
    renderCart();
    fireEvent.click(screen.getByText("add-a"));
    fireEvent.click(screen.getByText("add-a"));

    expect(screen.getByTestId("items-count")).toHaveTextContent("1");
    expect(screen.getByTestId("total-items")).toHaveTextContent("2");
    expect(screen.getByTestId("total-price")).toHaveTextContent("100");
    expect(screen.getByTestId("qty-product-1")).toHaveTextContent("2");
  });

  it("removes item from cart", () => {
    renderCart();
    fireEvent.click(screen.getByText("add-a"));
    fireEvent.click(screen.getByText("remove-a"));

    expect(screen.getByTestId("items-count")).toHaveTextContent("0");
    expect(screen.getByTestId("total-items")).toHaveTextContent("0");
    expect(screen.getByTestId("total-price")).toHaveTextContent("0");
  });

  it("updates quantity correctly", () => {
    renderCart();
    fireEvent.click(screen.getByText("add-a"));
    fireEvent.click(screen.getByText("qty-a-3"));

    expect(screen.getByTestId("qty-product-1")).toHaveTextContent("3");
    expect(screen.getByTestId("total-items")).toHaveTextContent("3");
    expect(screen.getByTestId("total-price")).toHaveTextContent("150");
  });

  it("removes item when quantity is updated to zero", () => {
    renderCart();
    fireEvent.click(screen.getByText("add-a"));
    fireEvent.click(screen.getByText("qty-a-0"));

    expect(screen.getByTestId("items-count")).toHaveTextContent("0");
    expect(screen.getByTestId("total-items")).toHaveTextContent("0");
    expect(screen.getByTestId("total-price")).toHaveTextContent("0");
  });

  it("clears all cart items", () => {
    renderCart();
    fireEvent.click(screen.getByText("add-a"));
    fireEvent.click(screen.getByText("add-b"));
    fireEvent.click(screen.getByText("clear"));

    expect(screen.getByTestId("items-count")).toHaveTextContent("0");
    expect(screen.getByTestId("total-items")).toHaveTextContent("0");
    expect(screen.getByTestId("total-price")).toHaveTextContent("0");
  });
});