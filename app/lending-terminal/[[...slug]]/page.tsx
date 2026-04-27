import LendingTerminalIframe from "./client"

export const metadata = {
  title: "Lending Intelligence Terminal — Datum Labs",
  description:
    "Multi-protocol lending analytics: Aave V3, SparkLend, Morpho, Fluid on Ethereum.",
}

interface PageProps {
  params: Promise<{ slug?: string[] }>
}

/**
 * Optional catch-all route for `/lending-terminal/*`. The dashboard itself
 * lives at https://lending-intelligence-terminal.vercel.app and is embedded
 * via iframe — but because the parent owns the URL bar, deep paths like
 * `/lending-terminal/protocols?p=spark` need a real route here, otherwise
 * Next.js returns 404 on reload.
 *
 * Server component: parses the URL slug and hands the inner path to the
 * client component, which mounts the iframe and keeps the parent URL in
 * sync as the user navigates inside.
 */
export default async function LendingTerminalPage({ params }: PageProps) {
  const { slug } = await params
  const innerPath = "/" + (slug?.join("/") ?? "")
  return <LendingTerminalIframe initialPath={innerPath} />
}
