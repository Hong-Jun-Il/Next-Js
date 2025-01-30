"use client";

import { useQuery } from "@tanstack/react-query";
import { getComments } from "../_lib/getComments";
import Post from "@/app/(afterLogin)/_components/Post";

type Props = {
  id: string;
};

export default function Comments({ id }: Props) {
  const { data, isPending, isError } = useQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
  });

  if (isPending) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다</div>;
  }

  return (
    <div>
      {data?.comments.map((com) => (
        <Post key={com.postId} post={com} />
      ))}
    </div>
  );
}
