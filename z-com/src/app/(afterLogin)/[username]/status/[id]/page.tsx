import BackButton from "@/app/(afterLogin)/_components/BackButton";
import style from "./singlePost.module.css";
import CommentForm from "./_components/CommentForm";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SinglePost from "./_components/SinglePost";
import { getSinglePost } from "./_lib/getSinglePost";
import Comments from "./_components/Comments";

type Props = {
  params: Promise<{ id: string; username: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["posts", id],
      queryFn: getSinglePost,
    }),
    queryClient.prefetchQuery({
      queryKey: ["posts", id, "comments"],
    }),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <div className={style.header}>
          <BackButton />
          <div className={style.headerTitle}>게시하기</div>
        </div>
        <SinglePost id={id} />
        <CommentForm />
        <Comments id={id} />
      </HydrationBoundary>
    </div>
  );
}
