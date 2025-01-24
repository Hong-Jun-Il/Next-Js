import { PostType } from "@/types/PostType";
import { QueryFunction } from "@tanstack/react-query";

type ResponseDataType = {
  message: string;
  posts: PostType[];
};

export const getUserPosts: QueryFunction<
  ResponseDataType,
  [string, string, string]
> = async ({ queryKey }) => {
  const [_1, _2, username] = queryKey;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/getUserPosts?id=${username}`,
    {
      next: {
        tags: ["posts", "users", username],
      },
      cache: "no-store",
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("HTTP ERROR");
  }

  return res.json();
};
