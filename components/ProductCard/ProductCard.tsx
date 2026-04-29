"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/hooks/useCart";
import {
  Card,
  CardLink,
  ImageWrapper,
  CardBody,
  TitleRow,
  Title,
  CategoryBadge,
  RatingRow,
  Stars,
  RatingText,
  Description,
  PriceRow,
  Price,
  AddToCartBtn,
} from "./styles";

interface ProductCardProps {
  product: Product;
}

function renderStars(rate: number) {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Stars>
      {"★".repeat(fullStars)}
      {hasHalfStar && "★"}
      {"☆".repeat(emptyStars)}
    </Stars>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  }

  return (
    <Card>
      <CardLink href={`/products/${product.id}`}>
        <ImageWrapper>
          <Image
            src={product.image}
            alt={product.title}
            fill
            loading="eager"
            style={{ objectFit: "contain" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </ImageWrapper>
        <CardBody>
          <TitleRow>
            <Title>{product.title}</Title>
            <CategoryBadge>{product.category}</CategoryBadge>
          </TitleRow>
          <RatingRow>
            {renderStars(product.rating.rate)}
            <RatingText>({product.rating.rate})</RatingText>
          </RatingRow>
          <Description>{product.description}</Description>
        </CardBody>
      </CardLink>
      <PriceRow>
        <Price>${product.price.toFixed(2)}</Price>
        <AddToCartBtn onClick={handleAddToCart}>
          <ShoppingCart size={14} />
          Add to Cart
        </AddToCartBtn>
      </PriceRow>
    </Card>
  );
}
