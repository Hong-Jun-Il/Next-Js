import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function BeforeLoginLayout({
  children,
  modal,
}: Readonly<Props>) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
