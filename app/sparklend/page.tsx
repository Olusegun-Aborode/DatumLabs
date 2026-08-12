import { redirect } from "next/navigation"

/**
 * The SparkLend Terminal is a separate Vercel project (repo: sparklend-dashboard,
 * URL: sparklend-dashboard.vercel.app). Iframing it from datumlab.xyz was
 * unreliable across browsers (cross-origin storage partitioning + client-only
 * React roots produced blank renders even though direct access worked).
 *
 * Redirecting is the pragmatic fix. The proper long-term move is adding
 * sparklend.datumlab.xyz as a custom domain on the sparklend-dashboard Vercel
 * project so the branded URL points straight at the app.
 */
export default function SparkLendDashboardRedirect(): never {
  redirect("https://sparklend-dashboard.vercel.app")
}
