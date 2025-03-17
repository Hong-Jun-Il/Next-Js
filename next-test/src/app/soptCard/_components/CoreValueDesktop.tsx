"use client";

import HorizontalScroll from "./HorizontalScroll";

export default function CoreValueDesktop() {
  return (
    <HorizontalScroll className="border border-red-500">
      {({ progress, centerLine }) => <div>테스트</div>}
    </HorizontalScroll>
  );
}
