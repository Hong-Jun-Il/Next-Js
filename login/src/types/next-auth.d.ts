import { DefaultSession, User } from "next-auth";

declare module "next-auth" {
  interface User {
    nickname: string;
  }
}
