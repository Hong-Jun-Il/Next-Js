"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Trend from "./Trend";
import style from "./trendSection.module.css";
import { useQuery } from "@tanstack/react-query";
import { getTrends } from "../_lib/getTrends";
import { TagType } from "@/types/TagType";
import { useSession } from "next-auth/react";

export default function TrendSection() {
  const segment = useSelectedLayoutSegment();
  const { data: session } = useSession();

  const { data } = useQuery<TagType[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    enabled: !!session?.user,
  });

  if (segment === "explore") return null;

  return (
    <div className={style.trendBg}>
      {session?.user ? (
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          {data?.map((trend) => (
            <Trend key={trend.tagId} trend={trend} />
          ))}
        </div>
      ) : (
        <div className={style.noTrend}>트렌드를 가져올 수 없습니다.</div>
      )}
    </div>
  );
}
