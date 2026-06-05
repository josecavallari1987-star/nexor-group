 export default function Home() {
   const whatsapp = "https://wa.me/542994737731"

  return (
    <div style={{ background: "#05070d", color: "white", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "140px 20px 80px" }}>
        <h1 style={{ fontSize: 56, maxWidth: 1100, margin: "0 auto" }}>
          Impulsamos el crecimiento de empresas mediante gestión, administración y transformación digital
        </h1>

        <p style={{
          maxWidth: 950,
          margin: "24px auto",
          color: "rgba(255,255,255,0.70)",
          fontSize: 19,
          lineHeight: 1.7
        }}>
          Ayudamos a empresas de construcción, transporte, petróleo, minería e industria
          a optimizar procesos, reducir costos, mejorar la productividad y alcanzar mejores resultados.
        </p>

        <div style={{ marginTop: 35, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#diagnostico" style={buttonPrimary}>
            Solicitar Diagnóstico Empresarial
          </a>

          <a href={whatsapp} target="_blank" style={buttonSecondary}>
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: "90px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 15, fontSize: 36 }}>
          Servicios
        </h2>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.65)", marginBottom: 45 }}>
          Soluciones prácticas para empresas que necesitan orden, control y crecimiento.
        </p>

        <div style={grid}>
          {[
            {
              t: "Diagnóstico Empresarial Integral",
              d: "Analizamos la situación administrativa, comercial y digital de su empresa para detectar oportunidades de mejora y elaborar un plan de acción concreto."
            },
            {
              t: "Consultoría Empresarial",
              d: "Acompañamos a organizaciones en la optimización de procesos, control de gestión, administración y desarrollo operativo."
            },
            {
              t: "Nexor Academy",
              d: "Capacitación profesional orientada a empleo, industria, administración, logística, tecnología y desarrollo empresarial."
            }
          ].map((s) => (
            <div key={s.t} style={card}>
              <h3>{s.t}</h3>
              <p style={textMuted}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIAGNOSTICO */}
      <section id="diagnostico" style={{
        padding: "110px 40px",
        textAlign: "center",
        background: "rgba(255,255,255,0.03)"
      }}>
        <h2 style={{ fontSize: 38 }}>Diagnóstico Empresarial Integral</h2>

        <p style={{
          maxWidth: 900,
          margin: "20px auto",
          color: "rgba(255,255,255,0.70)",
          lineHeight: 1.7,
          fontSize: 18
        }}>
          Nuestro diagnóstico permite conocer el estado actual de la empresa,
          identificar problemas operativos y definir acciones concretas para mejorar
          administración, procesos, ventas y presencia digital.
        </p>

        <div style={grid}>
          {[
            "Relevamiento administrativo",
            "Diagnóstico comercial",
            "Diagnóstico digital",
            "Informe ejecutivo PDF",
            "Plan de acción de 90 días",
            "Reunión de devolución"
          ].map((item) => (
            <div key={item} style={smallCard}>
              {item}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 45,
          padding: 28,
          border: "1px solid rgba(212,175,55,0.45)",
          borderRadius: 18,
          maxWidth: 760,
          marginLeft: "auto",
          marginRight: "auto",
          background: "rgba(212,175,55,0.08)"
        }}>
          <h3 style={{ color: "#d4af37", fontSize: 26 }}>Oferta de lanzamiento</h3>
          <p style={textMuted}>
            Diagnóstico Empresarial Integral sin costo para las primeras empresas participantes.
          </p>
          <a href={whatsapp} target="_blank" style={buttonPrimary}>
            Solicitar ahora
          </a>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section style={{ padding: "100px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: 36 }}>¿Por qué elegir Nexor Group?</h2>

        <div style={grid}>
          {[
            "Diagnóstico profesional",
            "Soluciones prácticas",
            "Enfoque en resultados",
            "Acompañamiento personalizado"
          ].map((item) => (
            <div key={item} style={card}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIAS */}
      <section style={{
        padding: "90px 40px",
        textAlign: "center",
        background: "rgba(255,255,255,0.02)"
      }}>
        <h2>Industrias</h2>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 18 }}>
          Petróleo y Gas • Minería • Transporte • Construcción • Servicios Industriales
        </p>
      </section>

      {/* CONTACTO */}
      <section style={{ textAlign: "center", padding: "120px 20px" }}>
        <h2 style={{ fontSize: 38 }}>Hablemos de su empresa</h2>

        <p style={textMuted}>
          Solicite una reunión inicial y conozca cómo Nexor Group puede ayudar a mejorar la gestión de su organización.
        </p>

        <div style={{ marginTop: 30 }}>
          <a href={whatsapp} target="_blank" style={buttonPrimary}>
             const whatsapp = "https://wa.me/542994737731"
          </a>
        </div>

        <p style={{ marginTop: 35, color: "rgba(255,255,255,0.60)" }}>
          josecavallari@nexorgroup.com.ar
          <br />
          nexorgroup.com.ar
          <br />
          San Rafael, Mendoza, Argentina
        </p>
      </section>

    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: 20,
  maxWidth: 1100,
  margin: "0 auto"
};

const card = {
  padding: 26,
  background: "rgba(255,255,255,0.04)",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.08)"
};

const smallCard = {
  padding: 20,
  background: "rgba(255,255,255,0.04)",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.08)",
  fontWeight: "bold"
};

const textMuted = {
  color: "rgba(255,255,255,0.68)",
  lineHeight: 1.7
};

const buttonPrimary = {
  display: "inline-block",
  padding: "15px 28px",
  background: "white",
  color: "#0b1220",
  borderRadius: 12,
  fontWeight: "bold",
  textDecoration: "none"
};

const buttonSecondary = {
  display: "inline-block",
  padding: "15px 28px",
  background: "transparent",
  color: "white",
  borderRadius: 12,
  fontWeight: "bold",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.35)"
};