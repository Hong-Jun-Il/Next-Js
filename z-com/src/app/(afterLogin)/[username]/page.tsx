import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import style from "./profile.module.css";
import { getUser } from "./_lib/getUser";
import UserInfo from "./_components/UserInfo";
import { getUserPosts } from "./_lib/getUserPosts";
import UserPosts from "./_components/UserPosts";

type Props = {
  params: Promise<{ username: string }>;
};

export default async function Profile({ params }: Props) {
  const { username } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
  });
  const dehydrateState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydrateState}>
        <UserInfo username={username} />
        <UserPosts username={username} />
      </HydrationBoundary>
    </main>
  );
}
