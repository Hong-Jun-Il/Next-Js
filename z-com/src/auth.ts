import NextAuth from "next-auth";
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
  providers: [
    Credentials({
      credentials: {
        username: { type: "text" },
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
              id: credentials?.username,
              password: credentials?.password,
            }),
          }
        );

        if (!authResponse.ok) {
          return null;
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
