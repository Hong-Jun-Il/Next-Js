import { z } from "zod";

export const TestSchema = z.object({
  id: z.string().min(1, { message: "아이디 입력 필요" }),
  password: z.string().min(1, { message: "비밀번호 입력 필요" }),
  age: z
    .string()
    .min(1, { message: "나이 입력 필요" })
    .refine((e) => !isNaN(Number(e)), { message: "숫자만 입력" }),
});

export type TestSchemaType = z.infer<typeof TestSchema>;

export const TestDefaultValues: TestSchemaType = {
  id: "",
  password: "",
  age: "",
};
