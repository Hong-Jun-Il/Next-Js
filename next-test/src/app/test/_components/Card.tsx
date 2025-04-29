"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

type Props = {
  scrollYProgress: MotionValue<number>;
  totalCard: number;
  idx: number;
};

export default function Card({ scrollYProgress, totalCard, idx }: Props) {
  const step = 1 / totalCard / 2;
  const start = step * idx + step * totalCard - step;
  const end = start + totalCard + 1;

  const rotateY = useTransform(scrollYProgress, [start, 1], ["0deg", "180deg"]);
  return (
    <motion.div
      style={{
        width: `${100 / totalCard - 2}%`,
        rotateY: rotateY,
      }}
      className="aspect-[1/1.5] transform-3d rotate-y-0"
    >
      <div className="absolute top-0 backface-hidden bg-amber-200 w-full h-full flex justify-center items-center">
        앞<p>{start}</p>
      </div>
      <div className="absolute top-0 backface-hidden rotate-y-180 bg-fuchsia-400 w-full h-full flex justify-center items-center">
        뒤
      </div>
    </motion.div>
  );
}
