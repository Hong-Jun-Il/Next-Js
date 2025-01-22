"use client";

import { useQuery } from "@tanstack/react-query";
import { followRecommendsUserType } from "@/types/UserType";
import getFollowRecommends from "../_lib/getFollowRecommends";
import FollowRecommend from "./FollowRecommend";

export default function FollowRecommendSection() {
  const { data } = useQuery<{
    message: string;
    followRecommends: followRecommendsUserType[];
  }>({
    queryKey: ["follow Recommends"],
    queryFn: getFollowRecommends,
  });

  return data?.followRecommends.map((rec) => (
    <FollowRecommend key={rec.id} rec={rec} />
  ));
}
