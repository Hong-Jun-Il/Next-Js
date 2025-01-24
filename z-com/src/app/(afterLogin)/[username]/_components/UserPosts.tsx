"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "../_lib/getUserPosts";
import { PostType } from "@/types/PostType";
import Post from "../../_components/Post";

type Props = {
  username: string;
};

export default function UserPosts({ username }: Props) {
  const { data, error } = useQuery<
    {
      message: string;
      posts: PostType[];
    },
    Object,
    {
      message: string;
      posts: PostType[];
    },
    [string, string, string]
  >({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
  });

  if (error) {
    return null;
  }

  return (
    <div>
      {data?.posts.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
    </div>
  );
}
