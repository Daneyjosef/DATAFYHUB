import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/constants";

export async function POST(req: Request) {
  const body = await req.json();
  const { spaceName, duration, dateLabel, total, details } = body;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; skipping email send.");
    return NextResponse.json(
      { sent: false, reason: "Email service not configured" },
      { status: 200 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: process.env.BOOKING_FROM_EMAIL ?? "Datafy Hub <onboarding@resend.dev>",
      to: SITE.email,
      replyTo: details.email,
      subject: `New Booking Request — ${spaceName}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Space:</strong> ${spaceName}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Date:</strong> ${dateLabel}</p>
        <p><strong>Total:</strong> ₦${Number(total).toLocaleString()}</p>
        <hr />
        <p><strong>Name:</strong> ${details.fullName}</p>
        <p><strong>Email:</strong> ${details.email}</p>
        <p><strong>Phone:</strong> +234${details.phone}</p>
        <p><strong>Company:</strong> ${details.company || "-"}</p>
        <p><strong>Notes:</strong> ${details.notes || "-"}</p>
      `,
    });
    return NextResponse.json({ sent: true });
  } catch (err) {
    console.error("Failed to send booking email:", err);
    return NextResponse.json(
      { sent: false, reason: "Failed to send email" },
      { status: 500 }
    );
  }
}
