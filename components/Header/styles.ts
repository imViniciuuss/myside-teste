"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderInner = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export const Logo = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.5px;
  cursor: pointer;
`;

export const CartButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
  }
`;

export const CartCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111827;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  padding: 0 6px;
`;
