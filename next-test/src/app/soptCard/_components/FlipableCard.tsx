"use client";

import clsx from "clsx";
import { MotionValue, useTransform, motion } from "framer-motion";
import { ComponentProps, forwardRef, ReactNode } from "react";

type FlipableCardProps = {
  className: string;
  front: ReactNode;
  back: ReactNode;
  flipValue: MotionValue<number>;
};

const FlipableCard = forwardRef<
  HTMLDivElement,
  ComponentProps<"div"> & FlipableCardProps
>(({ className, front, back, flipValue }, ref) => {
  return (
    <div className={clsx("perspective-[1000px]", className)} ref={ref}>
      <motion.div className="transform-3d relative w-full h-full"></motion.div>
    </div>
  );
});
