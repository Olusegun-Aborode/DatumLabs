/**
 * The animated grid + gradient-blob backdrop shared across pages.
 */
export function SiteBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 -right-4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary/15 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t py-12 px-6 lg:px-12 relative z-10 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="/" className="flex items-center space-x-2">
          <img src="/images/datum-logo.png" alt="Datum Labs" className="h-6 w-6" />
          <span className="font-bold">Datum Labs</span>
        </a>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Datum Labs. All rights reserved.</p>
      </div>
    </footer>
  )
}
