import { getPosts } from "@/app/posts/_lib/getPosts";
import { useQuery } from "@tanstack/react-query";

export function useGetPosts(page: number) {
  return useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPosts(page),
  });
}
