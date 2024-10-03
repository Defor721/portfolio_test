import connectDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await connectDB;
  const db = client.db("todo");
  const result = await db.collection("todos").find().toArray();
  let todos = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  return NextResponse.json(todos);
}

export async function POST() {
  const client = await connectDB;
  const db = client.db("todo");
  const result = await db.collection("todos").find().toArray();
  let todos = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  return NextResponse.json(todos);
}

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     const client = await clientPromise;
//     const db = client.db("todo");
//     const result = await db.collection("todos").find().toArray();
//     let todos = result.map((a) => {
//       a._id = a._id.toString();
//       return a;
//     });
//     res.status(200).json(todos);
//   } else {
//     res.status(405);
//   }

// const db = client.db("todo");
// let result = await db.collection("todos").find().toArray();
// let todos = result.map((a) => {
//   a._id = a._id.toString();
//   return a;
// });
// return todos;
// }
