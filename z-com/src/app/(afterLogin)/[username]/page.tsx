import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import BackButton from "../_components/BackButton";
import style from "./profile.module.css";
import { getUser } from "./_lib/getUser";

type Props = {
  params: Promise<{ username: string }>;
};

export default async function Profile({ params }: Props) {
  const { username } = await params;
  console.log(username, "sadsad");
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ["users", username],
  //   queryFn: getUser,
  // });
  // const dehydrateState = dehydrate(queryClient);

  return null;
  // return (
  //   <HydrationBoundary state={dehydrateState}>
  //     <div>asda</div>
  //   </HydrationBoundary>
  // );
  // return (
  //   <main className={style.main}>
  //     <div className={style.header}>
  //       <BackButton />
  //       <h3 className={style.headerTitle}>{user.nickname}</h3>
  //     </div>
  //     <div className={style.userZone}>
  //       <div className={style.userImage}>
  //         <img src={user.image} alt={user.id} />
  //       </div>
  //       <div className={style.userName}>
  //         <div>{user.nickname}</div>
  //         <div>@{user.id}</div>
  //       </div>
  //       <button className={style.followButton}>팔로우</button>
  //     </div>
  //     <div></div>
  //   </main>
  // );
}
