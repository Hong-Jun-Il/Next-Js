import { z } from "zod";

export const schema = z.object({
  // 필드 입력
  name: z.string().min(1, { message: "이름 입력" }),
  // 필드 입력
  number: z.string().min(1, { message: "전화번호 입력" }),
  // 필드 입력력
  age: z
    .string()
    .min(1, { message: "나이 입력" })
    .refine((val) => !isNaN(Number(val)), { message: "나이는 숫자만 입력" }),
  //
  //   birthDay: z.string().min(1, { message: "생일 입력" }),
  //   languagesSpoken: z.array(z.string()).min(1, { message: "언어 입력" }),
});

export type SchemaType = z.infer<typeof schema>;

export const defaultValues: SchemaType = {
  name: "",
  number: "",
  age: "",
};
