import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/logiddn",
  },
  providers: [
    Credentials({
      credentials: {
        id: { type: "text" },
        pw: { type: "text" },
      },
      authorize: async (credentials) => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
            {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                id: credentials?.id,
                pw: credentials?.pw,
              }),
            }
          );

          if (!response.ok) {
            return null;
          }

          const user = await response.json();
          console.log("user", user);
          return user;
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],
});
