"use client";

import { useRouter } from "next/navigation";
import style from "./closeBtn.module.scss";

export default function CloseButton() {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return <button className={style.closeBtn} onClick={onClick}>닫기</button>;
}
