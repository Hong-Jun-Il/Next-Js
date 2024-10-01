import Link from "next/link";
import style from "./page.module.scss";

export default function Home() {
  return (
    <main className={style.main}>
      <Link href="/login">로그인하러가기</Link>
    </main>
  );
}
