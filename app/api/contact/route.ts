import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/constants";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

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
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    return NextResponse.json({ sent: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { sent: false, reason: "Failed to send email" },
      { status: 500 }
    );
  }
}
