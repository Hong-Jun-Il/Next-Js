import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

type NextAuthUserType = {
  id: string;
  name: string;
  email: string;
  age: number;
  image: string;
};

declare module "next-auth" {
  interface User extends NextAuthUserType {}

  interface Session {
    user: NextAuthUserType & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends NextAuthUserType {}
}
