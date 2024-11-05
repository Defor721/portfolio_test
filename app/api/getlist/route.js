import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const token = request.cookies.get("token")?.value;
    const client = await clientPromise;
    const db = client.db("userdata");
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const name = decoded.name;
        const user = await db.collection("users").findOne({ name: name });
        if (user) {
          const list = user.todos;
          return NextResponse.json(
            { message: "success", list },
            { status: 200 }
          );
        }

        return NextResponse.json({ message: "data not found" });
      } catch (error) {
        return NextResponse.json(
          { message: "Failed to get data", error: error.message },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json({ message: "Failed to access" });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch data", error: error.message },
      { status: 500 }
    );
  }
}
