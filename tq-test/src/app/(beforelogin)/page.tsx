import Link from "next/link";
import style from "./beforelogin.module.scss";

export default function BseforeLogin() {
  return (
    <main className={style.main}>
      <Link href="test">테스트로 이동하기</Link>
    </main>
  );
}
