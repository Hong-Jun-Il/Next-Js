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
  interface User {
    id: string;
    name: string;
    email: string;
    age: number;
    image: string;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      age: number;
      image: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    age: number;
    image: string;
  }
}
