 export default function Home() {
  return (
    <div style={{ color: "white" }}>

      {/* HERO EXECUTIVE */}
      <section style={{
        textAlign: "center",
        padding: "170px 20px"
      }}>
        <h1 style={{ fontSize: 60, marginBottom: 20 }}>
          Improving operational performance in critical industries
        </h1>

        <p style={{
          maxWidth: 900,
          margin: "0 auto",
          color: "rgba(255,255,255,0.65)",
          fontSize: 18,
          lineHeight: 1.6
        }}>
          NEXOR is an operational strategy partner focused on industrial execution,
          administrative optimization and logistics coordination for organizations
          in high-complexity environments.
        </p>
      </section>

      {/* PROBLEM FRAMING */}
      <section style={{ padding: "90px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Operational challenges in industrial environments
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 20
        }}>
          {[
            "Fragmented operational coordination across departments",
            "Administrative overload reducing field efficiency",
            "Logistical delays impacting production cycles",
            "Lack of integration between field and corporate operations"
          ].map((p) => (
            <div key={p} style={{
              padding: 20,
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)"
            }}>
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
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
            {
              t: "Operational Design",
              d: "Structuring efficient workflows across industrial operations."
            },
            {
              t: "Logistics Coordination",
              d: "Execution of supply chain and transport operations."
            },
            {
              t: "Administrative Systems",
              d: "Optimization of documentation and reporting processes."
            },
            {
              t: "Execution Support",
              d: "On-the-ground operational integration with client teams."
            }
          ].map((c) => (
            <div key={c.t} style={{
              padding: 22,
              background: "rgba(255,255,255,0.04)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)"
            }}>
              <h3>{c.t}</h3>
              <p style={{ color: "rgba(255,255,255,0.65)" }}>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section style={{
        padding: "110px 40px",
        textAlign: "center",
        background: "rgba(255,255,255,0.02)"
      }}>
        <h2>Engagement model</h2>

        <p style={{
          maxWidth: 850,
          margin: "20px auto",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.6
        }}>
          We operate as an embedded partner within client organizations,
          integrating directly into operational structures to improve efficiency,
          reduce friction and enhance execution capacity.
        </p>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: "90px 40px", textAlign: "center" }}>
        <h2>Industries</h2>

        <p style={{ color: "rgba(255,255,255,0.6)" }}>
          Oil & Gas • Mining • Transportation • Construction • Infrastructure
        </p>
      </section>

      {/* CTA */}
      <section style={{
        textAlign: "center",
        padding: "150px 20px"
      }}>
        <h2>Engage with NEXOR</h2>

        <p style={{ color: "rgba(255,255,255,0.65)" }}>
          Executive-level operational partnerships for industrial organizations.
        </p>

        <a href="#" style={{
          marginTop: 25,
          display: "inline-block",
          padding: "14px 26px",
          background: "white",
          color: "#0b1220",
          borderRadius: 12,
          fontWeight: "bold",
          textDecoration: "none"
        }}>
          Contact leadership team
        </a>
      </section>

    </div>
  );
}