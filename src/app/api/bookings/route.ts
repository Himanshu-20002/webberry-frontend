import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, date, time, message } = await req.json();

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { message: "Name, email, date, and time are required" },
        { status: 400 }
      );
    }

    const booking = await db.booking.create({
      data: { name, email, phone, date, time, message },
    });

    return NextResponse.json({ message: "Booking request submitted successfully", data: booking }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getSession(req);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const bookings = await db.booking.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ data: bookings });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
