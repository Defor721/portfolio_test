import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.set("token", "", {
    path: "/",
    expires: new Date(0), // 과거 날짜로 설정하여 만료 처리
    httpOnly: true,
    secure: true, // 배포 환경에서는 secure 옵션 활성화
    sameSite: "none",
  });

  return response;
}
