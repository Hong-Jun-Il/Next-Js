import style from "./photoModal.module.css";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm";
import PhotoModalCloseButton from "./_components/PhotoModalCloseButton";
import ImageZone from "./_components/ImageZone";
import { QueryClient } from "@tanstack/react-query";

type Props = {
  params: Promise<{ photoid: string }>;
};

export default async function PhotoModal({ params }: Props) {
  const { photoid: photoId } = await params;
  console.log(photoId);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", photoId],
  });

  return (
    <div className={style.container}>
      <PhotoModalCloseButton />
      <ImageZone />
      <div className={style.commentZone}>
        <CommentForm />
      </div>
    </div>
  );
}
