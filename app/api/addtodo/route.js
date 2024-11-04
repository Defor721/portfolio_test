import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
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
      const { title, description } = await request.json();
      const newTodos = {
        title: title,
        description: description,
        createAt: new Date(),
      };
      const result = await db
        .collection("users")
        .updateOne({ name: name }, { $push: { todos: newTodos } });
      if (result.modifiedCount > 0) {
        return NextResponse.json({ message: "Todo added successfully" });
      } else {
        return NextResponse.json({ message: "Failed to add todo" });
      }
    } catch (error) {
      console.error("Error adding todo:", error);
      return NextResponse.json(
        { message: "Error adding todo" },
        { status: 500 }
      );
    }
  }
}
