import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/mypro/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/mypro/todolist/:path*", "/mypro/linkle/:path*"], // 보호된 페이지 경로 설정
};
