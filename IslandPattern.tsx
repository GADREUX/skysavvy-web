"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Sidebar"
import { IslandPattern } from "@/components/IslandPattern"

const IMAGES: Record<string, string> = {
  TYO: "linear-gradient(135deg, #f4c2a9, #d97e58 60%, #5e2b1e)",
  LIS: "linear-gradient(135deg, #f6e7b4, #e7a865 50%, #8e4a26)",
  REK: "linear-gradient(180deg, #b3d4d8, #486a7e 70%, #1a2b3a)",
  CPT: "linear-gradient(135deg, #d6c79a, #b07a45 50%, #2f4e3a)",
  BCN: "linear-gradient(180deg, #fde2b8, #d57f5a 60%, #5b3022)",
  KIX: "linear-gradient(135deg, #f3c4d2, #c66e87 60%, #4d2335)",
  AKL: "linear-gradient(180deg, #c1deb1, #5d8a4d 60%, #1f3a26)",
  MRU: "linear-gradient(135deg, #cfeae5, #4ca09c 60%, #1d4d4a)",
  ATH: "linear-gradient(180deg, #e9e3d4, #b8c5d4 50%, #2a4561)",
  YYZ: "linear-gradient(135deg, #cdd9e8, #6e8aa7 60%, #2a3c52)",
  GIG: "linear-gradient(135deg, #ffd49d, #d56b48 60%, #3e1d12)",
  HND: "linear-gradient(180deg, #efc6c1, #b75e58 60%, #3d1815)",
}

const DESTINATIONS = [
  { city: "Tokyo",          code: "TYO", country: "JP", region: "Asia",     price: 4180, trend: -22, trending: true },
  { city: "Lisbon",         code: "LIS", country: "PT", region: "Europe",   price: 3260, trend: -8,  trending: false },
  { city: "Reykjavík",      code: "REK", country: "IS", region: "Europe",   price: 4920, trend: -12, trending: true },
  { city: "Cape Town",      code: "CPT", country: "ZA", region: "Africa",   price: 5840, trend: -4,  trending: false },
  { city: "Barcelona",      code: "BCN", country: "ES", region: "Europe",   price: 3480, trend: -15, trending: true },
  { city: "Osaka",          code: "KIX", country: "JP", region: "Asia",     price: 4060, trend: -18, trending: false },
  { city: "Auckland",       code: "AKL", country: "NZ", region: "Oceania",  price: 7420, trend: 0,   trending: false },
  { city: "Mauritius",      code: "MRU", country: "MU", region: "Africa",   price: 6280, trend: -6,  trending: false },
  { city: "Athens",         code: "ATH", country: "GR", region: "Europe",   price: 3640, trend: -10, trending: false },
  { city: "Toronto",        code: "YYZ", country: "CA", region: "Americas", price: 3920, trend: -3,  trending: false },
  { city: "Rio de Janeiro", code: "GIG", country: "BR", region: "Americas", price: 1180, trend: -5,  trending: false },
  { city: "Tokyo · Haneda", code: "HND", country: "JP", region: "Asia",     price: 4240, trend: -16, trending: true },
]

const REGIONS = ["All", "Europe", "Americas", "Asia", "Africa", "Oceania"]

