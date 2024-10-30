import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, password } = await request.json();
    const client = await clientPromise;
    const db = client.db("userdata");
    const userCollection = db.collection("users");
    const authCollection = db.collection("apikey");
    const auths = await authCollection.findOne({
      name: "apikeys",
    });
    const token = auths.token;
    const user = await userCollection.findOne({ name });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    if (user.password == password) {
      return NextResponse.json(
        { message: "Login Successfully", token },
        { status: 200 }
      );
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
