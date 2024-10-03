import { auth } from "@/auth";
import { NextResponse } from "next/server";

const matcherForAuth = ["/home", "/protectedroute"];
const matcherForSignIn = ["/", "/signup", "/login"];

export const config = {
  matcher: ["/", "/signup", "/login", "/home", "/protectedroute"],
};

export default auth((req) => {
  const pathname = req.nextUrl.pathname;

  // 로그인 안한 상태에서 protected routes 접근 시
  if (!req.auth && isMatch(pathname, matcherForAuth)) {
    return NextResponse.redirect(
      new URL(`/login?redirectedFrom=${pathname}`, req.nextUrl.origin)
    );
  }

  // 로그인 한 상태에서 로그인/회원가입/ 로그인 회원가입 메인 접근 시
  if (!!req.auth && isMatch(pathname, matcherForSignIn)) {
    return NextResponse.redirect(new URL("/home", req.nextUrl.origin));
  }
});

function isMatch(pathname: string, urls: string[]): boolean {
  return urls.includes(pathname);
}
