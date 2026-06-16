import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

// Subscribes an email to the Datum Labs Beehiiv publication.
// Credentials live in BEEHIIV_API_KEY / BEEHIIV_PUBLICATION_ID (server-only env).
export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email is required" }, { status: 400 })
    }

    const publicationId = process.env.BEEHIIV_PUBLICATION_ID
    const apiKey = process.env.BEEHIIV_API_KEY
    if (!publicationId || !apiKey) {
      return NextResponse.json({ error: "Newsletter is not configured" }, { status: 503 })
    }

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: "datumlabs-website",
      }),
    })

    if (!response.ok) {
      const details = await response.json().catch(() => ({}))
      console.error("Beehiiv subscribe failed:", details)
      return NextResponse.json({ error: "Failed to subscribe" }, { status: response.status })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Failed to subscribe:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
