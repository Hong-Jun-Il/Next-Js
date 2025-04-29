"use client";

import useDomInspect from "@/hooks/useDomInspect";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

const cardList = Array.from({ length: 5 }, (_, i) => i + 1);

export default function HorizentalScroll() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const viewRef = useRef<HTMLDivElement | null>(null);

  const { height: wrapperHeight } = useDomInspect(wrapperRef);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const translateX = useTransform(scrollYProgress, [0, 0.9], ["100vw", "0vw"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <div ref={wrapperRef} className="w-full h-[400dvh]">
      <div
        ref={viewRef}
        className="w-full h-screen sticky bg-red-300 top-0 overflow-x-hidden"
      >
        <motion.div
          style={{
            translateX: translateX,
          }}
          className="w-full h-full flex items-center justify-between perspective-distant px-5"
        >
          {cardList.map((card, i) => (
            <Card
              key={card}
              scrollYProgress={scrollYProgress}
              totalCard={cardList.length}
              idx={i}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
