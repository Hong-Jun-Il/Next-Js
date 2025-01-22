"use client";

import { followRecommendsUserType } from "@/types/UserType";
import style from "./followRecommend.module.css";

type Props = {
  rec: followRecommendsUserType;
};

export default function FollowRecommend({ rec }: Props) {
  const onFollow = () => {};

  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={rec.image} alt={rec.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{rec.name}</div>
        <div className={style.count}>@{rec.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
