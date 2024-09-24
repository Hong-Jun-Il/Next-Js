import { faker } from "@faker-js/faker";
import CloseButton from "./_components/CloseButton";
import style from "./singlePost.module.scss";
import ActionBtnSection from "./_components/ActionBtnSection";


export default function page() {
  return (
    <div className={style.modalWrapper}>
      <CloseButton />
      <div className={style.leftSection}>
        <div className={style.photo}>
          <img src={faker.image.url()} alt="이미지" />
        </div>
        <ActionBtnSection />
      </div>
      <div className={style.rightSection}>left</div>
    </div>
  );
}
