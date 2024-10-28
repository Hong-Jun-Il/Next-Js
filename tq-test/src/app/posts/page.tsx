import FilterSection from "./_components/FilterSection";
import { getSchools } from "./_lib/getSchools";
import style from "./posts.module.scss";

// 나라 지역
type Props = {
  searchParams: Promise<{
    country?: string;
    aria?: string;
  }>;
};

export default async function Posts({ searchParams }: Props) {
  const { country, aria } = await searchParams;
  const { schools } = await getSchools({ country, aria });
  const countryAr = [...new Set(schools.map((e) => e.country))];
  const ariaAr = [...new Set(schools.map((e) => e.aria))];

  return (
    <main className={style.main}>
      <FilterSection countries={countryAr} aria={ariaAr} />
    </main>
  );
}
