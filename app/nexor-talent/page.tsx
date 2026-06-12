export default function NexorTalent() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#05070d",
        color: "white",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "120px 40px",
          textAlign: "center",
          background:
            "radial-gradient(circle at top, rgba(212,175,55,0.12), transparent 35%), #05070d",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              color: "#d4af37",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Reclutamiento y Selección
          </div>

          <h1
            style={{
              fontSize: 64,
              marginBottom: 20,
            }}
          >
            NEXOR TALENT
          </h1>

          <p
            style={{
              maxWidth: 850,
              margin: "0 auto",
              fontSize: 22,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Conectamos empresas con el talento que necesitan para impulsar
            proyectos en petróleo, minería, construcción, transporte e industria.
          </p>
        </div>
      </section>

      {/* SECTORES */}
      <section style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: 42,
              marginBottom: 60,
            }}
          >
            Sectores que atendemos
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 25,
            }}
          >
            {[
              "Petróleo y Gas",
              "Minería",
              "Construcción",
              "Transporte y Logística",
            ].map((sector) => (
              <div
                key={sector}
                style={{
                  padding: 35,
                  borderRadius: 22,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(212,175,55,0.18)",
                  textAlign: "center",
                }}
              >
                <h3 style={{ color: "#d4af37" }}>{sector}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section
        style={{
          padding: "100px 40px",
          background: "#0b1220",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: 42,
              marginBottom: 60,
            }}
          >
            Nuestro Proceso
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 25,
            }}
          >
            {[
              "Relevamiento",
              "Búsqueda",
              "Evaluación",
              "Presentación",
              "Seguimiento",
            ].map((item, index) => (
              <div
                key={item}
                style={{
                  padding: 30,
                  borderRadius: 20,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(212,175,55,0.18)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: "#d4af37",
                    fontSize: 36,
                    fontWeight: 700,
                    marginBottom: 15,
                  }}
                >
                  0{index + 1}
                </div>

                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BASE DE TALENTO */}
      <section style={{ padding: "100px 40px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: 42,
              marginBottom: 25,
            }}
          >
            Base de Talento Nexor
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8,
              fontSize: 18,
            }}
          >
            Estamos desarrollando una red de profesionales, técnicos y perfiles
            operativos para responder a las necesidades de empresas y proyectos
            estratégicos en Argentina.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        style={{
          padding: "100px 40px",
          background: "#0b1220",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: 42,
            marginBottom: 25,
          }}
        >
          Trabajá con Nosotros
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            marginBottom: 35,
          }}
        >
          Envianos tu CV para formar parte de nuestra Base de Talento.
        </p>

        <a
          href="mailto:nexorgrouprrhh@gmail.com"
          style={{
            display: "inline-block",
            padding: "18px 32px",
            background: "#d4af37",
            color: "#05070d",
            borderRadius: 12,
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Enviar CV
        </a>

        <p
          style={{
            marginTop: 25,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          nexorgrouprrhh@gmail.com
        </p>
      </section>
    </main>
  );
}