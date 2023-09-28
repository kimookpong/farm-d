import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, image, token } = await request.json();
  await connectMongoDB();
  //await User.create({ name, image, token });
  const item = await User.findOne({ token: token });
  if (item) {
    return NextResponse.json({ message: "yes", status: 200, data: item });
  } else {
    await User.create({ name, image, token, status: 1 });
    const item2 = await User.findOne({ token: token });
    return NextResponse.json({ message: "no", status: 200, data: item2 });
  }
}
