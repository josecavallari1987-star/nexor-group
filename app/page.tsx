 export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "120px 20px"
      }}>
        <h1 style={{ fontSize: 56, marginBottom: 20 }}>
          Soluciones administrativas y logísticas para la industria
        </h1>

        <p style={{ maxWidth: 750, margin: "0 auto", color: "rgba(255,255,255,0.7)" }}>
          En Grupo NEXOR brindamos soporte operativo, administrativo y logístico a empresas
          del sector petrolero, minero, transporte y construcción.
        </p>
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
          
          <div style={{
            padding: 20,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <h3>Logística operativa</h3>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              Coordinación de transporte y operaciones industriales.
            </p>
          </div>

          <div style={{
            padding: 20,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <h3>Soporte administrativo</h3>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              Gestión documental y asistencia empresarial.
            </p>
          </div>

          <div style={{
            padding: 20,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.1)"
          }}>
            <h3>Gestión industrial</h3>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              Apoyo a sectores petróleo, minería y construcción.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <h2>¿Necesitas soporte operativo?</h2>
        <p style={{ color: "rgba(255,255,255,0.7)" }}>
          Hablemos y optimicemos tus operaciones.
        </p>
      </section>

    </div>
  );
}