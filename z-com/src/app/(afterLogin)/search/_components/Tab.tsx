"use client";

import { useState } from "react";
import style from "./tab.module.css";
import { useRouter, useSearchParams } from "next/navigation";

export default function Tab() {
  const searchParams = useSearchParams();
  const [current, setCurrent] = useState(searchParams.get("f") || "hot");
  const router = useRouter();

  const onClickHot = () => {
    setCurrent("hot");
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("f");
    router.replace(`/search?${newSearchParams.toString()}`);
  };
  const onClickNew = () => {
    setCurrent("live");
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("f", "live");
    router.replace(`/search?${newSearchParams.toString()}`);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === "live"} />
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === "hot"} />
        </div>
      </div>
    </div>
  );
}
