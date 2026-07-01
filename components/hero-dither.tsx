"use client"

import { useEffect, useRef } from "react"

/**
 * Ambient sapphire "dither" field behind the hero. Domain-warped multi-sine
 * flow field thresholds square sapphire dots on a 6px grid. Empty over the left
 * ~44% (clears the headline), low opacity. Static frame under reduced-motion;
 * pauses when the tab is hidden. Purely decorative.
 */
export function HeroDither() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    const SAP = "74,108,247"
    const cell = 6
    let W = 0
    let H = 0
    let cols = 0
    let rows = 0
    let thresh: Float32Array = new Float32Array(0)
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let t = 0
    let raf = 0
    let running = true

    function resize() {
      const r = wrap!.getBoundingClientRect()
      W = Math.max(1, Math.floor(r.width))
      H = Math.max(1, Math.floor(r.height))
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = Math.floor(W * dpr)
      canvas!.height = Math.floor(H * dpr)
      canvas!.style.width = W + "px"
      canvas!.style.height = H + "px"
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(W / cell)
      rows = Math.ceil(H / cell)
      thresh = new Float32Array(cols * rows)
      for (let i = 0; i < thresh.length; i++) thresh[i] = Math.random()
    }

    function field(x: number, y: number) {
      const wx = Math.sin(y * 0.013 + t * 0.9) * 30 + Math.cos(y * 0.032 - t * 0.6) * 14
      const wy = Math.cos(x * 0.013 + t * 0.8) * 30 + Math.sin(x * 0.03 + t * 0.7) * 14
      const xx = x + wx
      const yy = y + wy
      const v =
        Math.sin(xx * 0.019 + t * 1.0) +
        Math.sin(yy * 0.021 - t * 0.8) +
        Math.sin((xx + yy) * 0.014 + t * 0.6) +
        Math.sin((xx - yy) * 0.017 - t * 0.5)
      return (v / 4 + 1) / 2
    }

    function smooth(e: number) {
      const c = Math.max(0, Math.min(1, e))
      return c * c * (3 - 2 * c)
    }

    function draw() {
      if (!W || !H) resize()
      ctx!.clearRect(0, 0, W, H)
      for (let gy = 0; gy < rows; gy++) {
        const y = gy * cell + cell / 2
        for (let gx = 0; gx < cols; gx++) {
          const x = gx * cell + cell / 2
          const n = field(x, y)
          const ey = Math.min(1, y / (H * 0.04)) * Math.min(1, (H - y) / (H * 0.12))
          const rx = Math.min(1, (W - x) / (W * 0.05))
          const leftGate = smooth((x - W * 0.44) / (W * 0.38))
          const topBand = Math.max(0, 1 - y / (H * 0.34))
          const gate = leftGate * (1 - topBand * topBand * 0.85)
          const p = n * ey * rx * gate
          if (p <= thresh[gy * cols + gx]) continue
          const s = Math.min(cell, cell * (0.5 + p * 0.6))
          const off = (cell - s) / 2
          ctx!.fillStyle = `rgba(${SAP},${(0.12 + p * 0.18).toFixed(3)})`
          ctx!.fillRect(Math.round(gx * cell + off), Math.round(gy * cell + off), Math.ceil(s), Math.ceil(s))
        }
      }
    }

    function loop() {
      if (!running) return
      t += 0.019
      draw()
      raf = requestAnimationFrame(loop)
    }

    resize()
    const ro = new ResizeObserver(() => resize())
    ro.observe(wrap)

    if (reduce) {
      draw()
    } else {
      loop()
    }

    function onVis() {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!reduce && !running) {
        running = true
        loop()
      }
    }
    document.addEventListener("visibilitychange", onVis)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  return (
    <div ref={wrapRef} className="dither-stage" aria-hidden="true">
      <canvas ref={canvasRef} className="dither-canvas" />
    </div>
  )
}
