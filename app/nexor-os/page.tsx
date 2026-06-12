 export default function NexorOS() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1220",
        color: "white",
        padding: "120px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#d4af37",
            letterSpacing: 3,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          TECNOLOGÍA NEXOR GROUP
        </div>

        <h1 style={{ fontSize: 64, marginBottom: 20 }}>NEXOR OS</h1>

        <p
          style={{
            maxWidth: 850,
            margin: "0 auto 60px",
            color: "rgba(255,255,255,0.70)",
            fontSize: 20,
            lineHeight: 1.8,
          }}
        >
          Plataforma tecnológica de Nexor Group diseñada para centralizar
          información, optimizar procesos y mejorar la gestión de talento,
          proyectos y operaciones empresariales.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 25,
          }}
        >
          {[
            {
              title: "Nexor OS Talent",
              text: "Gestión de candidatos, base de talento y seguimiento de procesos de selección.",
            },
            {
              title: "Nexor OS CRM",
              text: "Gestión comercial, oportunidades, clientes y seguimiento de contactos.",
            },
            {
              title: "Nexor OS Projects",
              text: "Organización documental, contratos, proyectos y procesos administrativos.",
            },
            {
              title: "Nexor OS Analytics",
              text: "Indicadores, reportes y control de gestión para mejores decisiones.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: 35,
                borderRadius: 22,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(212,175,55,0.18)",
              }}
            >
              <h3 style={{ color: "#d4af37", fontSize: 24 }}>
                {item.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.70)", lineHeight: 1.7 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}