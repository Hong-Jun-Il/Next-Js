"use client";

import useDomInspect from "@/hooks/useDomInspect";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useRef } from "react";
import FlipableCard from "./_components/FlipableCard";

const test = Array.from({ length: 12 }, (_, i) => i + 1);

export default function TestPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // useMotionValueEvent(scrollYProgress, "change", (e) => {
  //   console.log(e);
  // });

  const { width: containerWidth, height: containerHeight } =
    useDomInspect(containerRef);
  const { width: childrenWidth, height: childrenHeight } =
    useDomInspect(childrenRef);

  const innerBoxPosX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerWidth - childrenWidth]
  );
  const innerBoxPosY = useTransform(scrollYProgress, (v) =>
    v < 1 ? 0 : containerHeight - childrenHeight
  );
  const innerBoxPosition = useTransform(scrollYProgress, (v) =>
    v <= 0 || v >= 1 ? "static" : "fixed"
  );

  return (
    <main className="text-[10rem]">
      <div className="flex justify-center items-center h-[110dvh] bg-amber-50 w-full">
        스페이서1
      </div>
      <div ref={containerRef} className="h-[400rem] bg-blue-100">
        <motion.div
          ref={childrenRef}
          className="w-fit h-screen bg-emerald-100 border border-red-500 top-0"
          style={{
            position: innerBoxPosition,
            x: innerBoxPosX,
            y: innerBoxPosY,
          }}
        >
          <div className="h-full flex justify-center w-[50vw] items-center gap-[3.2rem]">
            <FlipableCard scrollYProgress={scrollYProgress} />
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center h-[130dvh] bg-emerald-400 w-full">
        스페이서2
      </div>
    </main>
  );
}
