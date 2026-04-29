"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import CartSheet from "@/components/CartSheet/CartSheet";
import {
  HeaderContainer,
  HeaderInner,
  Logo,
  CartButtonWrapper,
  CartCount,
} from "./styles";

export default function Header() {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <HeaderInner>
          <Link href="/">
            <Logo>MySide Store</Logo>
          </Link>
          <CartButtonWrapper onClick={() => setIsCartOpen(true)}>
            <ShoppingCart size={18} />
            Cart
            {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
          </CartButtonWrapper>
        </HeaderInner>
      </HeaderContainer>
      <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
