"use client";

import FollowingPosts from "./FollowingPosts";
import PostRecommends from "./PostRecommends";
import { useTabState } from "./TabProvider";

export default function TabDecider() {
  const tab = useTabState();

  return tab === "rec" ? <PostRecommends /> : <FollowingPosts />;
}
