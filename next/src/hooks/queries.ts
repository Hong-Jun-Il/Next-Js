import { ResponseType } from "@/type/ResponseType";
import { UserSchemaType } from "@/type/schema";
import { useQueries, useQuery } from "@tanstack/react-query";

export function useUsers(ids: string[]) {
  return useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["user", id],
        queryFn: async (): Promise<ResponseType<UserSchemaType>> => {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/getUser?id=${id}`
          );

          return res.json();
        },
      };
    }),
  });
}

export function useUser(id: string | null) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getUser?id=${id}`
      );

      return res.json();
    },
    enabled: !!id,
  });
}
