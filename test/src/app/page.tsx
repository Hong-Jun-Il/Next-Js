import { faker } from "@faker-js/faker";
import style from "./page.module.scss";
import cx from "classnames";

export default function Home() {
  const imgArray = Array.from({ length: 4 }, () =>
    faker.image.urlLoremFlickr()
  );

  return (
    <main className={style.main}>
      <div className={style.post}>
        <img src={imgArray[0]} alt="" />
        <div className={style.image} style={{backgroundImage: `url(${imgArray[0]})`, backgroundSize: "contain"}} />
      </div>
      <div className={style.post}>
        <img src={imgArray[0]} alt="" />
        <img src={imgArray[1]} alt="" />
        <div className={cx(style.image, style.twoImage)} style={{backgroundImage: `url(${imgArray[0]})`, backgroundSize: "contain"}} />
        <div className={cx(style.image, style.twoImage)} style={{backgroundImage: `url(${imgArray[1]})`, backgroundSize: "contain"}} />
      </div>
      <div className={style.post}>

      </div>
      <div className={style.post}>

      </div>
    </main>
  );
}
