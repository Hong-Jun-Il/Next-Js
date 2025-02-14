import { UserSchemaType } from "@/type/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEditUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UserSchemaType) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/editUser/${data.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(data),
        }
      );
      return res.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["user", variables.id],
      });
    },
  });
}
