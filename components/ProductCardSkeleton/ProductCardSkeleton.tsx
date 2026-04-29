"use client";

import Skeleton from "@/components/Skeleton/Skeleton";
import {
  CardShell,
  ImagePlaceholder,
  BodyWrapper,
  TitleRow,
} from "./styles";

export default function ProductCardSkeleton() {
  return (
    <CardShell>
      <ImagePlaceholder>
        <Skeleton width="100%" height="100%" radius="0" />
      </ImagePlaceholder>
      <BodyWrapper>
        <TitleRow>
          <Skeleton width="60%" height="18px" />
          <Skeleton width="70px" height="22px" radius="4px" />
        </TitleRow>
        <Skeleton width="40%" height="14px" />
        <Skeleton width="100%" height="14px" />
        <Skeleton width="80%" height="14px" />
        <Skeleton width="30%" height="24px" />
      </BodyWrapper>
    </CardShell>
  );
}
