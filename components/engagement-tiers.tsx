const CAL = "https://calendly.com/datumlabss/30min"

const TIERS = [
  {
    tier: "TIER 01", key: "GROWTH_INTEL", name: "Growth Data Partnership", sub: "For scaling protocols",
    copy: "Weekly performance reads + maintained pipelines. ROI on every initiative. Bi-weekly office hours for whatever's burning.",
    features: ["weekly performance reads", "initiative ROI tracking", "bi-weekly office hours", "dashboard maintenance", "slack channel access"],
    featured: false,
  },
  {
    tier: "TIER 02", key: "STRATEGIC_INTEL", name: "Strategic Growth Intelligence", sub: "Embedded analyst operations",
    copy: "A dedicated analyst lives in your standups. Automated alerts, unlimited initiatives, competitive benchmarking. We become your data team.",
    features: ["dedicated embedded analyst", "automated alerts + monitoring", "competitive benchmarking", "unlimited deep-dives", "protocol documentation", "on-call for launches"],
    featured: true,
  },
  {
    tier: "TIER 03", key: "FULL_STACK_INTEL", name: "End-to-End Product Lab", sub: "Complete technical arm",
    copy: "We become your technical org. Smart contracts, data-integrated dApps, custom analytics infrastructure. Built, shipped, supported.",
    features: ["smart contract development", "data-integrated dApps", "custom analytics infra", "team training", "systems handover"],
    featured: false,
  },
]

export function EngagementTiers() {
  return (
    <div className="tiers">
      {TIERS.map((t) => (
        <div key={t.key} className={`tier${t.featured ? " featured" : ""}`} data-reveal>
          {t.featured ? <div className="ribbon">Most Popular</div> : null}
          <div className="tier-head"><span>{t.tier}</span><span>{t.key}</span></div>
          <hr />
          <h3>{t.name}</h3>
          <div className="sub">{t.sub}</div>
          <p className="copy">{t.copy}</p>
          <ul>
            {t.features.map((f, i) => (
              <li key={f} data-no={`0${i + 1}`}>{f}</li>
            ))}
          </ul>
          <a href={CAL} target="_blank" rel="noopener noreferrer" className="footer-cta">
            <span>REQUEST_BRIEF</span><span>→</span>
          </a>
        </div>
      ))}
    </div>
  )
}
