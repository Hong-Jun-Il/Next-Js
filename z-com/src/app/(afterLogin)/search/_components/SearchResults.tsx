"use client";

import { useQuery } from "@tanstack/react-query";
import { PostType } from "@/types/PostType";
import { getSearchResult } from "../_lib/getSearchResult";
import Post from "../../_components/Post";

type Props = {
  searchParams: { q: string; f?: string; pf?: string };
};

export default function SearchResults({ searchParams }: Props) {
  const { data } = useQuery<
    { message: string; posts: PostType[] },
    unknown,
    { message: string; posts: PostType[] },
    [_1: string, _2: string, Props["searchParams"]]
  >({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
  });

  return data?.posts.map((post) => <Post key={post.postId} post={post} />);
}
