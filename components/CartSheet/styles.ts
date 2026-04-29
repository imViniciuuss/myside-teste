"use client";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
  animation: ${fadeIn} 0.2s ease;
`;

export const SheetPanel = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 420px;
  background-color: #ffffff;
  z-index: 201;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.1);
`;

export const SheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
`;

export const SheetTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  border-radius: 6px;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.15s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }
`;

export const SheetBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 64px 0;
  color: #9ca3af;
`;

export const EmptyCartText = styled.p`
  font-size: 15px;
  color: #6b7280;
`;

export const CartItemRow = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemImageWrapper = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  background-color: #f9fafb;
  border-radius: 8px;
  flex-shrink: 0;
  overflow: hidden;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

export const ItemTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #111827;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ItemCategory = styled.span`
  font-size: 12px;
  color: #9ca3af;
  text-transform: capitalize;
  margin-top: 2px;
`;

export const ItemPriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 8px;
`;

export const ItemPrice = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #111827;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
`;

export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  background: none;
  cursor: pointer;
  color: #374151;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const QuantityValue = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #111827;
  min-width: 24px;
  text-align: center;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  color: #9ca3af;
  margin-left: 4px;
  transition: all 0.15s ease;

  &:hover {
    background-color: #fef2f2;
    color: #ef4444;
  }
`;

export const SheetFooter = styled.div`
  padding: 20px 24px;
  border-top: 1px solid #e5e7eb;
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const TotalLabel = styled.span`
  font-size: 15px;
  color: #6b7280;
`;

export const TotalValue = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 14px;
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

export const ClearButton = styled.button`
  width: 100%;
  padding: 10px;
  background: none;
  color: #6b7280;
  font-size: 13px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  transition: color 0.15s ease;

  &:hover {
    color: #ef4444;
  }
`;
