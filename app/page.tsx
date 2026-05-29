 "use client";

export default function Home({ lang }: { lang: "es" | "en" }) {

  return (
    <div>

      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "140px 20px 60px"
      }}>
        <h1 style={{ fontSize: 56 }}>
          {lang === "es"
            ? "Optimización operativa para industrias críticas"
            : "Operational optimization for critical industries"}
        </h1>

        <p style={{
          maxWidth: 950,
          margin: "20px auto",
          color: "rgba(255,255,255,0.65)",
          fontSize: 18,
          lineHeight: 1.7
        }}>
          {lang === "es"
            ? "NEXOR es una firma de consultoría operativa enfocada en mejorar el rendimiento de organizaciones en minería, petróleo, transporte y construcción mediante integración operativa y optimización de procesos."
            : "NEXOR is an operational advisory firm focused on improving organizational performance in mining, oil & gas, transportation and construction through operational integration and process optimization."}
        </p>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: "90px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          {lang === "es" ? "Qué hacemos" : "What we do"}
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 20
        }}>
          {[
            lang === "es"
              ? "Diseño de sistemas operativos"
              : "Operational system design",

            lang === "es"
              ? "Optimización logística"
              : "Logistics optimization",

            lang === "es"
              ? "Transformación administrativa"
              : "Administrative transformation",

            lang === "es"
              ? "Integración operativa en campo"
              : "Field operational integration"
          ].map((t) => (
            <div key={t} style={{
              padding: 22,
              background: "rgba(255,255,255,0.04)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)"
            }}>
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section style={{
        padding: "110px 40px",
        textAlign: "center",
        background: "rgba(255,255,255,0.02)"
      }}>
        <h2>{lang === "es" ? "Cómo trabajamos" : "Our approach"}</h2>

        <p style={{
          maxWidth: 900,
          margin: "20px auto",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7
        }}>
          {lang === "es"
            ? "Nos integramos dentro de las operaciones del cliente, analizamos flujos de trabajo, rediseñamos procesos y apoyamos la ejecución en campo."
            : "We integrate into client operations, analyze workflows, redesign processes and support execution in the field."}
        </p>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <h2>{lang === "es" ? "Industrias" : "Industries"}</h2>

        <p style={{ color: "rgba(255,255,255,0.6)" }}>
          Oil & Gas • Mining • Construction • Transportation • Infrastructure
        </p>
      </section>

      {/* TRUST */}
      <section style={{ padding: "90px 40px", textAlign: "center" }}>
        <h2>
          {lang === "es"
            ? "Diseñado para operaciones críticas"
            : "Built for critical operations"}
        </h2>

        <p style={{ color: "rgba(255,255,255,0.6)" }}>
          Reliability • Precision • Execution • Control
        </p>
      </section>

      {/* CTA */}
      <section style={{
        textAlign: "center",
        padding: "160px 20px"
      }}>
        <h2>
          {lang === "es"
            ? "Hablemos de tu operación"
            : "Let’s discuss your operations"}
        </h2>

        <p style={{ color: "rgba(255,255,255,0.65)" }}>
          {lang === "es"
            ? "Contacto ejecutivo directo con NEXOR"
            : "Direct executive contact with NEXOR"}
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
          {lang === "es" ? "Contactar" : "Contact"}
        </a>
      </section>

    </div>
  );
}