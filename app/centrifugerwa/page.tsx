export const metadata = {
  title: "Centrifuge RWA Terminal — Datum Labs",
  description:
    "Real-time flow-of-funds analytics for Centrifuge V3 — TVL, pools, deposits, redemptions, deRWA composability.",
}

export default function CentrifugeRwaPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://datumlabs-centrifuge.vercel.app/"
        className="w-full h-full border-0"
        title="Centrifuge RWA Terminal"
        allow="clipboard-write"
      />
    </div>
  )
}
