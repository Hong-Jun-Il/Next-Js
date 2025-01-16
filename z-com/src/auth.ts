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
  session: {
    strategy: "jwt",
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
          const credentialsSignin = new CredentialsSignin();
          if (authResponse.status === 404) {
            credentialsSignin.code = "no_user";
          } else if (authResponse.status === 401) {
            credentialsSignin.code = "wrong_password";
          }
          throw credentialsSignin;
        }

        const user = await authResponse.json();

        return {
          id: user.id,
          image: user.image,
          name: user.name,
          age: user.age,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id!;
        token.email = user.email;
        token.name = user.name;
        token.age = user.age;
        token.image = user.image!;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email!;
        session.user.name = token.name!;
        session.user.image = token.image;
        session.user.age = token.age;
      }

      return session;
    },
  },
});
