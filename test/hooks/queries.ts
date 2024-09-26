import { useQuery } from "@tanstack/react-query";
import fetchInstance from "../api/api";

type GetPostsPropsType = {
  endPoint: string;
  options?: RequestInit;
};

export function useGetPosts({ endPoint, options }: GetPostsPropsType) {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchInstance({ endPoint, options }),
  });
}
