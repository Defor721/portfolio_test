import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({ message: "Logged out successfully" });

    try {
      response.cookies.set("token", "", {
        path: "/",
        maxAge: 0,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
    } catch (cookieError) {
      return NextResponse.json(
        { message: "Failed to delete cookie", error: cookieError.message },
        { status: 500 }
      );
    }

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch", error: error.message },
      { status: 500 }
    );
  }
}
