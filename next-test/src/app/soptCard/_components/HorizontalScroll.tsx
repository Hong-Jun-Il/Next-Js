"use client";

import useDomInspect from "@/hooks/useDomInspect";
import clsx from "clsx";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type HorizontalScrollProps = {
  className?: string;
  children: (ctx: {
    progress: MotionValue<number>;
    centerLine: MotionValue<number>;
  }) => ReactNode;
};

export default function HorizontalScroll({
  className,
  children,
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { width: containerWidth, height: containerHeight } =
    useDomInspect(containerRef);
  const { width: childrenWidth, height: childrenHeight } =
    useDomInspect(childrenRef);

  const posX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerWidth - childrenWidth]
  );
  const posY = useTransform(scrollYProgress, (v) =>
    v < 1 ? 0 : containerHeight - childrenHeight
  );

  const innerBoxPosition = useTransform(scrollYProgress, (v) =>
    v <= 0 || v >= 1 ? "static" : "fixed"
  );

  return (
    <div
      ref={containerRef}
      className={clsx("w-full overflow-x-hidden", className)}
    >
      <motion.div
        ref={childrenRef}
        className="h-screen w-fit bottom-0"
        style={{
          x: posX,
          y: posY,
          position: innerBoxPosition,
        }}
      >
        {children({ progress: scrollYProgress, centerLine: scrollYProgress })}
      </motion.div>
    </div>
  );
}
