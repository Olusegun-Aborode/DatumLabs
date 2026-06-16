"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Lock } from "lucide-react"

const STORAGE_KEY = "datum_report_unlocked"

/**
 * Soft lead-gate for the back half of a report (PDF download + remaining body).
 *
 * The `children` are always rendered into the DOM (so search engines index the
 * full report — preserving SEO). When locked, they're blurred and a centered
 * "Unlock full access" modal asks for name/email/occupation. Submitting posts
 * to /api/gate (Beehiiv) and unlocks all reports via localStorage.
 */
export function ReportGate({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", occupation: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  const [error, setError] = useState("")

  useEffect(() => {
    setUnlocked(typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY) === "1")
    setHydrated(true)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === "loading") return
    setStatus("loading")
    setError("")
    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Something went wrong")
      }
      window.localStorage.setItem(STORAGE_KEY, "1")
      setUnlocked(true)
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  // Before hydration we render children fully so crawlers (and the SSR HTML)
  // always contain the complete report. Once hydrated, gate if still locked.
  if (!hydrated || unlocked) return <>{children}</>

  return (
    <div className="relative my-8 min-h-[520px]">
      {/* Gated content stays in the DOM, blurred behind the modal */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none blur-[6px] opacity-50 max-h-[560px] overflow-hidden"
      >
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      {/* Centered unlock modal */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card shadow-2xl p-7 lg:p-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-1">Unlock full access</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Enter your details to read the full report and download the PDF.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            <input
              type="text"
              required
              placeholder="Full name"
              aria-label="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              disabled={status === "loading"}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
            />
            <input
              type="email"
              required
              placeholder="name@email.com"
              aria-label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              disabled={status === "loading"}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
            />
            <input
              type="text"
              required
              placeholder="Occupation (e.g. Protocol founder, Analyst)"
              aria-label="Occupation"
              value={form.occupation}
              onChange={(e) => setForm({ ...form, occupation: e.target.value })}
              disabled={status === "loading"}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
            />
            <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Unlocking…
                </>
              ) : (
                "Unlock full report"
              )}
            </Button>
            {error ? <p className="text-xs text-destructive text-center">{error}</p> : null}
            <p className="text-[11px] text-muted-foreground text-center pt-1">
              We respect your inbox. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
