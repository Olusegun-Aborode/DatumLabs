import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

/**
 * Report lead-gate submission. Captures name + email + occupation to the Datum
 * Labs Beehiiv list (occupation/name as custom fields), tagged so gate leads
 * are distinguishable from plain newsletter signups.
 *
 * Beehiiv requires custom fields to pre-exist in the publication. If the call
 * with custom_fields is rejected, we retry with email-only so the lead is never
 * lost.
 */
export async function POST(request: Request) {
  try {
    const { name, email, occupation } = await request.json()

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }
    if (!email || typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email is required" }, { status: 400 })
    }
    if (!occupation || typeof occupation !== "string") {
      return NextResponse.json({ error: "Occupation is required" }, { status: 400 })
    }

    const publicationId = process.env.BEEHIIV_PUBLICATION_ID
    const apiKey = process.env.BEEHIIV_API_KEY
    if (!publicationId || !apiKey) {
      return NextResponse.json({ error: "Lead capture is not configured" }, { status: 503 })
    }

    const url = `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    }
    const base = {
      email,
      reactivate_existing: true,
      send_welcome_email: false,
      utm_source: "report-gate",
    }

    // First try with custom fields (Name, Occupation).
    let response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        ...base,
        custom_fields: [
          { name: "Name", value: name },
          { name: "Occupation", value: occupation },
        ],
      }),
    })

    // If custom fields aren't set up in Beehiiv, retry email-only so we still
    // capture the lead.
    if (!response.ok) {
      const details = await response.json().catch(() => ({}))
      console.error("Beehiiv gate (with custom fields) failed:", details)
      response = await fetch(url, { method: "POST", headers, body: JSON.stringify(base) })
      if (!response.ok) {
        const d2 = await response.json().catch(() => ({}))
        console.error("Beehiiv gate (email-only) failed:", d2)
        return NextResponse.json({ error: "Failed to submit" }, { status: response.status })
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Gate submission failed:", error)
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 })
  }
}
