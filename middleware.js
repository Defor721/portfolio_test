import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    const referer = request.headers.get("referer") || "/login";
    const response = NextResponse.redirect(referer);
    response.headers.set("Cache-Control", "no-store");
    return response;
  }

  const response = NextResponse.next();
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export const config = {
  matcher: ["/mypro/todolist/:path*", "/mypro/something/:path*"], // 보호된 페이지 경로 설정
};
