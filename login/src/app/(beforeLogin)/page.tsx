import Link from "next/link";
import style from "./page.module.scss";

export default function page() {
  return (
    <main className={style.main}>
      <Link href="/signup">회원가입하기</Link>
      <Link href="/login">로그인하기</Link>
    </main>
  );
}
