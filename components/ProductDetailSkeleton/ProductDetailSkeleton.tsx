"use client";

import Skeleton from "@/components/Skeleton/Skeleton";
import {
  DetailShell,
  Layout,
  ImagePlaceholder,
  InfoColumn,
  ButtonRow,
  SpecsRow,
  SpecBlock,
} from "./styles";

export default function ProductDetailSkeleton() {
  return (
    <DetailShell>
      <Skeleton width="140px" height="16px" />

      <Layout>
        <ImagePlaceholder>
          <Skeleton width="100%" height="100%" radius="12px" />
        </ImagePlaceholder>

        <InfoColumn>
          <Skeleton width="90px" height="24px" radius="4px" />
          <Skeleton width="70%" height="28px" />
          <Skeleton width="40%" height="16px" />
          <Skeleton width="30%" height="36px" />

          <Skeleton width="50%" height="18px" />
          <Skeleton width="100%" height="14px" />
          <Skeleton width="90%" height="14px" />
          <Skeleton width="75%" height="14px" />

          <Skeleton width="40%" height="18px" />
          <Skeleton width="85%" height="14px" />
          <Skeleton width="80%" height="14px" />
          <Skeleton width="70%" height="14px" />

          <ButtonRow>
            <Skeleton width="100%" height="48px" radius="8px" />
            <Skeleton width="120px" height="48px" radius="8px" />
          </ButtonRow>
        </InfoColumn>
      </Layout>

      <Skeleton width="100%" height="1px" radius="0" />

      <SpecsRow>
        <SpecBlock>
          <Skeleton width="60px" height="13px" />
          <Skeleton width="100px" height="16px" />
        </SpecBlock>
        <SpecBlock>
          <Skeleton width="70px" height="13px" />
          <Skeleton width="40px" height="16px" />
        </SpecBlock>
        <SpecBlock>
          <Skeleton width="50px" height="13px" />
          <Skeleton width="120px" height="16px" />
        </SpecBlock>
        <SpecBlock>
          <Skeleton width="40px" height="13px" />
          <Skeleton width="80px" height="16px" />
        </SpecBlock>
      </SpecsRow>
    </DetailShell>
  );
}
