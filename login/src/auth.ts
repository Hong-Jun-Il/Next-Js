import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const { id, password } = credentials;
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

        const user = await response.json();
        if (!response.ok && user) {
          const customErrorObject = new CredentialsSignin();
          customErrorObject.code = user.message;

          throw customErrorObject;
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 10,
  },
  callbacks: {
    // 토큰에 id와 닉네임 추가
    // 기본적으로 토큰에는 id가 추가되지 않음
    // @/types/next-auth.d.ts 파일에 User 인터페이스 확장하여 nickname 추가
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.nickname = user.nickname;
      }
      return token;
    },
    // 이 함수에서 추가하는 내용은 useSession 훅의 user 정보에 담김
    // jwt 토큰을 사용하고 있으므로 두 번째 인자는 user가 아닌 token
    // token의 type이 Record<string, unknown>으로 정의되어 있어서 token.id가 unknown으로 처리가 돰
    // 위의 이유로 string으로 타입 단언을 해줌
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.nickname = token.nickname as string;
      }
      return session;
    },
  },
});
