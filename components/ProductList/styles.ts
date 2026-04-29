"use client";

import styled from "styled-components";

export const ListContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 32px 32px;

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

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TitleGroup = styled.div`
  flex-shrink: 0;
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
`;

export const PageSubtitle = styled.p`
  font-size: 15px;
  color: #6b7280;
`;

export const ToolbarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  max-width: 600px;

  @media (max-width: 767px) {
    width: 100%;
    max-width: none;
  }

  @media (max-width: 479px) {
    flex-direction: column;
  }
`;

export const ResultCount = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EmptyMessage = styled.p`
  font-size: 16px;
  color: #6b7280;
  text-align: center;
  padding: 48px 0;
  grid-column: 1 / -1;
`;
