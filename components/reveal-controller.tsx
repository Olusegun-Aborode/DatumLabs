"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * Drives the two motion systems from the design:
 *  - scroll fade-up reveals on [data-reveal] (IntersectionObserver → .revealed),
 *    staggered per group; resting state is visible so nothing is ever stuck hidden.
 *  - hero word-stagger: adds .anim-in to [data-anim-words] once fonts are ready.
 * Re-runs on route change. No-ops under reduced motion.
 */
export function RevealController() {
  const pathname = usePathname()

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    // Hero word stagger
    const runWords = () => {
      document.querySelectorAll<HTMLElement>("[data-anim-words]").forEach((el) => el.classList.add("anim-in"))
    }
    if (reduce) {
      runWords()
    } else if (document.fonts?.ready) {
      const safety = window.setTimeout(runWords, 1200)
      document.fonts.ready.then(() => {
        window.clearTimeout(safety)
        runWords()
      })
    } else {
      runWords()
    }

    if (reduce) return

    // Scroll reveals
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)"))
    if (!targets.length) return

    // per-group stagger index
    const groupCounts = new Map<Element, number>()
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const parent = el.parentElement || document.body
          const idx = groupCounts.get(parent) ?? 0
          groupCounts.set(parent, idx + 1)
          el.style.animationDelay = `${Math.min(idx * 110, 440)}ms`
          el.classList.add("revealed")
          obs.unobserve(el)
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )
    targets.forEach((t) => io.observe(t))

    // safety: reveal everything after 4s regardless
    const safety = window.setTimeout(() => targets.forEach((t) => t.classList.add("revealed")), 4000)

    return () => {
      io.disconnect()
      window.clearTimeout(safety)
    }
  }, [pathname])

  return null
}
