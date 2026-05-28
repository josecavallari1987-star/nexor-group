 export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "120px 20px"
      }}>
        <h1 style={{ fontSize: 56, marginBottom: 20 }}>
          Construimos el futuro digital
        </h1>

        <p style={{ maxWidth: 700, margin: "0 auto", color: "rgba(255,255,255,0.7)" }}>
          En Grupo NEXOR desarrollamos software, automatización e infraestructura
          digital para empresas que quieren crecer.
        </p>

        <div style={{ marginTop: 30 }}>
          <a href="#servicios" style={{
            padding: "14px 24px",
            background: "white",
            color: "#0b1220",
            borderRadius: 12,
            textDecoration: "none",
            fontWeight: "bold"
          }}>
            Ver servicios
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" style={{ padding: "80px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Servicios
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 20
        }}>
          
          {[
            { t: "Desarrollo Web", d: "Sitios modernos y escalables." },
            { t: "Automatización", d: "Procesos inteligentes para empresas." },
            { t: "Software a medida", d: "Soluciones personalizadas." }
          ].map((s) => (
            <div key={s.t} style={{
              padding: 20,
              background: "rgba(255,255,255,0.05)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
              <h3>{s.t}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <h2>¿Listo para escalar tu empresa?</h2>
        <p style={{ color: "rgba(255,255,255,0.7)" }}>
          Conversemos y construyamos algo grande.
        </p>
      </section>

    </div>
  );
}