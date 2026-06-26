import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    await db.$queryRaw`SELECT 1`;
    return NextResponse.json({ status: "OK", database: "CONNECTED" });
  } catch (error: any) {
    return NextResponse.json(
      { status: "ERROR", message: error.message || "Database connection failed" },
      { status: 500 }
    );
  }
}
