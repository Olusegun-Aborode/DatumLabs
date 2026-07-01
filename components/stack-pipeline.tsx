"use client"

import { useState } from "react"

type Stage = { no: string; name: string; sub: string; items: string[]; callout: string }

const STAGES: Stage[] = [
  { no: "STAGE 01", name: "CHAIN_NODES", sub: "14 networks", items: ["ETH", "BASE", "SUI", "SOL"], callout: "// chain_nodes — we run dedicated archive nodes for every supported network. no rate limits, no rpc weirdness." },
  { no: "STAGE 02", name: "INDEXER", sub: "normalized events", items: ["traces", "logs", "state"], callout: "// indexer — proprietary normalization. events, traces, and state changes land in a single shape." },
  { no: "STAGE 03", name: "WAREHOUSE", sub: "partitioned + materialized", items: ["BigQuery", "Clickhouse"], callout: "// warehouse — petabyte-scale columnar storage. queries return in seconds, not minutes." },
  { no: "STAGE 04", name: "MODEL_LAYER", sub: "protocol semantics", items: ["users", "flows", "cohorts"], callout: "// model_layer — protocol-specific semantic models. user, position, action, not just rows." },
  { no: "STAGE 05", name: "SURFACES", sub: "where insight lives", items: ["dashboards", "alerts", "apps"], callout: "// surfaces — dashboards, alerts, and full applications. the data shows up where decisions get made." },
]

const DEFAULT = "// hover any stage to see what we operate at that layer"

export function StackPipeline() {
  const [callout, setCallout] = useState(DEFAULT)
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="pipeline" data-reveal>
      <div className="pipeline-head">
        <span>{DEFAULT}</span>
        <span>● STATUS · OPERATIONAL</span>
      </div>
      <div className="pipeline-grid">
        {STAGES.map((s, i) => (
          <div
            key={s.name}
            className={`pipeline-stage${active === i ? " active" : ""}`}
            onMouseEnter={() => {
              setActive(i)
              setCallout(s.callout)
            }}
            onMouseLeave={() => {
              setActive(null)
              setCallout(DEFAULT)
            }}
          >
            <div className="stage-no">{s.no}</div>
            <div className="stage-name">{s.name}</div>
            <div className="stage-sub">{s.sub}</div>
            <div className="stage-items">
              {s.items.map((it) => (
                <span key={it}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="pipeline-callout">{callout}</div>
    </div>
  )
}
