import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPostRecommends } from "../_lib/getPostRecommends";
import Post from "../../_components/Post";
import { PostType } from "@/types/PostType";
import Loading from "../loading";

export default function PostRecommends() {
  const { data, isPending } = useQuery<{ message: string; posts: PostType[] }>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000,
  });

  if (isPending) {
    return <Loading />;
  }

  return data?.posts.map((post) => <Post key={post.postId} post={post} />);
}
