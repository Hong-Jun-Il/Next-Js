"use client";

import { useSession } from "next-auth/react";
import style from "./home.module.scss";

export default function Home() {
  const { data: session, status } = useSession();
  // console.log(session?.user);
  // console.log(status);

  return (
    <main className={style.main}>
      <h1>{session?.user?.id}</h1>
    </main>
  );
}
