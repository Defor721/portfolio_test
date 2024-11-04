import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const token = request.cookies.get("token")?.value;
  const client = await clientPromise;
  const db = client.db("userdata");
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const name = decoded.name;
      const user = await db.collection("users").findOne({ name: name });
      if (user) {
        const { createAt } = await request.json();
        const result = await db
          .collection("users")
          .updateOne(
            { name: name },
            { $pull: { todos: { createAt: new Date(createAt) } } }
          );
        if (result.modifiedCount > 0) {
          return NextResponse.json({ message: "Todo deleted successfully" });
        } else {
          return NextResponse.json({ message: "Todo not found" });
        }
      }

      return NextResponse.json({ message: "user not found" });
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to delete data", error: error.message },
        { status: 500 }
      );
    }
  }
}
