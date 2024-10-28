import { PostType } from "@/types/PostType";
import { useQuery } from "@tanstack/react-query";

export function useGetPosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async (): Promise<PostType[]> => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`);

      if (!res.ok) {
        throw new Error("HTTP ERROR");
      }

      return res.json();
    },
  });
}
