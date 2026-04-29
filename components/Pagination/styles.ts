"use client";

import styled from "styled-components";

export const PaginationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#374151")};
  background-color: ${({ $active }) => ($active ? "#111827" : "transparent")};
  border: 1px solid ${({ $active }) => ($active ? "#111827" : "#e5e7eb")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ $active }) => ($active ? "#1f2937" : "#f3f4f6")};
    border-color: ${({ $active }) => ($active ? "#1f2937" : "#d1d5db")};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  font-size: 14px;
  color: #6b7280;
  margin: 0 8px;
`;
