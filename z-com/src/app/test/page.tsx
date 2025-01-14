import React from "react";

async function test() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/test`);

  if (!res.ok) {
    throw new Error("sada");
  }

  const data = await res.json();
  console.log(data);
  return data;
}

export default async function page() {
  const data = await test();
  console.log(data);
  return <div>page</div>;
}
