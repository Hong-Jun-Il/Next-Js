import Link from "next/link";
import cx from "classnames";
import style from "./post.module.css";

type Props = {
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostImages({ post }: Props) {
  if (!post.Images) return null;
  if (!post.Images.length) return null;
  if (post.Images.length === 1) {
    return (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
        className={cx(style.postImageSection, style.oneImage)}
        style={{backgroundImage: `url${post.Images[0]?.link}`, backgroundSize: "contain"}}
      >
        <img src={post.Images[0]?.link} alt="" />
      </Link>
    );
  }

  if (post.Images.length === 2) {
    return (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
        className={cx(style.postImageSection, style.twoImage)}
      >
        <img src={post.Images[0]?.link} alt="" />
      </Link>
    );
  }

  if (post.Images.length === 3) {
    return (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
        className={cx(style.postImageSection, style.threeImage)}
      >
        <img src={post.Images[0]?.link} alt="" />
      </Link>
    );
  }

  if (post.Images.length === 4) {
    return (
      <Link
        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
        className={cx(style.postImageSection, style.fourImage)}
      >
        <img src={post.Images[0]?.link} alt="" />
      </Link>
    );
  }

  return null;
}
