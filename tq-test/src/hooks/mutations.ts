// import { PostType } from "@/types/PostType";
// import { useMutation } from "@tanstack/react-query";

// export function useUpdatePost() {
//   return useMutation({
//     mutationFn: async (): Promise<PostType[]> => {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`);

//       if (!res.ok) {
//         throw new Error("HTTP ERROR");
//       }

//       return res.json();
//     },
//   });
// }
