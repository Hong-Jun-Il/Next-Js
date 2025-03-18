"use client";

import useDomInspect from "@/hooks/useDomInspect";
import clsx from "clsx";
import { ReactNode, useRef } from "react";

type PositionContext = {
  width: number;
  height: number;
  x: number;
  y: number;
};

type InspectableProps = {
  className?: string;
  children: (ctx: PositionContext) => ReactNode;
};

export default function InspectableBox({
  className,
  children,
}: InspectableProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const ctx = useDomInspect(ref);

  return (
    <div ref={ref} className={clsx(className)}>
      {children(ctx)}
    </div>
  );
}
