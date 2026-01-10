import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, inquiry, message } = await req.json();

    if (!name || !email || !phone || !inquiry) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "pro.turbo-smtp.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
    });

    /**
     * ✅ THREE EMAILS — ARRAY FORMAT
     * Nodemailer natively supports this
     */

    const recipients = [
      "info@elixirhomes.com",
      "sales@elixirhomes.com",
      "titoakkara@gmail.com",
    ];

    await transporter.sendMail({
      from: `<no-reply@elixirhomes.com>`,
      to: recipients, // ← THIS is the key point you asked for
      replyTo: email,
      subject: "New Contact Request – Elixir Homes",
      html: `
        <h3>New Contact Request from Elxir Homes - Contact Page</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Enquiry:</b> ${inquiry}</p>
        <p><b>Message:</b> ${message || "—"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Mail sending failed" }, { status: 500 });
  }
}
