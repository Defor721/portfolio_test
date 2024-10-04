import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("userdata");
    const collection = db.collection("todos");
    const data = await collection.find({}).toArray();

    return NextResponse.json({ message: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: Failed }, { status: 500 });
  }
}

export async function POST(request) {
  const { title, description } = await request.json;
  const client = await clientPromise;
  const db = client.db("userdata");
  const collection = db.collection("todos");
  const result = await collection.insertOne({
    title,
    description,
    createdAt: new Date(),
  });
  return NextResponse.json({ message: result }, { status: 200 });
}
