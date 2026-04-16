import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Centrifuge RWA Terminal — Datum Labs",
  description:
    "Real-time flow-of-funds analytics for Centrifuge V3 — TVL, pools, deposits, redemptions, deRWA composability.",
}

export default function CentrifugeRwaPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex items-center justify-between px-4 h-10 border-b bg-background/80 backdrop-blur-sm shrink-0">
        <Link href="/live-dashboards" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
          Back to Dashboards
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/datum-logo.png" alt="Datum Labs" width={20} height={20} />
          <span className="text-xs font-bold">Datum Labs</span>
        </Link>
      </div>
      <iframe
        src="https://datumlabs-centrifuge.vercel.app/"
        className="w-full flex-1 border-0"
        title="Centrifuge RWA Terminal"
        allow="clipboard-write"
      />
    </div>
  )
}
