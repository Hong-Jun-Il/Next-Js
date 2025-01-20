"use client";

import { useQuery } from "@tanstack/react-query";
import getFollowingPosts from "../_lib/getFollowingPosts";
import { PostType } from "@/types/PostType";
import Post from "../../_components/Post";

export default function FollowingPosts() {
  const { data } = useQuery<{ message: string; followingPosts: PostType[] }>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
    gcTime: 1000 * 300,
  });

  return data?.followingPosts.map((post) => (
    <Post key={post.postId} post={post} />
  ));
}
