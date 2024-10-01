"use client";

import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

export default function page() {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        id,
        pw,
        redirect: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        name="id"
      />
      <input
        type="text"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        name="pw"
      />
      <input type="submit" />
    </form>
  );
}
