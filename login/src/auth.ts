import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const { id, password } = credentials;
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
            {
              method: "POST",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id,
                password,
              }),
            }
          );

          if (!response.ok) throw new Error((await response.json()).message);
          const user = await response.json();
          console.log(user);
          return user;
        } catch (error) {
          // @ts-ignore-next-line
          throw new Error(error.message);
        }
      },
    }),
  ],
});
