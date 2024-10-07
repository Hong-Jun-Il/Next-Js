import { PostType } from "@/types/PostType";

type ResType = {
  message: string;
  posts: PostType[];
  totalPages: number;
};

export async function getPosts(page: number): Promise<ResType> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPosts?page=${page}`,
    {
      next: {
        tags: ["posts"],
      },
    }
  );

  if (!res.ok) {
    throw new Error("HTTP ERROR");
  }

  return res.json();
}
