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
      {({ centerLine }) => (
        <div className="h-full flex items-center">
          <div className="flex gap-[3.2rem]">
            {test.map((card, index) => (
              <InspectableBox key={index}>
                {({ width, height, x, y }) => (
                  <div className="border border-amber-500 w-[500px] aspect-square"></div>
                )}
              </InspectableBox>
            ))}
          </div>
        </div>
      )}
    </HorizontalScroll>
  );
}
