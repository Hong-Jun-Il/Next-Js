import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function PostRecommends() {
  const { data } = useQuery({
    queryKey: ["posts", "recommends"],
  });
  return <div>PostRecommends</div>;
}
