"use client";

import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";
import { PostType } from "@/types/PostType";

type Props = {
  children: ReactNode;
  post: PostType;
};

export default function PostArticle({ children, post }: Readonly<Props>) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
