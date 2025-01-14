import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  pages: {
    signIn: "i/flow/login",
    newUser: "i/flow/signup",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        id: { type: "text" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        const authResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              id: credentials?.id,
              password: credentials?.password,
            }),
            credentials: "include",
            cache: "no-cache",
          }
        );

        if (!authResponse.ok) {
          if (authResponse.status === 404) {
            throw new Error("no_user");
          } else if (authResponse.status === 401) {
            throw new Error("wrong_password");
          }
          throw new Error("invalid_credentials");
        }

        const user = await authResponse.json();
        console.log("user", user);
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
