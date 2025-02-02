import { z } from "zod";

export const userSchema = z.object({
  id: z
    .string()
    .min(1, { message: "id 필요" })
    .max(10, { message: "10자 넘음" }),
  password: z.string().min(1, { message: "password 필요" }),
  age: z
    .string()
    .min(1, { message: "age 필요" })
    .refine((e) => !isNaN(Number(e)), { message: "age는 숫자만 입력" }),
});

export type UserSchemaType = z.infer<typeof userSchema>;

export const userSchemaDefaultValues: UserSchemaType = {
  id: "",
  password: "",
  age: "",
};

export const infoSchema = z.object({});
