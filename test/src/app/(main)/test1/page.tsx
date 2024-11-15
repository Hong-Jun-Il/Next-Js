import Link from "next/link";
import React, { ReactNode } from "react";

export default function page() {
  return (
    <div>
      테스트1페이지
      <Link href="/test1/test2">test2로 이동</Link>
    </div>
  );
}