export default function DiscoveryPage() {
  const [region, setRegion] = useState("All")
  const [budget, setBudget] = useState(6000)
  const [trendingOnly, setTrendingOnly] = useState(false)

  const filtered = DESTINATIONS.filter(d =>
    (region === "All" || d.region === region) &&
    d.price <= budget &&
    (!trendingOnly || d.trending)
  )

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar active="discovery" />
      <main style={{ flex: 1 }}>
        <header style={{ padding: "26px 32px 18px", borderBottom: "1px solid var(--line)" }}>
          <div className="label" style={{ color: "var(--accent)" }}>Discovery</div>
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginTop: 6 }}>
            <div>
              <h1 style={{ fontSize: 36 }}>Where shall we go this season?</h1>
              <p style={{ marginTop: 6, fontStyle: "italic" }}>
                Curated destinations from your home airport, trending among Pro travellers.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn--ghost">From: GRU</button>
              <button>Surprise me</button>
            </div>
          </div>
        </header>

        <div style={{ padding: "22px 32px", display: "grid", gridTemplateColumns: "260px 1fr", gap: 24 }}>
          {/* Filters sidebar */}
          <aside style={{ display: "grid", gap: 14, alignContent: "start", position: "sticky", top: 22 }}>
            {/* Budget slider */}
            <div className="card" style={{ padding: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div className="label">Budget cap</div>
                <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 18 }}>
                  BRL {budget.toLocaleString()}
                </div>
              </div>
              <input type="range" min={500} max={9000} step={100} value={budget}
                onChange={(e) => setBudget(+e.target.value)}
                style={{ width: "100%", marginTop: 10, accentColor: "var(--accent)", minHeight: "auto" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--muted-2)", fontFamily: "var(--font-mono)", marginTop: 4 }}>
                <span>BRL 500</span><span>BRL 9,000</span>
              </div>
            </div>

            {/* Region filter */}
            <div className="card" style={{ padding: 18, display: "grid", gap: 10 }}>
              <div className="label">Region</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {REGIONS.map(r => (
                  <button key={r} onClick={() => setRegion(r)} style={{
                    background: region === r ? "var(--accent)" : "transparent",
                    color: region === r ? "#fff" : "var(--ink-2)",
                    border: `1px solid ${region === r ? "var(--accent)" : "var(--line)"}`,
                    fontSize: 12, padding: "6px 12px", borderRadius: 999, minHeight: "auto",
                  }}>
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Trending toggle */}
            <div className="card" style={{ padding: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 16 }}>Trending only</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>Among Pro users this week</div>
              </div>
              <button onClick={() => setTrendingOnly(!trendingOnly)} style={{
                width: 40, height: 22, padding: 2, borderRadius: 999, minHeight: "auto",
                background: trendingOnly ? "var(--accent)" : "var(--line)", border: 0,
                position: "relative",
              }}>
                <span style={{
                  display: "block", width: 18, height: 18, borderRadius: "50%", background: "#fff",
                  transform: trendingOnly ? "translateX(18px)" : "translateX(0)",
                  transition: "transform var(--t-fast) var(--ease)",
                }} />
              </button>
            </div>

            {/* Passport panel */}
            <div style={{ position: "relative", borderRadius: 8, overflow: "hidden", padding: 18, color: "#fff", minHeight: 180 }}>
              <IslandPattern scale={300} />
              <div style={{ position: "relative" }}>
                <div className="label" style={{ color: "rgba(255,255,255,.85)" }}>Passport · BR</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 26, marginTop: 8, lineHeight: 1.1 }}>
                  27 visa-free destinations under your budget right now.
                </div>
                <a href="#" style={{
                  color: "#fff", display: "inline-block", marginTop: 10,
                  fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  borderBottom: "1px solid rgba(255,255,255,.5)",
                }}>
                  Show all →
                </a>
              </div>
            </div>
          </aside>

          {/* Destination grid */}
          <section style={{ display: "grid", gap: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontStyle: "italic", color: "var(--muted)" }}>
                {filtered.length} destination{filtered.length === 1 ? "" : "s"} · sorted by recent drop
              </div>
              <div style={{ display: "flex", gap: 8, fontSize: 12 }}>
                <span className="chip chip--accent">Recent drop</span>
                <span className="chip">Distance</span>
                <span className="chip">Alphabetical</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
              {filtered.map(d => (
                <div key={d.code} className="card" style={{
                  padding: 0, overflow: "hidden", cursor: "pointer",
                  transition: "transform var(--t-mid) var(--ease), box-shadow var(--t-mid) var(--ease)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(26,39,30,.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
                  <div style={{ position: "relative", height: 160, background: IMAGES[d.code] || "#888", backgroundSize: "cover" }}>
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,.35))" }} />
                    <div style={{ position: "absolute", top: 10, left: 10, display: "flex", gap: 6 }}>
                      <span style={{ background: "rgba(255,255,255,.95)", border: "1px solid var(--line)", padding: "3px 8px", borderRadius: 999, fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11 }}>
                        {d.code}
                      </span>
                      <span className="label" style={{ background: "rgba(255,255,255,.95)", border: "1px solid var(--line)", padding: "3px 8px", borderRadius: 999, fontSize: 10 }}>
                        {d.country}
                      </span>
                    </div>
                    {d.trending && (
                      <span style={{ position: "absolute", top: 10, right: 10, background: "var(--accent)", color: "#fff", padding: "3px 8px", borderRadius: 999, fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Trending
                      </span>
                    )}
                    <div style={{ position: "absolute", bottom: 10, left: 12, color: "#fff", fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1, textShadow: "0 2px 8px rgba(0,0,0,.4)" }}>
                      {d.city}
                    </div>
                  </div>
                  <div style={{ padding: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 16 }}>
                        BRL {d.price.toLocaleString()}
                      </div>
                      <div style={{ fontSize: 12, fontWeight: 700, fontFamily: "var(--font-sans)", color: d.trend < 0 ? "var(--good)" : "var(--muted)" }}>
                        {d.trend < 0 ? `${d.trend}% vs typical` : "typical fares now"}
                      </div>
                    </div>
                    <div style={{ fontSize: 11, color: "var(--muted)", textAlign: "right", fontStyle: "italic" }}>
                      {d.region}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="card" style={{ padding: 32, textAlign: "center", color: "var(--muted)", fontStyle: "italic" }}>
                Nothing under your budget for this region. Try widening the cap.
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  )
}
