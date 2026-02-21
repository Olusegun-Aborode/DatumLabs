export default function NaviDashboardPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://datumlabs-defi-dashboard.vercel.app/navi/overview"
        className="w-full h-full border-0"
        title="NAVI Lending Dashboard"
        allow="clipboard-write"
      />
    </div>
  )
}
