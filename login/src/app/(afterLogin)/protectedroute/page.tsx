import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import style from "./protectedRoute.module.scss";
import { getPosts } from "../_lib/getPosts";
import PostSection from "./_components/PostSection";

export default async function page() {
  const queryclient = new QueryClient();
  await queryclient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const dehydratedState = dehydrate(queryclient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className={style.main}>
        <PostSection />
      </main>
    </HydrationBoundary>
  );
}
