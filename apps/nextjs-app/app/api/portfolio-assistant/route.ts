import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.N8N_PORTFOLIO_ASSISTANT_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("Missing N8N_PORTFOLIO_ASSISTANT_WEBHOOK_URL");
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
      cache: "no-store",
    });

    const raw = await res.json(); // <-- read as text first

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to reach assistant", details: raw },
        { status: 502 }
      );
    }

    let reply: string | null = null;


    // If still nothing, just use raw text
    if (!reply && raw) {
      reply = raw[0]?.output;
    }

    if (!reply) {
      reply = "Sorry, I didn't get a response from the assistant.";
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("portfolio-assistant route error", err);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
