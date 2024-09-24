"use client";

import style from "./actionBtns.module.scss";

export default function ActionBtnSection() {
  return (
    <div className={style.actionBtnSection}>
        <div className={style.actionBtns}>
            <div className={style.btn}>
                Btn1
            </div>
            <div className={style.btn}>
                Btn2
            </div>
            <div className={style.btn}>
                Btn3
            </div>
            <div className={style.btn}>
                Btn4
            </div>
            <div className={style.btn}>
                Btn5
            </div>
        </div>
    </div>
  )
}
