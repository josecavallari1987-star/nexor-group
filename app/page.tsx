 export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "120px 20px 60px"
      }}>
        <h1 style={{ fontSize: 54, marginBottom: 20 }}>
          Operational excellence for complex industries
        </h1>

        <p style={{
          maxWidth: 900,
          margin: "0 auto",
          color: "rgba(255,255,255,0.65)",
          fontSize: 18,
          lineHeight: 1.7
        }}>
          NEXOR is a global advisory firm focused on operational performance,
          logistics architecture, and administrative system optimization for
          high-complexity industrial environments.
        </p>
      </section>

      {/* IMPACTO */}
      <section style={{
        padding: "80px 40px",
        textAlign: "center",
        background: "rgba(255,255,255,0.02)"
      }}>
        <h2>Operational focus</h2>

        <p style={{ color: "rgba(255,255,255,0.6)" }}>
          Oil & Gas • Mining • Construction • Transportation • Infrastructure
        </p>
      </section>

      {/* PROBLEMAS */}
      <section style={{ padding: "90px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Structural operational challenges
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 20
        }}>
          {[
            "Operational fragmentation between field and headquarters",
            "Excess administrative load reducing execution speed",
            "Logistical inefficiencies affecting continuity",
            "Lack of integrated operational visibility"
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

      {/* METODOLOGÍA */}
      <section style={{
        padding: "110px 40px",
        textAlign: "center"
      }}>
        <h2>How we operate</h2>

        <p style={{
          maxWidth: 900,
          margin: "20px auto",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7
        }}>
          We integrate directly into client operations, analyzing workflows,
          redesigning processes, and embedding execution capabilities within
          existing organizational structures.
        </p>
      </section>

      {/* CAPACIDADES */}
      <section style={{ padding: "90px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Core capabilities
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 20
        }}>
          {[
            "Operational system design",
            "Logistics coordination optimization",
            "Administrative process engineering",
            "Execution integration in field operations"
          ].map((c) => (
            <div key={c} style={{
              padding: 22,
              background: "rgba(255,255,255,0.04)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)"
            }}>
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        textAlign: "center",
        padding: "140px 20px"
      }}>
        <h2>Engage with NEXOR Global Advisory</h2>

        <p style={{ color: "rgba(255,255,255,0.65)" }}>
          Executive-level operational partnership for industrial transformation.
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