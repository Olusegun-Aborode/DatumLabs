import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SparkLend Dashboard | Datum Labs",
  description: "Live SparkLend market analytics — rates, utilization, and liquidations.",
  alternates: { canonical: "/sparklend" },
  openGraph: { title: "SparkLend Dashboard | Datum Labs", url: "/sparklend", type: "website" },
}

export default function SparkLendDashboardPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://sparklend-dashboard.vercel.app"
        className="w-full h-full border-0"
        title="SparkLend Terminal"
        allow="clipboard-write"
      />
    </div>
  )
}
