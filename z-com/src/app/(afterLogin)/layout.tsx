import Link from "next/link";
import style from "./layout.module.css";
import Image from "next/image";
import ZLogo from "@/../public/zlogo.png";
import NavMenu from "./_components/NavMenu";
import LogoutButton from "./_components/LogoutButton";
import TrendSection from "./_components/TrendSection";
import FollowRecommend from "./_components/FollowRecommend";
import { ReactNode } from "react";
import RightSearchZone from "./_components/RightSearchZone";
import RQProvider from "./_components/RQProvider";
import FollowRecommendSection from "./_components/FollowRecommendSection";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function ({ children, modal }: Readonly<Props>) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image
                  src={ZLogo}
                  alt="z.com로고"
                  width={40}
                  height={40}
                  priority
                />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <RQProvider>
        <div className={style.rightSectionWrapper}>
          <div className={style.rightSectionInner}>
            <main className={style.main}>{children}</main>
            <section className={style.rightSection}>
              <RightSearchZone />
              <TrendSection />
              <div className={style.followRecommend}>
                <h3>팔로우 추천</h3>
                <FollowRecommendSection />
              </div>
            </section>
          </div>
        </div>
        {modal}
      </RQProvider>
    </div>
  );
}
