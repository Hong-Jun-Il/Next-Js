import Image from "next/image";
import style from "./test.module.scss";

export default function page() {
  return (
    <main className={style.main}>
      <div className={style.test}>
        <div className={style.imgWrapper}>
          <Image
            fill
            alt="img"
            src={
              "https://plus.unsplash.com/premium_photo-1728657020262-4cdbcac6ddca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            }
          />
        </div>
      </div>
      <div className={style.test}>
        <div className={style.imgWrapper}>
          <Image
            fill
            alt="img"
            src={
              "https://plus.unsplash.com/premium_photo-1728657020262-4cdbcac6ddca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            }
          />
        </div>
      </div>
    </main>
  );
}
