import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ 응애: "응애" });
}

export async function POST() {
  return NextResponse.json({ hello: "Nextjs" });
}
