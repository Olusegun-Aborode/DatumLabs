import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SparkLend Dashboard | Datum Labs",
  description:
    "Live SparkLend market analytics — Spark ecosystem TVL, peer market share, revenue by stream, wstETH loop, collateral concentration, and borrower composition.",
  alternates: { canonical: "/sparklend" },
  openGraph: {
    title: "SparkLend Dashboard | Datum Labs",
    url: "/sparklend",
    type: "website",
  },
}

/**
 * SparkLend Terminal - embedded dashboard.
 *
 * Ships from a separate Vercel project (repo: sparklend-dashboard, URL:
 * sparklend-dashboard.vercel.app). Iframe layout mirrors /fluid-terminal:
 * flex-col wrapper so the header takes its natural height and the iframe
 * takes flex-1 (avoids the h-screen + h-full collapse that shows a blank
 * iframe in some browsers). Datum favicons + branded URL come from the
 * parent tab so users never see a bare Vercel URL.
 */
export default function SparkLendDashboardPage() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div
        className="flex items-center gap-3 px-4 py-2 border-b bg-[#F5F6F8]"
        style={{ borderColor: "#E2E4E9" }}
      >
        <Link
          href="/live-dashboards"
          className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Live Dashboards
        </Link>
      </div>
      <iframe
        src="https://sparklend-dashboard.vercel.app/"
        className="w-full flex-1 border-0"
        title="SparkLend Terminal"
        allow="clipboard-write"
      />
    </div>
  )
}
