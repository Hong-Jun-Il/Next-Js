import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_components/page.module.css";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function BeforeLoginLayout({
  children,
  modal,
}: Readonly<Props>) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
