import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession(req);

    const blogs = await db.blog.findMany({
      where: session ? {} : { published: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ data: blogs });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession(req);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { title, slug, content, summary, coverImage, published } = await req.json();

    if (!title || !slug || !content) {
      return NextResponse.json(
        { message: "Title, slug, and content are required" },
        { status: 400 }
      );
    }

    const existingBlog = await db.blog.findUnique({ where: { slug } });
    if (existingBlog) {
      return NextResponse.json(
        { message: "A blog post with this slug already exists" },
        { status: 400 }
      );
    }

    const blog = await db.blog.create({
      data: { title, slug, content, summary, coverImage, published: published ?? false },
    });

    return NextResponse.json({ message: "Blog post created successfully", data: blog }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
