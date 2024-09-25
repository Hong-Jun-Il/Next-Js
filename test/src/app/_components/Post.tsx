"use client";

import { useRouter } from "next/navigation";
import style from "./post.module.scss";

export default function Post() {
  const router = useRouter();
  const ar = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: `${i + 1}번`,
  }));

  const onClick = (id: number) => {
    router.push(`/${id}`);
  };

  return (
    <ul className={style.posts}>
      {ar.map((e) => (
        <li onClick={() => onClick(e.id)} className={style.post} key={e.id}>
          <h1>{e.title}</h1>
        </li>
      ))}
    </ul>
  );
}
