import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const leads = await prisma.reservationRequest.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ leads });
}

export async function POST(request: Request) {
  const body = await request.json();

  const guestName = typeof body.guestName === "string" ? body.guestName.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!guestName || !phone) {
    return NextResponse.json(
      { error: "guestName ve phone zorunludur." },
      { status: 400 }
    );
  }

  const parseDate = (value: unknown) => {
    if (typeof value !== "string" || !value) return undefined;
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? undefined : date;
  };

  const lead = await prisma.reservationRequest.create({
    data: {
      guestName,
      phone,
      email: typeof body.email === "string" ? body.email.trim() || null : null,
      checkIn: parseDate(body.checkIn),
      checkOut: parseDate(body.checkOut),
      guestCount:
        typeof body.guestCount === "number" ? body.guestCount : undefined,
      roomType: typeof body.roomType === "string" ? body.roomType : undefined,
      notes: typeof body.notes === "string" ? body.notes : undefined,
      transcript:
        typeof body.transcript === "string" ? body.transcript : undefined,
    },
  });

  return NextResponse.json({ lead }, { status: 201 });
}
