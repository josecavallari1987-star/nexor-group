 export default function Home() {
  return (
    <div style={{ color: "white" }}>

      {/* HERO EJECUTIVO */}
      <section style={{
        textAlign: "center",
        padding: "140px 20px"
      }}>
        <h1 style={{ fontSize: 54, marginBottom: 20 }}>
          Socio estratégico en operaciones industriales críticas
        </h1>

        <p style={{ maxWidth: 850, margin: "0 auto", color: "rgba(255,255,255,0.7)", fontSize: 18 }}>
          En Grupo NEXOR actuamos como socio operativo de empresas del sector petrolero,
          minero, transporte y construcción, resolviendo gestión administrativa,
          logística y coordinación operativa con velocidad, precisión y confiabilidad.
        </p>
      </section>

      {/* SECTORES */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <h2>Operamos en sectores críticos</h2>

        <p style={{ color: "rgba(255,255,255,0.6)" }}>
          Minería • Petróleo • Transporte • Construcción
        </p>
      </section>

      {/* PROBLEMAS QUE RESOLVEMOS */}
      <section style={{ padding: "80px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Problemas que resolvemos
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 20
        }}>

          {[
            "Falta de coordinación logística en operaciones críticas",
            "Sobrecarga administrativa en campo y oficinas",
            "Retrasos operativos por mala gestión documental",
            "Desconexión entre áreas operativas y administrativas"
          ].map((p) => (
            <div key={p} style={{
              padding: 20,
              background: "rgba(255,255,255,0.05)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
              <p>{p}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section style={{
        padding: "80px 40px",
        textAlign: "center",
        background: "rgba(255,255,255,0.02)"
      }}>
        <h2>Modelo de trabajo como socio operativo</h2>

        <p style={{ maxWidth: 800, margin: "20px auto", color: "rgba(255,255,255,0.7)" }}>
          No somos un proveedor externo. Nos integramos a la operación del cliente
          como un equipo extendido, reduciendo fricción, tiempos de respuesta
          y costos operativos.
        </p>
      </section>

      {/* CTA */}
      <section style={{
        textAlign: "center",
        padding: "120px 20px"
      }}>
        <h2>¿Necesitas un socio operativo confiable?</h2>

        <p style={{ color: "rgba(255,255,255,0.7)" }}>
          Hablemos sobre cómo optimizar tus operaciones.
        </p>

        <a href="#" style={{
          display: "inline-block",
          marginTop: 20,
          padding: "14px 24px",
          background: "linear-gradient(90deg,#2563eb,#7c3aed)",
          borderRadius: 12,
          textDecoration: "none",
          color: "white",
          fontWeight: "bold"
        }}>
          Contactar Dirección
        </a>
      </section>

    </div>
  );
}