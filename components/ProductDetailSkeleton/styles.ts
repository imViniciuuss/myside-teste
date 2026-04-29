"use client";

import styled from "styled-components";

export const DetailShell = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 24px 16px 48px;
  max-width: 1200px;
`;

export const Layout = styled.div`
  display: flex;
  gap: 48px;
  margin-top: 24px;
  margin-bottom: 48px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 400px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 767px) {
    max-width: none;
    min-height: 300px;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;

  @media (max-width: 479px) {
    flex-direction: column;
  }
`;

export const SpecsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`;

export const SpecBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
