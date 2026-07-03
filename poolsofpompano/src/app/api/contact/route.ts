import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    !body.name.trim() ||
    typeof body.phone !== "string" ||
    !body.phone.trim()
  ) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required." },
      { status: 400 }
    );
  }

  // Forward the lead to your CRM/email/ClickUp Form webhook here.
  console.log("New pool quote request:", body);

  return NextResponse.json({ ok: true });
}
