"use server";

import { cookies } from "next/headers";

export function getCookie(name: string) {
  const cookie = cookies().get(name);
  return cookie;
}
