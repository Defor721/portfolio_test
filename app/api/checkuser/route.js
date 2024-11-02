import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { name, password } = await request.json();
    const client = await clientPromise;
    const db = client.db("userdata");
    const userCollection = db.collection("users");

    const user = await userCollection.findOne({ name });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    if (user.password == password) {
      const token = jwt.sign({ name }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      const response = NextResponse.json(
        { message: "Login Successfully" },
        { status: 200 }
      );
      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // 프로덕션 환경에서만 HTTPS를 통해 쿠키를 전송
        maxAge: 60 * 60, // 1시간 (초 단위)
        path: "/", // 사이트 전역에서 쿠키 접근 가능
      });

      return response;
    } else {
      return NextResponse.json(
        { message: "Password invalid" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to find data", error: error.message },
      { status: 500 }
    );
  }
}
