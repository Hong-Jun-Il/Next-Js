import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  modal: ReactNode;
};

export default function Layout({ modal }: Props) {
  return (
    <>
      <Link href="/test1">테스트1으로 이동</Link>
      {modal}
    </>
  );
}
