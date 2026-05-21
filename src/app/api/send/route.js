export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();

  if (!email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      // Resend requires the sender domain to be verified.
      // Until you verify a domain, use their sandbox address:
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],           // your Gmail — receives every contact form message
      reply_to: email,         // so you can reply directly to the visitor
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;background:#f9f7ff;border-radius:8px;border:1px solid #ddd8f5">
          <h2 style="color:#5B45D4;margin-top:0">New message from your portfolio</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border-color:#ddd8f5"/>
          <p style="white-space:pre-wrap">${message}</p>
          <hr style="border-color:#ddd8f5"/>
          <p style="color:#888;font-size:12px">Sent via your portfolio contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: data.id }, { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
