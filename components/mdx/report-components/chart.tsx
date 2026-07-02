"use client"

import { useEffect, useState } from "react"

/**
 * Data-driven chart for reports — Joel drives these from MDX with plain data,
 * no React needed. Backed by recharts, styled to the Datum sapphire palette.
 *
 * Usage in MDX:
 *   <Chart type="line" title="Deposits, majors" x="month"
 *     series={["Aave","Morpho"]}
 *     data={[{month:"Apr",Aave:120,Morpho:80},{month:"May",Aave:140,Morpho:95}]} />
 *
 *   type: "line" | "area" | "bar"  (default "line")
 */
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const PALETTE = ["#4A6CF7", "#0EA5E9", "#7C5CFC", "#0D9488", "#F59E0B", "#E64980"]

type ChartProps = {
  type?: "line" | "area" | "bar"
  data: Record<string, string | number>[]
  x: string
  series: string[]
  title?: string
  height?: number
}

const axis = { stroke: "#9AA4B7", fontSize: 11, fontFamily: "var(--font-mono)" }
const grid = "#ECEFF4"

export function Chart({ type = "line", data = [], x, series = [], title, height = 300 }: ChartProps) {
  // recharts can't render server-side; mount-gate so prerender/SSR is safe.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <figure className="rpt-figure" style={{ margin: "24px 0" }}>
      <div
        style={{
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          background: "var(--surface-default)",
          padding: "20px 16px 12px",
        }}
      >
        {title ? (
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-tertiary)", margin: "0 8px 12px" }}>
            {title}
          </div>
        ) : null}
        {!mounted ? (
          <div style={{ height }} aria-hidden="true" />
        ) : (
        <ResponsiveContainer width="100%" height={height}>
          {type === "bar" ? (
            <BarChart data={data} margin={{ top: 4, right: 8, left: -8, bottom: 0 }}>
              <CartesianGrid stroke={grid} vertical={false} />
              <XAxis dataKey={x} tickLine={false} axisLine={{ stroke: grid }} tick={axis} />
              <YAxis tickLine={false} axisLine={false} tick={axis} width={40} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #DDE2EB", fontSize: 12 }} />
              {series.length > 1 ? <Legend wrapperStyle={{ fontSize: 12, fontFamily: "var(--font-mono)" }} /> : null}
              {series.map((s, i) => (
                <Bar key={s} dataKey={s} fill={PALETTE[i % PALETTE.length]} radius={[3, 3, 0, 0]} />
              ))}
            </BarChart>
          ) : type === "area" ? (
            <AreaChart data={data} margin={{ top: 4, right: 8, left: -8, bottom: 0 }}>
              <CartesianGrid stroke={grid} vertical={false} />
              <XAxis dataKey={x} tickLine={false} axisLine={{ stroke: grid }} tick={axis} />
              <YAxis tickLine={false} axisLine={false} tick={axis} width={40} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #DDE2EB", fontSize: 12 }} />
              {series.length > 1 ? <Legend wrapperStyle={{ fontSize: 12, fontFamily: "var(--font-mono)" }} /> : null}
              {series.map((s, i) => (
                <Area key={s} dataKey={s} stroke={PALETTE[i % PALETTE.length]} fill={PALETTE[i % PALETTE.length]} fillOpacity={0.12} strokeWidth={2} />
              ))}
            </AreaChart>
          ) : (
            <LineChart data={data} margin={{ top: 4, right: 8, left: -8, bottom: 0 }}>
              <CartesianGrid stroke={grid} vertical={false} />
              <XAxis dataKey={x} tickLine={false} axisLine={{ stroke: grid }} tick={axis} />
              <YAxis tickLine={false} axisLine={false} tick={axis} width={40} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #DDE2EB", fontSize: 12 }} />
              {series.length > 1 ? <Legend wrapperStyle={{ fontSize: 12, fontFamily: "var(--font-mono)" }} /> : null}
              {series.map((s, i) => (
                <Line key={s} type="monotone" dataKey={s} stroke={PALETTE[i % PALETTE.length]} strokeWidth={2} dot={false} />
              ))}
            </LineChart>
          )}
        </ResponsiveContainer>
        )}
      </div>
    </figure>
  )
}
