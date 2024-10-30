import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, password } = await request.json();

    const client = await clientPromise;
    const db = client.db("userdata");

    const check = await db.collection("users").findOne({ name: name });
    if (!check) {
      const result = await db.collection("users").insertOne({
        name,
        password,
        createdAt: new Date(),
      });
      return NextResponse.json(
        { message: "Data created successfully", result },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Name already exists" },
        { status: 409 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create data", error: error.message },
      { status: 500 }
    );
  }
}
