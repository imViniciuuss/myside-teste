"use client";

import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px 16px;
  flex: 1;
  min-width: 0;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: #6b7280;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
  color: #111827;
  background: transparent;

  &::placeholder {
    color: #9ca3af;
  }
`;
