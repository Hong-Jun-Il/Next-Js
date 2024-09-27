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
      <div className={cx(style.post, style.twoImage)}>
        <img src={imgArray[0]} alt="" />
        <img src={imgArray[1]} alt="" />
        <div className={style.image} style={{backgroundImage: `url(${imgArray[0]})`, backgroundSize: "cover"}} />
        <div className={style.image} style={{backgroundImage: `url(${imgArray[1]})`, backgroundSize: "cover"}} />
      </div>
      <div className={cx(style.post, style.threeImage)}>
        <img src={imgArray[0]} alt="" />
        <div className={style.image} style={{backgroundImage: `url(${imgArray[0]})`, backgroundSize: "cover"}} />
        <div>
          <img src={imgArray[1]} alt="" />
          <img src={imgArray[2]} alt="" />
        <div className={style.image} style={{backgroundImage: `url(${imgArray[1]})`, backgroundSize: "cover"}} />
        <div className={style.image} style={{backgroundImage: `url(${imgArray[2]})`, backgroundSize: "cover"}} />
        </div>
      </div>
      <div className={style.post}>

      </div>
    </main>
  );
}
