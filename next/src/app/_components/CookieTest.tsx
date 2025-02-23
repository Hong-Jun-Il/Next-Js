"use client";

import { getCookie } from "@/lib/cookies";
import { cookies } from "next/headers";
import { FormEvent, useState } from "react";

export default function CookieTest() {
  const [login, setLogin] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({
        id: login,
      }),
    });

    if (!res.ok) {
      throw new Error("SAd");
    }

    return res.json();
  };

  const getTest = async () => {
    const res = await fetch("/api/test", {
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <button>제출</button>
      <button type="button" onClick={getTest}>
        fetch하기
      </button>
    </form>
  );
}
