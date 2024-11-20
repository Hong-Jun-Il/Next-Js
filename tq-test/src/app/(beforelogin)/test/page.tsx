import style from "./test.module.scss";
import Nav from "./_components/Nav";
import List from "./_components/List";

export default function page() {
  return (
    <main className={style.main}>
      <Nav />
      <List />
    </main>
  );
}
