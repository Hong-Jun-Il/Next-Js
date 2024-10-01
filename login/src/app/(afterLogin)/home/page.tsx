"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  console.log(session?.user);
  console.log(status);
  return <div>홈임</div>;
}
