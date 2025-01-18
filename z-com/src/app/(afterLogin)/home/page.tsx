import { dehydrate, QueryClient } from "@tanstack/react-query";
import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TabProvider from "./_components/TabProvider";
import style from "./home.module.css";
import { getPostRecommends } from "./_lib/getPostRecommends";
import TabDecider from "./_components/TabDecider";

export default async function Home() {
  const queryclient = new QueryClient();

  await queryclient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryclient);
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <TabDecider />
      </TabProvider>
    </main>
  );
}
