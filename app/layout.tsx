 export default function Home() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      
      {/* HERO */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>
        
        <h1 style={{
          fontSize: "48px",
          marginBottom: "20px",
          color: "white"
        }}>
          Construimos soluciones digitales para el futuro
        </h1>

        <p style={{
          fontSize: "18px",
          color: "rgba(255,255,255,0.7)",
          maxWidth: "700px",
          margin: "0 auto 30px"
        }}>
          En Grupo NEXOR desarrollamos tecnología, automatización y sistemas
          que impulsan empresas hacia la nueva era digital.
        </p>

        <a
          href="#servicios"
          style={{
            background: "linear-gradient(90deg, #2563eb, #7c3aed)",
            color: "white",
            padding: "14px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Ver servicios
        </a>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" style={{ padding: "80px 20px" }}>
        
        <h2 style={{ color: "white", textAlign: "center", marginBottom: "50px" }}>
          Nuestros servicios
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          
          {[
            { title: "Desarrollo Web", desc: "Sitios modernos, rápidos y escalables." },
            { title: "Automatización", desc: "Procesos inteligentes para empresas." },
            { title: "Software a medida", desc: "Soluciones adaptadas a tu negocio." }
          ].map((item) => (
            <div key={item.title} style={{
              background: "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
              <h3 style={{ color: "white" }}>{item.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>
        
        <h2 style={{ color: "white", marginBottom: "20px" }}>
          ¿Listo para transformar tu empresa?
        </h2>

        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "30px" }}>
          Hablemos y construyamos algo grande juntos.
        </p>

        <a
          href="#"
          style={{
            background: "white",
            color: "#0b1220",
            padding: "14px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Contactar
        </a>
      </section>

    </div>
  );
}