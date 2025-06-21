import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, content } = await req.json();
  if (!title || !content) {
    return NextResponse.json({ message: "Title and content are required" }, { status: 400 });
  }
  try {
    const data = await prisma.blog.create({
      data: {
        title,
        content,
      },
    });
    return NextResponse.json({ message: "Blog published successfully", data }, { status: 201 });
  } catch (error) {
    console.error("Error publishing blog:", error);
    return NextResponse.json({ message: "An error occurred while publishing the blog", error }, { status: 500 });
  }
}
