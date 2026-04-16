import Link from "next/link"

export default function NaviDashboardPage() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex items-center gap-3 px-4 py-2 border-b bg-[#F5F6F8]" style={{ borderColor: '#E2E4E9' }}>
        <Link
          href="/live-dashboards"
          className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Live Dashboards
        </Link>
      </div>
      <iframe
        src="https://navi-dash.vercel.app/navi/overview"
        className="w-full flex-1 border-0"
        title="NAVI Lending Dashboard"
        allow="clipboard-write"
      />
    </div>
  )
}
