import { PostType } from "@/types/PostType";
import { QueryFunction } from "@tanstack/react-query";

export const getSinglePost: QueryFunction<
  { message: string; post: PostType },
  [string, string]
> = async ({ queryKey }) => {
  const [_1, id] = queryKey;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`,
    {
      next: {
        tags: ["posts", id],
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    throw new Error("HTTP ERROR");
  }

  return res.json();
};
