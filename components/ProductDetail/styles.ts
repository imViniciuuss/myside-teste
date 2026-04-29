"use client";

import styled from "styled-components";
import Link from "next/link";

export const DetailContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px 16px 48px;
  max-width: 1200px;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #374151;
  text-decoration: none;
  margin-bottom: 24px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }
`;

export const ProductLayout = styled.div`
  display: flex;
  gap: 48px;
  margin-bottom: 48px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  min-height: 400px;
  background-color: #f9fafb;
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;

  @media (max-width: 767px) {
    max-width: none;
    min-height: 300px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: #1f2937;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 4px 12px;
  text-transform: capitalize;
  margin-bottom: 8px;
  width: fit-content;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
  line-height: 1.3;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
`;

export const Stars = styled.span`
  color: #f59e0b;
  font-size: 16px;
  letter-spacing: 1px;
`;

export const RatingText = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

export const ProductPrice = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 24px;
`;

export const DescriptionTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
`;

export const DescriptionText = styled.p`
  font-size: 15px;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 24px;
`;

export const FeaturesTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 12px;
`;

export const FeaturesList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 32px;
`;

export const FeatureItem = styled.li`
  font-size: 14px;
  color: #4b5563;
  line-height: 1.8;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;

  @media (max-width: 479px) {
    flex-direction: column;
  }
`;

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 1;
  padding: 14px 24px;
  background-color: #111827;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1f2937;
  }
`;

export const BuyNowButton = styled.button`
  padding: 14px 32px;
  background-color: #ffffff;
  color: #111827;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 32px;
`;

export const SpecsTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`;

export const SpecLabel = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 4px;
`;

export const SpecValue = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #111827;
  text-transform: capitalize;
`;
