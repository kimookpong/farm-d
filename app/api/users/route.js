import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, image, token } = await request.json();
  await connectMongoDB();
  await User.create({ name, image, token });
  return NextResponse.json({ message: "Created", status: 200 });
}

export async function GET(request) {
  await connectMongoDB();
  const items = await User.find();
  return NextResponse.json({ data: items });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted", status: 200 });
}
