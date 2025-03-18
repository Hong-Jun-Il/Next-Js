"use client";

import clsx from "clsx";
import HorizontalScroll from "./HorizontalScroll";
import InspectableBox from "./InspectableBox";

type CoreValueDesktopProps = {
  className?: string;
};

const test = Array.from({ length: 12 }, (_, i) => i + 1);

export default function CoreValueDesktop({ className }: CoreValueDesktopProps) {
  return (
    <HorizontalScroll
      className={clsx("border border-red-500 h-[400rem]", className)}
    >
      {({ progress, centerLine }) => (
        <InspectableBox className="flex gap-[50px] items-center h-full">
          {({ width, height, x, y }) =>
            test.map((e, i) => (
              <div
                key={e}
                className="w-[500px] aspect-square border border-amber-500 flex flex-col justify-center items-center text-8xl"
              >
                {i}번 카드
              </div>
            ))
          }
        </InspectableBox>
      )}
    </HorizontalScroll>
  );
}
