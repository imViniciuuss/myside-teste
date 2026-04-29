"use client";

import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  min-width: 160px;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 10px 16px;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 4px 0;
  z-index: 50;
  list-style: none;
  max-height: 220px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d1d5db;
    border-radius: 999px;
  }
`;

export const DropdownItem = styled.li<{ $active: boolean }>`
  padding: 8px 12px;
  font-size: 13px;
  color: ${({ $active }) => ($active ? "#111827" : "#374151")};
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  background-color: ${({ $active }) => ($active ? "#f3f4f6" : "transparent")};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #f3f4f6;
  }
`;
