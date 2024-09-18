import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal1: ReactNode;
};

export default function TestPageLayout({ children, modal1 }: Readonly<Props>) {
    console.log(modal1)
  return (
    <>
      {children}
      {modal1}
    </>
  );
}
