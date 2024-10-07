import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Link from "next/link";
import { getPosts } from "./posts/_lib/getPosts";

export default async function page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", 1],
    queryFn: () => getPosts(1),
  });

  const dehydrateState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydrateState}>
      <main className="flex flex-col justify-center items-center min-h-screen text-4xl">
        <Link href="/posts">posts로 이동하기</Link>
      </main>
    </HydrationBoundary>
  );
}
