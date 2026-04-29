"use client";

import styled from "styled-components";
import Link from "next/link";

export const Card = styled.article`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

  @media (min-width: 768px) {
    height: 260px;
  }
`;

export const CardBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  line-height: 1.3;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CategoryBadge = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #374151;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 2px 8px;
  white-space: nowrap;
  text-transform: capitalize;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  color: #f59e0b;
  font-size: 14px;
`;

export const RatingText = styled.span`
  font-size: 13px;
  color: #6b7280;
  margin-left: 4px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 0 16px 16px;
  gap: 12px;
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
`;

export const AddToCartBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background-color: #111827;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #1f2937;
  }
`;
