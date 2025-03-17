"use client";

import useDomInspect from "@/hooks/useDomInspect";
import clsx from "clsx";
import {
  m,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
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

  useMotionValueEvent(scrollYProgress, "change", (e) => {
    console.log(e);
  });

  //   const posX = useTransform(scrollYProgress, (v) => console.log(v));

  return (
    <div ref={containerRef} className={clsx("h-[400rem]", className)}>
      <m.div ref={childrenRef} className="h-screen w-fit bottom-0" style={{}}>
        {/* {children({})} */}
      </m.div>
    </div>
  );
}
