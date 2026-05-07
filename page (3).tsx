"use client"

import { Sidebar } from "@/components/Sidebar"
import { IslandPattern } from "@/components/IslandPattern"

const WATCHES = [
  { origin: "GRU", dest: "LHR", city: "São Paulo → London",    date: "Aug 14, 2026", cabin: "Economy",  currency: "BRL", price: 2480, delta: -18, kind: "Low",     trend: [3100,3050,2980,2860,2700,2640,2580,2480] },
  { origin: "GRU", dest: "JFK", city: "São Paulo → New York",  date: "Sep 02, 2026", cabin: "Economy",  currency: "BRL", price: 3120, delta: -2,  kind: "Typical", trend: [3000,3080,3140,3060,3100,3120,3110,3120] },
  { origin: "GIG", dest: "CDG", city: "Rio → Paris",           date: "Oct 21, 2026", cabin: "Premium",  currency: "BRL", price: 4380, delta: 14,  kind: "High",    trend: [3800,3900,4050,4180,4220,4260,4320,4380] },
  { origin: "GRU", dest: "LIS", city: "São Paulo → Lisbon",    date: "Nov 09, 2026", cabin: "Economy",  currency: "BRL", price: 3260, delta: 0,   kind: "Typical", trend: [3300,3280,3260,3240,3270,3260,3260,3260] },
  { origin: "GRU", dest: "MAD", city: "São Paulo → Madrid",    date: "Sep 18, 2026", cabin: "Economy",  currency: "BRL", price: 2140, delta: -22, kind: "Low",     trend: [2800,2700,2580,2440,2360,2280,2200,2140] },
  { origin: "GRU", dest: "FCO", city: "São Paulo → Rome",      date: "Dec 02, 2026", cabin: "Business", currency: "BRL", price: 12480, delta: 8, kind: "High",    trend: [11500,11700,11900,12000,12150,12200,12320,12480] },
]

const ALERTS = [
  { kind: "drop", title: "GRU → LHR dropped 12%",  sub: "BRL 2,820 → 2,480 · Aug 14",    time: "4m ago" },
  { kind: "drop", title: "GRU → MAD now Low",       sub: "BRL 2,140 · 22% below typical", time: "32m ago" },
  { kind: "rise", title: "GIG → CDG rose 4%",       sub: "BRL 4,180 → 4,380 · Oct 21",    time: "2h ago" },
  { kind: "info", title: "New cheap day on Madrid",  sub: "Sep 18 · BRL 2,140",            time: "1d ago" },
]

