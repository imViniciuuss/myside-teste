"use client";

import { SkeletonBox } from "./styles";

interface SkeletonProps {
  width?: string;
  height?: string;
  radius?: string;
}

export default function Skeleton({ width, height, radius }: SkeletonProps) {
  return <SkeletonBox $width={width} $height={height} $radius={radius} />;
}
