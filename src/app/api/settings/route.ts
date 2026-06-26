import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    let settings = await db.settings.findUnique({
      where: { id: "singleton" },
    });

    if (!settings) {
      settings = {
        id: "singleton",
        phone: "",
        whatsapp: "",
        email: "",
        address: "",
        instagram: "",
        facebook: "",
        linkedin: "",
        updatedAt: new Date(),
      };
    }

    const formattedData = {
      phone: settings.phone || "",
      whatsapp: settings.whatsapp || "",
      email: settings.email || "",
      address: settings.address || "",
      socials: {
        instagram: settings.instagram || "",
        facebook: settings.facebook || "",
        linkedin: settings.linkedin || "",
      },
    };

    return NextResponse.json({ data: formattedData });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getSession(req);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { phone, whatsapp, email, address, socials } = await req.json();

    const settings = await db.settings.upsert({
      where: { id: "singleton" },
      update: {
        phone,
        whatsapp,
        email,
        address,
        instagram: socials?.instagram,
        facebook: socials?.facebook,
        linkedin: socials?.linkedin,
      },
      create: {
        id: "singleton",
        phone,
        whatsapp,
        email,
        address,
        instagram: socials?.instagram,
        facebook: socials?.facebook,
        linkedin: socials?.linkedin,
      },
    });

    return NextResponse.json({ message: "Settings updated successfully", data: settings });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
