"use client";

import ActionButtons from "@/app/(afterLogin)/_components/ActionButtons";
import style from "../photoModal.module.css";

export default function ImageZone() {
  return (
    <div className={style.imageZone}>
      {/* <img src={photo.link} alt={photo.Post?.content} hidden />
      <div
        className={style.image}
        style={{ backgroundImage: `url(${photo.link})` }}
      />
      <div className={style.buttonZone}>
        <div className={style.buttonInner}>
          <ActionButtons white />
        </div>
      </div> */}
    </div>
  );
}
