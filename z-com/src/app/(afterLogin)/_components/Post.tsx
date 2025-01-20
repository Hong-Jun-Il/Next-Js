import Link from "next/link";
import style from "./post.module.css";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";
import PostImages from "./PostImages";
import { PostType } from "@/types/PostType";
import { MouseEventHandler } from "react";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <PostArticle post={post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link
            href={`/${post.User.id}`}
            className={style.postUserImage}
            onClick={stopPropagation}
          >
            <img src={post.User.image} alt={post.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${post.User.id}`} onClick={stopPropagation}>
              <span className={style.postUserName}>{post.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{post.User.id}</span>
              &nbsp; ·
            </Link>
            <span className={style.postDate}>
              {dayjs(post.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{post.content}</div>
          <div className={style.postImageSection}>
            <PostImages post={post} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
