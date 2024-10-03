import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, password } = await request.json();
    const client = await clientPromise;
    const db = client.db("userdata");
    const collection = db.collection("users");
    const user = await collection.findOne({ name });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    if (user.password == password) {
      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Password invalid" });
    }
  } catch (error) {
    // 에러 응답 반환
    return NextResponse.json(
      { message: "Failed to find data", error: error.message },
      { status: 500 }
    );
  }
}
