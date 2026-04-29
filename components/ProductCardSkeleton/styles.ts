"use client";

import styled from "styled-components";

export const CardShell = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 220px;
  background-color: #f3f4f6;

  @media (min-width: 768px) {
    height: 260px;
  }
`;

export const BodyWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
