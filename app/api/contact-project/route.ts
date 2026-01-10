import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

/**
 * Map route slug to readable project name
 */
function getProjectSource(slug: string) {
  const map: Record<string, string> = {
    "elixir-anfield": "Elixir Anfield Project Page",
    "orchid": "Orchid Project Page",
    "elixir-akkara-garden": "Elixir Akkara Gardens Project Page",
    "elixir-manavath-heights": "Elixir Manavath Heights Project Page",
    "elixir-super-luxury-villas": "Elixir Super Luxury Villas Project Page",
  };

  return map[slug] || "General Contact Page";
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, inquiry, message, pageSlug } =
      await req.json();

    if (!name || !email || !phone || !inquiry) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const projectSource = getProjectSource(pageSlug);

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

    const recipients = [
      "info@elixirhomes.com",
      "sales@elixirhomes.com",
      "titoakkara@gmail.com",
    ];

    await transporter.sendMail({
      from: `<no-reply@elixirhomes.com>`,
      to: recipients,
      replyTo: email,
      subject: `New Lead – ${projectSource}`,
      html: `
        <h3>New Lead Received</h3>

        <p><b>Lead Source:</b> ${projectSource}</p>

        <hr/>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Inquiry:</b> ${inquiry}</p>
        <p><b>Message:</b> ${message || "—"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Mail sending failed" },
      { status: 500 }
    );
  }
}
