import { PostType } from "@/types/PostType";
import { QueryFunction } from "@tanstack/react-query";

export const getSearchResult: QueryFunction<
  { message: string; posts: PostType[] },
  [_1: string, _2: string, searchParams: { q: string; f?: string; pf?: string }]
> = async ({ queryKey }) => {
  const [_1, _2, searchParams] = queryKey;
  const urlSearchParams = new URLSearchParams(searchParams);

  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/posts?${urlSearchParams.toString()}`
  );

  if (!res.ok) {
    throw new Error("HTTP ERROR");
  }

  return res.json();
};
