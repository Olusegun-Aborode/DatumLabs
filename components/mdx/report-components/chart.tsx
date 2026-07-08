"use client"

import { useEffect, useRef, useState } from "react"

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
 *
 * We measure the container width ourselves (ResizeObserver) and pass recharts an
 * explicit pixel width instead of using <ResponsiveContainer>, which measured a
 * 0-width plot area in the report column layout and rendered blank charts.
 */
import {
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

type ChartUnit = "usdm" | "percent" | "bps"

type ChartProps = {
  type?: "line" | "area" | "bar"
  data: Record<string, string | number>[]
  x: string
  series: string[]
  title?: string
  height?: number
  /** Drives the tooltip formatter: "usdm" → "$43M" / "−$162M",
   *  "percent" → "31.23%", "bps" → "−37 bps". Falls back to detecting a
   *  unit suffix in the data key name for charts that still carry one. */
  unit?: ChartUnit
}

const MINUS = "−"

function formatUsdMillions(value: number): string {
  if (value === 0) return "$0"
  const sign = value < 0 ? MINUS : ""
  const abs = Math.abs(value)
  if (abs >= 1000) return `${sign}$${(abs / 1000).toFixed(2)}B`
  if (abs < 10) return `${sign}$${parseFloat(abs.toFixed(2))}M`
  return `${sign}$${Math.round(abs)}M`
}

function formatChartValue(value: number, unit?: ChartUnit): string {
  const sign = value < 0 ? MINUS : ""
  const abs = Math.abs(value)
  switch (unit) {
    case "usdm":
      return formatUsdMillions(value)
    case "percent":
      return `${sign}${parseFloat(abs.toFixed(2))}%`
    case "bps":
      return value === 0 ? "0 bps" : `${sign}${parseFloat(abs.toFixed(1))} bps`
    default:
      return String(value)
  }
}

function detectUnitFromKey(key: string): ChartUnit | undefined {
  if (/\(\$M\)\s*$/.test(key)) return "usdm"
  if (/\(bps\)\s*$/.test(key)) return "bps"
  if (/(\(%\)|%)\s*$/.test(key)) return "percent"
  return undefined
}

function cleanSeriesName(key: string): string {
  return key.replace(/\s*(\(\$M\)|\(bps\)|\(%\)|%)\s*$/, "")
}

const axis = { stroke: "#9AA4B7", fontSize: 11, fontFamily: "var(--font-mono)" }
const grid = "#ECEFF4"

export function Chart({ type = "line", data = [], x, series = [], title, height = 300, unit }: ChartProps) {
  const ref = useRef<HTMLDivElement>(null)
  // width 0 until measured on the client → renders a placeholder during SSR /
  // before first measure, so prerender is safe and there's no layout jump.
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => setWidth(el.clientWidth)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const common = { data, width, height, margin: { top: 4, right: 8, left: -8, bottom: 0 } }
  const showLegend = series.length > 1

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
        <div ref={ref} style={{ width: "100%" }}>
          {width > 0 ? (
            type === "bar" ? (
              <BarChart {...common}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey={x} tickLine={false} axisLine={{ stroke: grid }} tick={axis} minTickGap={24} />
                <YAxis tickLine={false} axisLine={false} tick={axis} width={40} />
                <Tooltip
                  contentStyle={{ borderRadius: 8, border: "1px solid #DDE2EB", fontSize: 12 }}
                  formatter={(value: number | string, name: string | number): [string, string] => [
                    formatChartValue(Number(value), unit ?? detectUnitFromKey(String(name))),
                    cleanSeriesName(String(name)),
                  ]}
                />
                {showLegend ? <Legend wrapperStyle={{ fontSize: 12, fontFamily: "var(--font-mono)" }} /> : null}
                {series.map((s, i) => (
                  <Bar key={s} dataKey={s} fill={PALETTE[i % PALETTE.length]} radius={[3, 3, 0, 0]} />
                ))}
              </BarChart>
            ) : type === "area" ? (
              <AreaChart {...common}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey={x} tickLine={false} axisLine={{ stroke: grid }} tick={axis} minTickGap={24} />
                <YAxis tickLine={false} axisLine={false} tick={axis} width={40} />
                <Tooltip
                  contentStyle={{ borderRadius: 8, border: "1px solid #DDE2EB", fontSize: 12 }}
                  formatter={(value: number | string, name: string | number): [string, string] => [
                    formatChartValue(Number(value), unit ?? detectUnitFromKey(String(name))),
                    cleanSeriesName(String(name)),
                  ]}
                />
                {showLegend ? <Legend wrapperStyle={{ fontSize: 12, fontFamily: "var(--font-mono)" }} /> : null}
                {series.map((s, i) => (
                  <Area key={s} dataKey={s} stroke={PALETTE[i % PALETTE.length]} fill={PALETTE[i % PALETTE.length]} fillOpacity={0.12} strokeWidth={2} />
                ))}
              </AreaChart>
            ) : (
              <LineChart {...common}>
                <CartesianGrid stroke={grid} vertical={false} />
                <XAxis dataKey={x} tickLine={false} axisLine={{ stroke: grid }} tick={axis} minTickGap={24} />
                <YAxis tickLine={false} axisLine={false} tick={axis} width={40} />
                <Tooltip
                  contentStyle={{ borderRadius: 8, border: "1px solid #DDE2EB", fontSize: 12 }}
                  formatter={(value: number | string, name: string | number): [string, string] => [
                    formatChartValue(Number(value), unit ?? detectUnitFromKey(String(name))),
                    cleanSeriesName(String(name)),
                  ]}
                />
                {showLegend ? <Legend wrapperStyle={{ fontSize: 12, fontFamily: "var(--font-mono)" }} /> : null}
                {series.map((s, i) => (
                  <Line key={s} type="monotone" dataKey={s} stroke={PALETTE[i % PALETTE.length]} strokeWidth={2} dot={false} />
                ))}
              </LineChart>
            )
          ) : (
            <div style={{ height }} aria-hidden="true" />
          )}
        </div>
      </div>
    </figure>
  )
}
