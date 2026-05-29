 export default function Home() {
  return (
    <div>

      {/* HERO EJECUTIVO */}
      <section style={{
        textAlign: "center",
        padding: "140px 20px 60px"
      }}>
        <h1 style={{ fontSize: 56 }}>
          Socio operativo para industrias críticas
        </h1>

        <p style={{
          maxWidth: 950,
          margin: "20px auto",
          color: "rgba(255,255,255,0.65)",
          fontSize: 18,
          lineHeight: 1.7
        }}>
          NEXOR es una firma de consultoría operativa que ayuda a organizaciones
          en sectores industriales complejos a mejorar su eficiencia, reducir fricciones
          operativas y optimizar la ejecución en campo.
        </p>
      </section>

      {/* QUÉ HACEMOS */}
      <section style={{ padding: "90px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Qué hacemos
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 20
        }}>
          {[
            {
              t: "Diseño de sistemas operativos",
              d: "Estructuramos flujos de trabajo eficientes en entornos industriales."
            },
            {
              t: "Optimización logística",
              d: "Mejoramos coordinación, transporte y abastecimiento operativo."
            },
            {
              t: "Gestión administrativa",
              d: "Reducimos carga administrativa y mejoramos control documental."
            },
            {
              t: "Integración en campo",
              d: "Nos integramos directamente en operaciones del cliente."
            }
          ].map((s) => (
            <div key={s.t} style={{
              padding: 22,
              background: "rgba(255,255,255,0.04)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)"
            }}>
              <h3>{s.t}</h3>
              <p style={{ color: "rgba(255,255,255,0.65)" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section style={{
        padding: "110px 40px",
        textAlign: "center",
        background: "rgba(255,255,255,0.02)"
      }}>
        <h2>Nuestra metodología</h2>

        <p style={{
          maxWidth: 950,
          margin: "20px auto",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7
        }}>
          Trabajamos como un socio operativo integrado. Analizamos procesos,
          identificamos ineficiencias, rediseñamos sistemas y acompañamos la ejecución
          en entornos reales de operación.
        </p>
      </section>

      {/* INDUSTRIAS */}
      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <h2>Industrias</h2>

        <p style={{ color: "rgba(255,255,255,0.6)" }}>
          Petróleo y Gas • Minería • Transporte • Construcción • Infraestructura
        </p>
      </section>

      {/* VALOR */}
      <section style={{
        padding: "90px 40px",
        textAlign: "center"
      }}>
        <h2>Enfoque</h2>

        <p style={{ color: "rgba(255,255,255,0.65)", maxWidth: 850, margin: "0 auto" }}>
          No somos un proveedor externo. Nos integramos como un socio operativo,
          enfocado en mejorar el rendimiento real de la operación, no solo en consultoría teórica.
        </p>
      </section>

      {/* CTA FINAL */}
      <section style={{
        textAlign: "center",
        padding: "160px 20px"
      }}>
        <h2>Hablemos de tu operación</h2>

        <p style={{ color: "rgba(255,255,255,0.65)" }}>
          Contacto ejecutivo directo con el equipo NEXOR
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
          Contactar
        </a>
      </section>

    </div>
  );
}