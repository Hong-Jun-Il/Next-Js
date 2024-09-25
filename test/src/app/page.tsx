import Post from "./_components/Post";
import Test from "./_components/TestComponent";
import style from "./page.module.css";

export default function Home() {

  return (
    <main className={style.main}>
      <div className={style.home}>홈임</div>
      <Post />
    </main>
  );
}
