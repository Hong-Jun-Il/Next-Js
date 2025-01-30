"use client";

import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../_lib/getSinglePost";
import Post from "@/app/(afterLogin)/_components/Post";

type Props = {
  id: string;
};

export default function SinglePost({ id }: Props) {
  const { data, isPending, isError } = useQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
  });

  if (isPending) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>에러가 발생함</div>;
  }

  return <Post post={data?.post} />;
}
