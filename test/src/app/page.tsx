"use client";

import { useRouter } from "next/navigation";
import style from "./page.module.css";

export default function Home() {
  const s: number = 123;
  const router = useRouter();
  const onClick = () => {
    router.push(`/test?q=${s}`);
  }

  return (
    <main className={style.main}>
      <div onClick={onClick}>
        이거 클릭하면 test로 이동
      </div>
    </main>
  );
}
