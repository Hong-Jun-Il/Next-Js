"use client";

import { useGetPosts } from "@/hooks/queries";
import { useCallback, useRef } from "react";
import style from "@/app/(beforelogin)/test/test.module.scss";

export default function List() {
  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetPosts();
  const posts = data?.pages.flatMap((e) => e.posts);

  const loader = useRef<IntersectionObserver | null>(null);

  const fetchingWithDelay = useCallback(() => {
    setTimeout(() => {
      fetchNextPage();
    }, 1500);
  }, [fetchNextPage]);

  const observer = useCallback(
    (node: HTMLDivElement) => {
      if (isFetching || isFetchingNextPage) return;
      if (loader.current) {
        loader.current.disconnect();
      }

      loader.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchingWithDelay();
        }
      });

      if (node) loader.current.observe(node);
    },
    [
      isFetching,
      isFetchingNextPage,
      loader,
      hasNextPage,
      fetchNextPage,
      fetchingWithDelay,
    ]
  );

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  return <div>List</div>;
}
