import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession(req);
    
    const testimonials = await db.testimonial.findMany({
      where: session ? {} : { approved: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ data: testimonials });
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
    const { name, role, company, content, rating, approved } = await req.json();

    if (!name || !content) {
      return NextResponse.json(
        { message: "Name and content are required" },
        { status: 400 }
      );
    }

    const testimonial = await db.testimonial.create({
      data: {
        name,
        role,
        company,
        content,
        rating: Number(rating) || 5,
        approved: session ? (approved ?? true) : false,
      },
    });

    return NextResponse.json({ message: "Testimonial submitted successfully", data: testimonial }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
