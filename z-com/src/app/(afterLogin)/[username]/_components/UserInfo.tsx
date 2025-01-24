"use client";

import { useQuery } from "@tanstack/react-query";
import BackButton from "../../_components/BackButton";
import style from "../profile.module.css";
import { getUser } from "../_lib/getUser";

type Props = {
  username: string;
};

export default function UserInfo({ username }: Props) {
  const { data, isPending, error } = useQuery({
    queryKey: ["users", username],
    queryFn: getUser,
  });

  if (isPending) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return (
      <>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>프로필</h3>
        </div>
        <div className={style.userZone}>
          <div className={style.userImage}></div>
          <div className={style.userName}>
            <div>@{username}</div>
          </div>
        </div>
        <div
          style={{
            height: 100,
            alignItems: "center",
            fontSize: 31,
            fontWeight: "bold",
            justifyContent: "center",
            display: "flex",
          }}
        >
          계정이 존재하지 않음
        </div>
      </>
    );
  }

  return (
    <>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{data?.user.name}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={data?.user.image} alt={data?.user.id} />
        </div>
        <div className={style.userName}>
          <div>{data?.user.nickname}</div>
          <div>@{data?.user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
    </>
  );
}
