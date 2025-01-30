import { PostType } from "@/types/PostType";
import { QueryFunction } from "@tanstack/react-query";

export const getComments: QueryFunction<
  { message: string; comments: PostType[] },
  [string, string, string]
> = async ({ queryKey }) => {
  const [_, id, __] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}/comments`,
    {
      next: {
        tags: ["posts", id, "comments"],
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("HTTP ERROR");
  }

  return res.json();
};
