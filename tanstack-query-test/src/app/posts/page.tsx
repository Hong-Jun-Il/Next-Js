"use client";

import { useGetPosts } from "@/hooks/queries";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPosts } from "./_lib/getPosts";

export default function Page() {
  const router = useRouter();
  const queryClient = new QueryClient();
  const pageParam = Number(useSearchParams().get("page")) || 1;
  const [page, setPage] = useState<number>(pageParam);
  const { data } = useGetPosts(page);

  useEffect(() => {
    const prefetchNextPage = async () => {
      await queryClient.prefetchQuery({
        queryKey: ["posts", page + 1],
        queryFn: () => getPosts(page + 1),
      });
    };

    prefetchNextPage();
  }, [page]);

  const dehydrationState = dehydrate(queryClient);

  const start = Math.floor((page - 1) / 5) * 5 + 1;
  const end = Math.min(start + 5 - 1, data?.totalPages!);

  const btns = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  console.log(start);

  const handlePage = (nextPage: number) => {
    setPage(nextPage);
    router.push(`/posts?page=${nextPage}`);
  };
  return (
    <HydrationBoundary state={dehydrationState}>
      <ul>
        {data?.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <ul className="flex cursor-pointer w-96 justify-between">
        <button onClick={() => handlePage(start - 5)} disabled={page === 1}>
          이전
        </button>
        {btns.map((btn) => (
          <li onClick={() => handlePage(page + 1)} key={btn}>
            {btn}
          </li>
        ))}
        <button
          onClick={() => handlePage(start + 5)}
          disabled={page === data?.totalPages}
        >
          다음
        </button>
      </ul>
    </HydrationBoundary>
  );
}
