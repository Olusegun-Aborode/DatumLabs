export default function RwaTerminalPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://rwa-terminal-dashboard.pages.dev/"
        className="w-full h-full border-0"
        title="RWA Terminal"
        allow="clipboard-write"
      />
    </div>
  )
}
