import { NextResponse } from "next/server";
import { createBooking } from "@/lib/db";

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  let name: string | null = null;
  let email: string | null = null;
  let tourIdRaw: string | null = null;
  let date: string | null = null;

  if (contentType.includes("application/json")) {
    const body = await request.json();
    name = body.name ?? null;
    email = body.email ?? null;
    tourIdRaw = body.tour_id ? String(body.tour_id) : null;
    date = body.date ?? null;
  } else {
    const formData = await request.formData();
    name = (formData.get("name") as string | null) ?? null;
    email = (formData.get("email") as string | null) ?? null;
    tourIdRaw = (formData.get("tour_id") as string | null) ?? null;
    date = (formData.get("date") as string | null) ?? null;
  }

  if (!name || !email || !tourIdRaw || !date) {
    return badRequest("Missing required fields: name, email, tour_id, date.");
  }

  const tourId = Number(tourIdRaw);
  if (!Number.isFinite(tourId)) {
    return badRequest("tour_id must be a valid number.");
  }

  const result = await createBooking({
    name,
    email,
    tour_id: tourId,
    date,
    status: "pending",
  });

  if (!result.ok) {
    const status = result.error?.includes("not configured") ? 503 : 500;

    return NextResponse.json(
      { ok: false, error: result.error, details: result.details },
      { status },
    );
  }

  if (!contentType.includes("application/json")) {
    return NextResponse.redirect(new URL("/booking?success=1", request.url), 303);
  }

  return NextResponse.json({ ok: true, message: "Booking submitted successfully." });
}
