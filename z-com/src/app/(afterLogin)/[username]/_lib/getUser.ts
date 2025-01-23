import { OtherUserType } from "@/types/UserType";
import { QueryFunction } from "@tanstack/react-query";

export const getUser: QueryFunction<
  OtherUserType,
  [_1: string, _2: string]
> = async ({ queryKey }) => {
  console.log("실행됨");
  const [_1, username] = queryKey;
  console.log(queryKey);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api?username=${username}`
  );

  if (!res.ok) {
    throw new Error("HTTP ERROR");
  }

  return res.json();
};
