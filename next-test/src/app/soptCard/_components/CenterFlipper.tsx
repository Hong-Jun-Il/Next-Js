"use client";

import { MotionValue, useTransform } from "framer-motion";
import { ReactElement } from "react";

type CenterFlipperProps = {
  centerLineProgress: MotionValue<number>;
  flipRange: [number, number];
  children: (flipValue: MotionValue<number>) => ReactElement;
};

export default function CenterFlipper({
  centerLineProgress,
  flipRange,
  children,
}: CenterFlipperProps) {
  const flip = useTransform(centerLineProgress, flipRange, [0, 1]);

  return children(flip);
}
