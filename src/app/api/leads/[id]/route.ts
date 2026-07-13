import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ReservationStatus } from "../../../../../generated/prisma/enums";

export async function PATCH(
  request: Request,
  ctx: RouteContext<"/api/leads/[id]">
) {
  const { id } = await ctx.params;
  const body = await request.json();

  const status = body.status as string | undefined;
  if (!status || !(status in ReservationStatus)) {
    return NextResponse.json({ error: "Geçersiz durum." }, { status: 400 });
  }

  const lead = await prisma.reservationRequest.update({
    where: { id },
    data: { status: status as ReservationStatus },
  });

  return NextResponse.json({ lead });
}
