"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import {
  Overlay,
  SheetPanel,
  SheetHeader,
  SheetTitle,
  CloseButton,
  SheetBody,
  EmptyCart,
  EmptyCartText,
  CartItemRow,
  ItemImageWrapper,
  ItemInfo,
  ItemTitle,
  ItemCategory,
  ItemPriceRow,
  ItemPrice,
  QuantityControl,
  QuantityButton,
  QuantityValue,
  RemoveButton,
  SheetFooter,
  TotalRow,
  TotalLabel,
  TotalValue,
  CheckoutButton,
  ClearButton,
} from "./styles";

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSheet({ isOpen, onClose }: CartSheetProps) {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } =
    useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <SheetPanel role="dialog" aria-label="Shopping cart">
        <SheetHeader>
          <SheetTitle>Cart ({totalItems})</SheetTitle>
          <CloseButton onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </CloseButton>
        </SheetHeader>

        <SheetBody>
          {items.length === 0 ? (
            <EmptyCart>
              <ShoppingBag size={48} strokeWidth={1.5} />
              <EmptyCartText>Your cart is empty</EmptyCartText>
            </EmptyCart>
          ) : (
            items.map((item) => (
              <CartItemRow key={item.product.id}>
                <ItemImageWrapper>
                  <Image
                    src={item.product.image}
                    alt={item.product.title}
                    fill
                    style={{ objectFit: "contain", padding: "6px" }}
                    sizes="72px"
                  />
                </ItemImageWrapper>
                <ItemInfo>
                  <ItemTitle>{item.product.title}</ItemTitle>
                  <ItemCategory>{item.product.category}</ItemCategory>
                  <ItemPriceRow>
                    <ItemPrice>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </ItemPrice>
                    <QuantityControl>
                      <QuantityButton
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </QuantityButton>
                      <QuantityValue>{item.quantity}</QuantityValue>
                      <QuantityButton
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </QuantityButton>
                    </QuantityControl>
                    <RemoveButton
                      onClick={() => removeItem(item.product.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </RemoveButton>
                  </ItemPriceRow>
                </ItemInfo>
              </CartItemRow>
            ))
          )}
        </SheetBody>

        {items.length > 0 && (
          <SheetFooter>
            <TotalRow>
              <TotalLabel>Total</TotalLabel>
              <TotalValue>${totalPrice.toFixed(2)}</TotalValue>
            </TotalRow>
            <CheckoutButton>Checkout</CheckoutButton>
            <ClearButton onClick={clearCart}>Clear Cart</ClearButton>
          </SheetFooter>
        )}
      </SheetPanel>
    </>
  );
}
