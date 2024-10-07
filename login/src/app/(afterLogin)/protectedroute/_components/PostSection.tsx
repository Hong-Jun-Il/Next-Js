"use client";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../_lib/getPosts";
import { Post as PostType } from "@/types/PostType";

export default function PostSection() {
  const { data } = useQuery<{
    message: string;
    posts: PostType[];
  }>({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 1000 * 3,
    refetchOnMount: false,
  });

  return (
    <ul>
      {data?.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
