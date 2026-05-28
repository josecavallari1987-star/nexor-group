 export default function Home() {
  return (
    <div style={{ color: "white" }}>

      {/* HERO - FIRM POSITIONING */}
      <section style={{
        textAlign: "center",
        padding: "180px 20px"
      }}>
        <h1 style={{ fontSize: 62, marginBottom: 20 }}>
          Operational excellence for critical industries
        </h1>

        <p style={{
          maxWidth: 950,
          margin: "0 auto",
          color: "rgba(255,255,255,0.65)",
          fontSize: 18,
          lineHeight: 1.7
        }}>
          NEXOR is an industrial advisory firm focused on operational performance,
          logistics architecture, and administrative system optimization for
          high-complexity environments such as oil & gas, mining, transportation,
          and infrastructure.
        </p>
      </section>

      {/* PROBLEM FRAMING */}
      <section style={{ padding: "100px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Structural inefficiencies in industrial operations
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 20
        }}>
          {[
            "Operational fragmentation between field and corporate teams",
            "Excess administrative load reducing execution speed",
            "Logistical misalignment affecting production continuity",
            "Lack of integrated operational decision systems"
          ].map((p) => (
            <div key={p} style={{
              padding: 22,
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)"
            }}>
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section style={{
        padding: "110px 40px",
        textAlign: "center",
        background: "rgba(255,255,255,0.02)"
      }}>
        <h2>Our methodology</h2>

        <p style={{
          maxWidth: 900,
          margin: "20px auto",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7
        }}>
          We integrate directly into client operations to analyze, redesign,
          and optimize execution systems. Our approach combines field-level
          operational understanding with structured process engineering.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section style={{ padding: "100px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Core capabilities
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 20
        }}>
          {[
            {
              t: "Operational Design",
              d: "Structuring end-to-end industrial workflows."
            },
            {
              t: "Logistics Optimization",
              d: "Improving supply chain and transport efficiency."
            },
            {
              t: "Administrative Systems",
              d: "Reducing friction in documentation and reporting."
            },
            {
              t: "Execution Integration",
              d: "Embedding teams into client operations."
            }
          ].map((c) => (
            <div key={c.t} style={{
              padding: 22,
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)"
            }}>
              <h3>{c.t}</h3>
              <p style={{ color: "rgba(255,255,255,0.65)" }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <h2>Industries served</h2>

        <p style={{ color: "rgba(255,255,255,0.6)" }}>
          Oil & Gas • Mining • Construction • Transportation • Infrastructure
        </p>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section style={{
        padding: "120px 40px",
        textAlign: "center"
      }}>
        <h2>Engagement model</h2>

        <p style={{
          maxWidth: 900,
          margin: "20px auto",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7
        }}>
          We operate as embedded advisors within client organizations.
          Engagements are structured around direct operational integration,
          ensuring measurable improvements in execution efficiency.
        </p>
      </section>

      {/* CTA EXECUTIVE */}
      <section style={{
        textAlign: "center",
        padding: "160px 20px"
      }}>
        <h2>Engage with NEXOR Advisory</h2>

        <p style={{ color: "rgba(255,255,255,0.65)" }}>
          Executive-level advisory for operational transformation.
        </p>

        <a href="#" style={{
          display: "inline-block",
          marginTop: 25,
          padding: "14px 28px",
          background: "white",
          color: "#0b1220",
          borderRadius: 12,
          fontWeight: "bold",
          textDecoration: "none"
        }}>
          Contact advisory team
        </a>
      </section>

    </div>
  );
}