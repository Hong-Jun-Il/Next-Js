import { z } from "zod";

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(1, { message: "이름을 입력해주세요" })
    .max(49, { message: "이름은 50글자 미만이어야 합니다" })
    .refine((value) => value[0] !== " ", {
      message: "첫 글자는 공백이 아니어야 합니다",
    })
    .refine((value) => /^[가-힣a-zA-Z\s]+$/.test(value) && value.trim(), {
      message: "유효한 한글, 영문자를 입력해주세요",
    }),
  email: z
    .string()
    .min(1, { message: "이메일을 입력해주세요" })
    .email({ message: "이메일 형식이 아닙니다" }),
  nickname: z
    .string()
    .min(1, { message: "닉네임을 입력해주세요" })
    .max(19, { message: "닉네임은 20글자 미만이어야 합니다" })
    .refine((value) => value[0] !== " ", {
      message: "첫 글자는 공백이 아니어야 합니다",
    })
    .refine((value) => !/[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "닉네임에 특수문자를 입력할 수 없습니다",
    }),
  id: z.string().min(1, { message: "아이디를 입력해주세요" }),
  password: z.string().min(1, { message: "비밀번호를 입력해주세요" }),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const SignUpDefaultValues: SignUpSchemaType = {
  name: "",
  email: "",
  nickname: "",
  id: "",
  password: "",
};

export const LoginSchema = z.object({
  id: z.string().min(1, { message: "아이디를 입력하세요" }),
  password: z.string().min(1, { message: "비밀번호를 입력하세요" }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const LoginDefaultValues: LoginSchemaType = {
  id: "",
  password: "",
};
