import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function TestPageLayout({ children, modal }: Props) {
  return (
    <main className="relative">
      {children}
      {modal}
    </main>
  );
}
