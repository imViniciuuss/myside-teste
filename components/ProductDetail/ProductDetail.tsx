"use client";

import Image from "next/image";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/hooks/useCart";
import {
  DetailContainer,
  BackLink,
  ProductLayout,
  ImageSection,
  InfoSection,
  CategoryBadge,
  ProductTitle,
  RatingRow,
  Stars,
  RatingText,
  ProductPrice,
  DescriptionTitle,
  DescriptionText,
  FeaturesTitle,
  FeaturesList,
  FeatureItem,
  ButtonGroup,
  AddToCartButton,
  BuyNowButton,
  Divider,
  SpecsTitle,
  SpecsGrid,
  SpecLabel,
  SpecValue,
} from "./styles";

interface ProductDetailProps {
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

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart();

  return (
    <DetailContainer>
      <BackLink href="/">
        <ArrowLeft size={16} />
        Back to Catalog
      </BackLink>

      <ProductLayout>
        <ImageSection>
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain", padding: "24px" }}
            sizes="(max-width: 768px) 100vw, 480px"
            priority
          />
        </ImageSection>

        <InfoSection>
          <CategoryBadge>{product.category}</CategoryBadge>
          <ProductTitle>{product.title}</ProductTitle>

          <RatingRow>
            {renderStars(product.rating.rate)}
            <RatingText>
              {product.rating.rate} out of 5
            </RatingText>
          </RatingRow>

          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>

          <DescriptionTitle>Product Description</DescriptionTitle>
          <DescriptionText>{product.description}</DescriptionText>

          <ButtonGroup>
            <AddToCartButton onClick={() => addItem(product)}>
              <ShoppingCart size={18} />
              Add to Cart
            </AddToCartButton>
            <BuyNowButton>Buy Now</BuyNowButton>
          </ButtonGroup>
        </InfoSection>
      </ProductLayout>

      <Divider />

      <SpecsTitle>Product Specifications</SpecsTitle>
      <SpecsGrid>
        <div>
          <SpecLabel>Category</SpecLabel>
          <SpecValue>{product.category}</SpecValue>
        </div>
        <div>
          <SpecLabel>Product ID</SpecLabel>
          <SpecValue>{product.id}</SpecValue>
        </div>
        <div>
          <SpecLabel>Rating</SpecLabel>
          <SpecValue>{product.rating.rate} / 5 ({product.rating.count} reviews)</SpecValue>
        </div>
        <div>
          <SpecLabel>Price</SpecLabel>
          <SpecValue>${product.price.toFixed(2)}</SpecValue>
        </div>
      </SpecsGrid>
    </DetailContainer>
  );
}