function MiniSpark({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data), min = Math.min(...data)
  const range = max - min || 1
  const W = 80, H = 24, step = W / (data.length - 1)
  const pts = data.map((v, i) => `${i * step},${H - ((v - min) / range) * (H - 4) - 2}`).join(" ")
  return (
    <svg width={W} height={H} style={{ display: "block" }}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PriceBadge({ kind }: { kind: string }) {
  const styles: Record<string, any> = {
    Low:     { bg: "var(--good-soft)", fg: "var(--good)" },
    Typical: { bg: "#f8faf5", fg: "var(--muted)", border: "1px solid var(--line)" },
    High:    { bg: "var(--warn-soft)", fg: "var(--warn)" },
  }
  const s = styles[kind] || styles.Typical
  return (
    <span style={{
      background: s.bg, color: s.fg, border: s.border || "0",
      fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 10,
      padding: "3px 8px", borderRadius: 999,
      letterSpacing: "0.04em", textTransform: "uppercase",
    }}>
      {kind}
    </span>
  )
}

export default function DashboardPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar active="overview" />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <header style={{
          display: "flex", alignItems: "end", justifyContent: "space-between",
          padding: "26px 32px 18px", borderBottom: "1px solid var(--line)",
        }}>
          <div>
            <div className="label" style={{ color: "var(--accent)" }}>Overview</div>
            <h1 style={{ fontSize: 32, marginTop: 4 }}>Good morning, Karina.</h1>
            <p style={{ marginTop: 6 }}>
              3 routes triggered alerts overnight. Cheapest is GRU → LHR at{" "}
              <b style={{ color: "var(--good)" }}>BRL 2,480</b>.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span className="status-pill"><span className="dot ok" /> Polling · 4m ago</span>
            <button>Add watch</button>
          </div>
        </header>

        <div style={{ padding: "22px 32px", display: "grid", gap: 18 }}>
          {/* Savings hero */}
          <div style={{
            position: "relative", borderRadius: 8, overflow: "hidden",
            height: 220, color: "#fff", boxShadow: "var(--shadow)",
          }}>
            <IslandPattern scale={400} />
            <div style={{
              position: "relative", padding: "26px 32px",
              display: "flex", justifyContent: "space-between", alignItems: "end", height: "100%",
            }}>
              <div>
                <div className="label" style={{ color: "rgba(255,255,255,.85)" }}>Total saved</div>
                <div style={{
                  fontSize: 56, fontWeight: 900, fontFamily: "var(--font-sans)",
                  letterSpacing: "-0.03em", lineHeight: 1, marginTop: 6,
                  textShadow: "0 2px 12px rgba(0,0,0,.3)",
                }}>
                  BRL 18,420
                </div>
                <div style={{ fontSize: 13, marginTop: 8, color: "rgba(255,255,255,.85)" }}>
                  since you joined · across 12 routes
                </div>
              </div>
              <div style={{
                background: "rgba(0,0,0,.3)", backdropFilter: "blur(4px) saturate(1.1)",
                border: "1px solid rgba(255,255,255,.2)", borderRadius: 8, padding: "10px 14px", fontSize: 13,
              }}>
                <div style={{
                  color: "rgba(255,255,255,.7)", fontSize: 11, textTransform: "uppercase",
                  letterSpacing: "0.06em", fontWeight: 800, fontFamily: "var(--font-sans)",
                }}>
                  Best deal this month
                </div>
                <div style={{ marginTop: 4, fontWeight: 800, fontFamily: "var(--font-sans)" }}>
                  GRU → LHR · −18% · BRL 2,480
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            <MetricCard label="Routes monitored" value="12" sub="2 paused · 10 active" />
            <MetricCard label="Triggered today" value="3" sub="2 drops · 1 rise" kind="good" />
            <MetricCard label="Avg savings / trip" value="−14%" sub="vs typical fare" kind="good" />
            <MetricCard label="Polling load" value="4 min" sub="across 8 sources" />
          </div>

          {/* Watch table + alerts */}
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 18 }}>
            {/* Watch table */}
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{
                padding: "14px 18px", borderBottom: "1px solid var(--line)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <h2 style={{ fontSize: 16 }}>Monitored routes</h2>
                <div style={{ display: "flex", gap: 8 }}>
                  <span className="chip">All</span>
                  <span className="chip chip--accent">Triggered · 3</span>
                  <span className="chip">Paused · 2</span>
                </div>
              </div>
              <div style={{
                display: "grid", gridTemplateColumns: "1.4fr 1fr 0.9fr 1fr 1fr 0.8fr",
                padding: "10px 18px", fontSize: 11, color: "var(--muted)",
                textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 800,
                fontFamily: "var(--font-sans)", borderBottom: "1px solid var(--line)",
              }}>
                <div>Route</div><div>Date</div><div>Cabin</div><div>Trend (30d)</div><div>Current</div><div />
              </div>
              {WATCHES.map((r, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "1.4fr 1fr 0.9fr 1fr 1fr 0.8fr",
                  padding: "14px 18px", alignItems: "center",
                  borderBottom: i === WATCHES.length - 1 ? "none" : "1px solid var(--line)",
                }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 15, fontFamily: "var(--font-sans)" }}>
                      {r.origin} → {r.dest}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{r.city}</div>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-2)" }}>{r.date}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-2)" }}>{r.cabin}</div>
                  <div>
                    <MiniSpark
                      data={r.trend}
                      color={r.kind === "Low" ? "var(--good)" : r.kind === "High" ? "var(--warn)" : "var(--muted-2)"}
                    />
                  </div>
                  <div style={{ display: "grid", gap: 3 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 14 }}>
                      {r.currency} {r.price.toLocaleString()}
                    </div>
                    <div style={{
                      fontSize: 11, fontWeight: 700, fontFamily: "var(--font-sans)",
                      color: r.delta < 0 ? "var(--good)" : r.delta > 0 ? "var(--warn)" : "var(--muted)",
                    }}>
                      {r.delta > 0 ? "+" : ""}{r.delta}% vs typical
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <PriceBadge kind={r.kind} />
                  </div>
                </div>
              ))}
            </div>

            {/* Alert feed */}
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{
                padding: "14px 18px", borderBottom: "1px solid var(--line)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <h2 style={{ fontSize: 16 }}>Real-time alerts</h2>
                <a href="/alerts" style={{ fontSize: 12, fontWeight: 700, fontFamily: "var(--font-sans)" }}>See all</a>
              </div>
              {ALERTS.map((a, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 12,
                  padding: "12px 18px", alignItems: "center",
                  borderBottom: i === ALERTS.length - 1 ? "none" : "1px solid var(--line)",
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: a.kind === "drop" ? "var(--good)" : a.kind === "rise" ? "var(--warn)" : "var(--accent)",
                  }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, fontFamily: "var(--font-sans)" }}>{a.title}</div>
                    <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{a.sub}</div>
                  </div>
                  <div style={{ fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)" }}>{a.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function MetricCard({ label, value, sub, kind = "default" }: { label: string; value: string; sub: string; kind?: string }) {
  const accent = kind === "good" ? "var(--good)" : kind === "warn" ? "var(--warn)" : "var(--ink)"
  return (
    <div className="card" style={{ padding: 18, display: "grid", gap: 6 }}>
      <div className="label" style={{ fontSize: 11, color: "var(--muted)" }}>{label}</div>
      <div style={{
        fontSize: 30, fontWeight: 900, fontFamily: "var(--font-sans)",
        letterSpacing: "-0.02em", color: accent,
      }}>{value}</div>
      <div style={{ fontSize: 12, color: "var(--muted)" }}>{sub}</div>
    </div>
  )
}
