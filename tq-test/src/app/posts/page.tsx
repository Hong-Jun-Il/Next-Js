import FilterSection from "./_components/FilterSection";
import style from "./posts.module.scss";

type Props = {
  searchParams: Promise<{
    test1?: string;
    test2?: string;
  }>;
};

type Prop = {
  test1?: string;
  test2?: string;
};

async function tttt({ test1, test2 }: Prop) {
  console.log("실행됨");
}

export default async function Posts({ searchParams }: Props) {
  const { test1, test2 } = await searchParams;
  tttt({ test1, test2 });
  return (
    <main className={style.main}>
      <FilterSection />
    </main>
  );
}
