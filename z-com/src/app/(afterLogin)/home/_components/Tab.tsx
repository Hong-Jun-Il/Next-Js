"use client";

import style from "./tab.module.css";
import { useTabDispatch, useTabState } from "./TabProvider";

export default function Tab() {
  const tabValue = useTabState();
  const tabDispatch = useTabDispatch();

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div onClick={() => tabDispatch({ type: "rec" })}>
          추천
          <div className={style.tabIndicator} hidden={tabValue === "fol"}></div>
        </div>
        <div onClick={() => tabDispatch({ type: "fol" })}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tabValue === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
