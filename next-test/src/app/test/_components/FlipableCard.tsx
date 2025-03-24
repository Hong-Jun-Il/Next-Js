"use client";

import useDomInspect from "@/hooks/useDomInspect";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

type Props = {
  scrollYProgress: MotionValue<number>;
};

export default function FlipableCard({ scrollYProgress }: Props) {
  const ref = useRef(null);
  const { x, width } = useDomInspect(ref);

  return (
    <div className="perspective-distant">
      <motion.div
        ref={ref}
        className="relative w-[300px] h-[700px] border transform-3d"
        style={{}}
      >
        <div className="backface-hidden w-full h-full flex justify-center items-center bg-amber-50 ">
          앞면
        </div>
        <div className="absolute top-0 backface-hidden w-full h-full flex justify-center items-center bg-red-500 rotate-y-180">
          뒷면
        </div>
      </motion.div>
    </div>
  );
}
