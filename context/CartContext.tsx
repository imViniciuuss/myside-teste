"use client";

import { createContext, useReducer, ReactNode } from "react";
import { CartItem, CartAction, Product } from "@/types";

interface CartState {
  items: CartItem[];
}

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

const initialState: CartState = {
  items: [],
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === action.product.id
      );

      if (existingIndex >= 0) {
        const updatedItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, items: updatedItems };
      }

      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product.id !== action.productId
        ),
      };

    case "UPDATE_QUANTITY": {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => item.product.id !== action.productId
          ),
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    }

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const totalItems = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  function addItem(product: Product) {
    dispatch({ type: "ADD_ITEM", product });
  }

  function removeItem(productId: number) {
    dispatch({ type: "REMOVE_ITEM", productId });
  }

  function updateQuantity(productId: number, quantity: number) {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const value: CartContextValue = {
    items: state.items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
