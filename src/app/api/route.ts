// src/app/api/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,       // example: ascendfintech@gmail.com
        pass: process.env.EMAIL_PASS,       // App password (not normal password)
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "info@ascendfintech.com", // Your desired recipient
      subject: "New Contact Message from AscendFintech Website",
      html: `
        <h2>New message from your website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  }catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Error sending email:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
  console.error("Unknown error sending email");
  return NextResponse.json({ success: false, error: "Unknown error" }, { status: 500 });
}
}
