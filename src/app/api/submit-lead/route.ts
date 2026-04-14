import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  industry?: string;
  message?: string;
  source?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>;
    const requiredFields = ["name", "company", "email"] as const;

    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim().length < 2) {
        return NextResponse.json({ error: `Missing or invalid ${field}` }, { status: 400 });
      }
    }

    if (!isValidEmail(String(body.email))) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const lead: LeadPayload = {
      name: String(body.name).trim(),
      company: String(body.company).trim(),
      email: String(body.email).trim(),
      phone: body.phone ? String(body.phone).trim() : "",
      industry: body.industry ? String(body.industry).trim() : "",
      message: body.message ? String(body.message).trim() : "",
      source: body.source ? String(body.source).trim() : "website",
    };

    console.info("Lead captured:", lead);

    return NextResponse.json({ success: true, message: "Lead submitted successfully." }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Unable to process lead submission." }, { status: 500 });
  }
}
