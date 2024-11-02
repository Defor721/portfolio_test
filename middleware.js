import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  // 1. 토큰이 없는 경우
  if (!token) {
    const referer = request.headers.get("referer") || "/";
    return NextResponse.redirect(referer);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/mypro/todolist/:path*", "/mypro/something/:path*"], // 보호된 페이지 경로 설정
};
