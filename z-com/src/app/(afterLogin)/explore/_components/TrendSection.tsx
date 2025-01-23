"use client";

import { useQuery } from "@tanstack/react-query";
import { getTrends } from "../../_lib/getTrends";
import { TagType } from "@/types/TagType";
import Trend from "../../_components/Trend";

export default function TrendSection() {
  const { data } = useQuery<TagType[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
  });

  return data?.map((trend) => <Trend key={trend.tagId} trend={trend} />);
}
