 export default function Home() {
  const whatsapp =
    "https://wa.me/5492994737731?text=Hola%20Nexor%20Group,%20quiero%20solicitar%20informacion%20sobre%20sus%20servicios.";

  return (
    <div style={{ background: "#05070d", color: "white", minHeight: "100vh" }}>
      {/* HERO */}
       <section style={{ padding: "140px 40px 90px" }}>
  <div style={{
    maxWidth: 1300,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 50,
    alignItems: "center"
  }}>
    <div>
      <h1 style={{ fontSize: 54, lineHeight: 1.1, margin: 0 }}>
        Impulsamos el crecimiento de empresas a través de la gestión, la estrategia y la transformación operativa
      </h1>

      <p style={{
        maxWidth: 720,
        margin: "24px 0 0",
        color: "rgba(255,255,255,0.70)",
        fontSize: 19,
        lineHeight: 1.7
      }}>
        Acompañamos a empresas de construcción, transporte, petróleo, minería y servicios
        a ordenar procesos, fortalecer su administración, optimizar operaciones y convertir
        la gestión en resultados concretos.
      </p>

      <div style={{ marginTop: 35, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <a
          href="https://wa.me/5492994737731?text=Hola%20Nexor%20Group,%20quiero%20solicitar%20un%20Diagnostico%20Empresarial%20Integral."
          target="_blank"
          rel="noopener noreferrer"
          style={buttonPrimary}
        >
          Solicitar Diagnóstico
        </a>

        <a href={whatsapp} target="_blank" rel="noopener noreferrer" style={buttonSecondary}>
          Contactar por WhatsApp
        </a>
      </div>
    </div>

    <div style={{
      borderRadius: 24,
      overflow: "hidden",
      border: "1px solid rgba(212,175,55,0.35)",
      boxShadow: "0 25px 80px rgba(0,0,0,0.45)"
    }}>
      <img
        src="/images/hero-nexor-argentina.png"
        alt="Nexor Group Argentina"
        style={{
          width: "100%",
          height: "auto",
          display: "block"
        }}
      />
    </div>
  </div>
</section>

      {/* SERVICIOS */}
      <section style={{ padding: "90px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 15, fontSize: 36 }}>
          Soluciones Nexor Group
        </h2>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.65)", marginBottom: 45 }}>
          Servicios diseñados para empresas que necesitan ordenar su gestión,
          optimizar procesos y crecer con mayor control.
        </p>

        <div style={grid}>
          {[
            {
              t: "Diagnóstico Empresarial Integral",
              d: "Evaluamos administración, operaciones, finanzas, ventas y digitalización para detectar oportunidades de mejora y definir un plan de acción profesional."
            },
            {
              t: "Optimización Administrativa",
              d: "Mejoramos organización documental, presupuestos, indicadores, seguimiento de tareas y control interno para reducir errores y ganar eficiencia."
            },
            {
              t: "Gestión Operativa y Logística",
              d: "Analizamos procesos, recursos, tiempos operativos y coordinación logística para mejorar productividad, planificación y ejecución."
            },
            {
              t: "Transformación Digital Empresarial",
              d: "Implementamos herramientas simples y efectivas para mejorar el control, la comunicación, la automatización y la toma de decisiones."
            }
          ].map((s) => (
            <div key={s.t} style={card}>
              <h3>{s.t}</h3>
              <p style={textMuted}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METODO */}
      <section style={{
        padding: "100px 40px",
        textAlign: "center",
        background: "rgba(255,255,255,0.02)"
      }}>
        <h2 style={{ fontSize: 36 }}>Cómo trabajamos</h2>

        <p style={{
          maxWidth: 850,
          margin: "20px auto 45px",
          color: "rgba(255,255,255,0.65)",
          lineHeight: 1.7
        }}>
          Aplicamos una metodología clara para transformar problemas de gestión
          en oportunidades concretas de mejora.
        </p>

        <div style={grid}>
          {[
            { n: "01", t: "Diagnóstico", d: "Relevamos la situación actual de la empresa." },
            { n: "02", t: "Evaluación", d: "Identificamos fortalezas, riesgos y oportunidades." },
            { n: "03", t: "Estrategia", d: "Diseñamos un plan de acción priorizado." },
            { n: "04", t: "Implementación", d: "Acompañamos la ejecución de las mejoras." },
            { n: "05", t: "Resultados", d: "Medimos avances y optimizamos continuamente." }
          ].map((m) => (
            <div key={m.n} style={card}>
              <p style={{ color: "#d4af37", fontSize: 28, fontWeight: "bold", margin: 0 }}>
                {m.n}
              </p>
              <h3>{m.t}</h3>
              <p style={textMuted}>{m.d}</p>
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
        <h2 style={{ fontSize: 38 }}>Diagnóstico Empresarial Integral Nexor</h2>

        <p style={{
          maxWidth: 900,
          margin: "20px auto",
          color: "rgba(255,255,255,0.70)",
          lineHeight: 1.7,
          fontSize: 18
        }}>
          Una herramienta profesional diseñada para conocer el estado real de la organización,
          detectar problemas ocultos y definir acciones concretas de mejora.
        </p>

        <div style={grid}>
          {[
            "Relevamiento administrativo",
            "Análisis operativo",
            "Evaluación comercial",
            "Diagnóstico digital",
            "Informe ejecutivo PDF",
            "Plan de acción de 90 días"
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

          <a
            href="https://wa.me/5492994737731?text=Hola%20Nexor%20Group,%20quiero%20solicitar%20un%20Diagnostico%20Empresarial%20Integral."
            target="_blank"
            rel="noopener noreferrer"
            style={buttonPrimary}
          >
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

      {/* CIERRE */}
      <section style={{ textAlign: "center", padding: "120px 20px" }}>
        <h2 style={{ fontSize: 38 }}>Argentina tiene talento. Argentina tiene potencial.</h2>

        <p style={{
          maxWidth: 850,
          margin: "20px auto",
          color: "rgba(255,255,255,0.70)",
          lineHeight: 1.7,
          fontSize: 18
        }}>
          Nosotros aportamos gestión para transformarlo en resultados.
        </p>

        <div style={{ marginTop: 30 }}>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" style={buttonPrimary}>
            Contactar por WhatsApp
          </a>
        </div>

        <p style={{ marginTop: 35, color: "rgba(255,255,255,0.60)" }}>
          josecavallari@nexorgroup.com.ar
          <br />
          www.nexorgroup.com.ar
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