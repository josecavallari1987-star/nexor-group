 const menuLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: 500,
};
 export default function Home() {
  const whatsapp =
    "https://wa.me/5492994737731?text=Hola%20Nexor%20Group,%20quiero%20solicitar%20informacion%20sobre%20sus%20servicios.";

  return (
    <div style={{ background: "#05070d", color: "white", minHeight: "100vh" }}>
      {/* HEADER */}
<header
  style={{
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "rgba(5,7,13,0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(212,175,55,0.15)",
  }}
>
  <div
    style={{
      maxWidth: 1400,
      margin: "0 auto",
      padding: "18px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div>
      <h2
        style={{
          margin: 0,
          color: "#d4af37",
          fontSize: 28,
          letterSpacing: 2,
        }}
      >
        NEXOR GROUP
      </h2>

      <div
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.65)",
          letterSpacing: 2,
        }}
      >
        ESTRATEGIA • GESTIÓN • RESULTADOS
      </div>
    </div>

    <nav
      style={{
        display: "flex",
        gap: 30,
        alignItems: "center",
      }}
    >
      <a href="#industrias" style={menuLink}>
        Industrias
      </a>

      <a href="#servicios" style={menuLink}>
        Servicios
      </a>

      <a href="#metodologia" style={menuLink}>
        Metodología
      </a>

      <a href="#diagnostico" style={menuLink}>
        Diagnóstico
      </a>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#d4af37",
          color: "#05070d",
          padding: "12px 22px",
          borderRadius: 10,
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        Solicitar Diagnóstico
      </a>
    </nav>
  </div>
</header>
       
      {/* HERO */}
        <section style={{
  padding: "80px 40px 90px",
  background: "radial-gradient(circle at top right, rgba(212,175,55,0.12), transparent 35%), linear-gradient(135deg, #05070d 0%, #0b1220 60%, #05070d 100%)"
}}>
  <div style={{
    maxWidth: 1400,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 60,
    alignItems: "center"
  }}>
    <div>
      <div style={{
        color: "#d4af37",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: 3,
        marginBottom: 18,
        textTransform: "uppercase"
      }}>
        Consultoría industrial argentina
      </div>

      <h1 style={{
        fontSize: 64,
        lineHeight: 1.05,
        margin: 0,
        letterSpacing: -1.5
      }}>
        NEXOR GROUP
      </h1>

      <h2 style={{
        fontSize: 34,
        lineHeight: 1.15,
        margin: "18px 0 0",
        maxWidth: 760
      }}>
        Estrategia, gestión y resultados para empresas que quieren crecer.
      </h2>

      <p style={{
        maxWidth: 720,
        margin: "26px 0 0",
        color: "rgba(255,255,255,0.72)",
        fontSize: 19,
        lineHeight: 1.7
      }}>
        Impulsamos el desarrollo de empresas de construcción, transporte, petróleo,
        minería y servicios mediante soluciones de gestión, optimización operativa
        y transformación empresarial.
      </p>

      <div style={{
        marginTop: 38,
        display: "flex",
        gap: 16,
        flexWrap: "wrap"
      }}>
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

      <div style={{
        marginTop: 42,
        display: "flex",
        gap: 18,
        flexWrap: "wrap",
        color: "rgba(255,255,255,0.70)",
        fontSize: 14,
        letterSpacing: 1
      }}>
        
      </div>
    </div>

    <div style={{
      borderRadius: 28,
      overflow: "hidden",
      border: "1px solid rgba(212,175,55,0.35)",
      boxShadow: "0 30px 100px rgba(0,0,0,0.55)",
      background: "rgba(255,255,255,0.03)"
    }}>
      <img
      src="/images/hero-nexor-2.1.jpg.png"
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
       <section id="servicios" style={{ padding: "90px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: 15, fontSize: 36 }}>
          Soluciones Nexor Group
        </h2>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.65)", marginBottom: 45 }}>
          Servicios diseñados para empresas que necesitan ordenar su gestión,
          optimizar procesos y crecer con mayor control.
        </p>

         <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 25,
    maxWidth: 1400,
    margin: "0 auto"
  }}
>
  {[
    {
      n: "01",
      t: "Diagnóstico Empresarial Integral",
      d: "Evaluamos administración, operaciones, finanzas, ventas y digitalización para identificar oportunidades y construir un plan de acción profesional."
    },
    {
      n: "02",
      t: "Optimización Administrativa",
      d: "Mejoramos procesos, documentación, indicadores y control interno para aumentar eficiencia y reducir errores."
    },
    {
      n: "03",
      t: "Gestión Operativa y Logística",
      d: "Analizamos recursos, tiempos y coordinación para mejorar productividad y capacidad de ejecución."
    },
    {
      n: "04",
      t: "Transformación Digital Empresarial",
      d: "Implementamos herramientas que facilitan el control, la comunicación y la toma de decisiones."
    }
  ].map((s) => (
    <div
      key={s.t}
      style={{
        padding: 35,
        borderRadius: 20,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(212,175,55,0.15)",
        minHeight: 260
      }}
    >
      <div
        style={{
          color: "#d4af37",
          fontSize: 42,
          fontWeight: 700,
          marginBottom: 20
        }}
      >
        {s.n}
      </div>

      <h3
        style={{
          fontSize: 24,
          marginBottom: 15
        }}
      >
        {s.t}
      </h3>

      <p
        style={{
          color: "rgba(255,255,255,0.70)",
          lineHeight: 1.7
        }}
      >
        {s.d}
      </p>
    </div>
  ))}
</div>
      </section>

      {/* METODO */}
      {/* NEXOR OS */}
<section
  style={{
    padding: "120px 40px",
    background: "#0b1220",
  }}
>
  <div
    style={{
      maxWidth: 1400,
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <div
      style={{
        color: "#d4af37",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: 3,
        marginBottom: 18,
        textTransform: "uppercase",
      }}
    >
      Tecnología Nexor Group
    </div>

    <h2
      style={{
        fontSize: 48,
        marginBottom: 20,
      }}
    >
      NEXOR OS
    </h2>

    <p
      style={{
        maxWidth: 900,
        margin: "0 auto 60px",
        color: "rgba(255,255,255,0.70)",
        fontSize: 18,
        lineHeight: 1.8,
      }}
    >
      Ecosistema digital de Nexor Group diseñado para optimizar la gestión
      de talento, clientes, proyectos y procesos empresariales.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: 25,
      }}
    >
      {[
        {
          titulo: "Nexor Talent",
          texto: "Base de talento, reclutamiento y seguimiento de candidatos."
        },
        {
          titulo: "Nexor CRM",
          texto: "Gestión comercial, oportunidades y relaciones con clientes."
        },
        {
          titulo: "Nexor Projects",
          texto: "Gestión documental y control de proyectos."
        },
        {
          titulo: "Nexor Analytics",
          texto: "Indicadores estratégicos y reportes de gestión."
        }
      ].map((item) => (
        <div
          key={item.titulo}
          style={{
            padding: 35,
            borderRadius: 22,
            background: "rgba(255,255,255,0.035)",
            border: "1px solid rgba(212,175,55,0.16)",
          }}
        >
          <h3
            style={{
              color: "#d4af37",
              fontSize: 24,
              marginBottom: 18,
            }}
          >
            {item.titulo}
          </h3>

          <p
            style={{
              color: "rgba(255,255,255,0.70)",
              lineHeight: 1.7,
            }}
          >
            {item.texto}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
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

         <div
  id="metodologia"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 25,
    maxWidth: 1400,
    margin: "0 auto"
  }}
>
  {[
    { n: "01", t: "Diagnóstico", d: "Relevamos la situación actual de la empresa." },
    { n: "02", t: "Evaluación", d: "Identificamos fortalezas, riesgos y oportunidades." },
    { n: "03", t: "Estrategia", d: "Diseñamos un plan de acción priorizado." },
    { n: "04", t: "Implementación", d: "Acompañamos la ejecución de las mejoras." },
    { n: "05", t: "Resultados", d: "Medimos avances y optimizamos continuamente." }
  ].map((m) => (
    <div
      key={m.n}
      style={{
        padding: 35,
        borderRadius: 20,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(212,175,55,0.15)",
        minHeight: 240
      }}
    >
      <div
        style={{
          color: "#d4af37",
          fontSize: 42,
          fontWeight: 700,
          marginBottom: 15
        }}
      >
        {m.n}
      </div>

      <h3
        style={{
          fontSize: 24,
          marginBottom: 15
        }}
      >
        {m.t}
      </h3>

      <p
        style={{
          color: "rgba(255,255,255,0.70)",
          lineHeight: 1.7
        }}
      >
        {m.d}
      </p>
    </div>
  ))}
</div>
      </section>

       {/* DIAGNOSTICO */}
<section
  id="diagnostico"
  style={{
    padding: "130px 40px",
    background:
      "radial-gradient(circle at center, rgba(212,175,55,0.10), transparent 35%), #05070d",
  }}
>
  <div
    style={{
      maxWidth: 1400,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: 60,
      alignItems: "center",
    }}
  >
    <div>
      <div
        style={{
          color: "#d4af37",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 3,
          marginBottom: 18,
          textTransform: "uppercase",
        }}
      >
        Producto principal Nexor
      </div>

      <h2
        style={{
          fontSize: 48,
          lineHeight: 1.1,
          margin: 0,
        }}
      >
        Diagnóstico Empresarial Integral
      </h2>

      <p
        style={{
          marginTop: 24,
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.7,
          fontSize: 18,
          maxWidth: 650,
        }}
      >
        Una herramienta profesional diseñada para conocer el estado real de la
        organización, detectar oportunidades de mejora y definir acciones
        concretas para optimizar la gestión empresarial.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginTop: 35,
          maxWidth: 700,
        }}
      >
        {[
          "Resumen Ejecutivo",
          "Análisis Administrativo",
          "Análisis Operativo",
          "Evaluación Comercial",
          "Diagnóstico Digital",
          "Plan de Acción 90 Días",
        ].map((item) => (
          <div
            key={item}
            style={{
              padding: 18,
              borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(212,175,55,0.16)",
              color: "rgba(255,255,255,0.85)",
              fontWeight: 600,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 38, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <a
          href="https://wa.me/5492994737731?text=Hola%20Nexor%20Group,%20quiero%20solicitar%20un%20Diagnostico%20Empresarial%20Integral."
          target="_blank"
          rel="noopener noreferrer"
          style={buttonPrimary}
        >
          Solicitar Diagnóstico
        </a>

        <a href={whatsapp} target="_blank" rel="noopener noreferrer" style={buttonSecondary}>
          Agendar Reunión
        </a>
      </div>
    </div>

    <div
      style={{
        padding: 35,
        borderRadius: 28,
        background: "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
        border: "1px solid rgba(212,175,55,0.22)",
        boxShadow: "0 30px 100px rgba(0,0,0,0.55)",
      }}
    >
      <div
        style={{
          borderRadius: 22,
          padding: 35,
          background: "#0b1220",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            color: "#d4af37",
            fontSize: 12,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 18,
            fontWeight: 700,
          }}
        >
          Informe Ejecutivo
        </div>

        <h3
          style={{
            fontSize: 34,
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Información clara para tomar mejores decisiones.
        </h3>

        <p
          style={{
            color: "rgba(255,255,255,0.68)",
            lineHeight: 1.7,
            marginTop: 20,
          }}
        >
          El diagnóstico convierte datos, observaciones y procesos internos en
          un plan de acción ordenado, priorizado y orientado a resultados.
        </p>

        <div
          style={{
            marginTop: 28,
            display: "grid",
            gap: 12,
          }}
        >
          {[
            "Identificación de fortalezas y riesgos",
            "Matriz de prioridades estratégicas",
            "Recomendaciones accionables",
            "Base para mejora continua",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: 14,
                borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
       {/* POR QUE NEXOR */}
<section
  style={{
    padding: "130px 40px",
    background: "#0b1220",
    textAlign: "center",
  }}
>
  <div style={{ maxWidth: 1400, margin: "0 auto" }}>
    <div
      style={{
        color: "#d4af37",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: 3,
        marginBottom: 18,
        textTransform: "uppercase",
      }}
    >
      Por qué elegir Nexor
    </div>

    <h2
      style={{
        fontSize: 48,
        lineHeight: 1.1,
        margin: "0 auto",
        maxWidth: 900,
      }}
    >
      Más que consultoría. Un socio estratégico para el crecimiento.
    </h2>

    <p
      style={{
        maxWidth: 820,
        margin: "24px auto 55px",
        color: "rgba(255,255,255,0.70)",
        lineHeight: 1.7,
        fontSize: 18,
      }}
    >
      Combinamos visión estratégica, gestión profesional y acompañamiento real
      para transformar desafíos empresariales en oportunidades concretas de mejora.
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
          n: "01",
          t: "Visión Estratégica",
          d: "Analizamos cada organización con foco en crecimiento, eficiencia y sostenibilidad."
        },
        {
          n: "02",
          t: "Gestión Profesional",
          d: "Aplicamos metodologías claras, procesos medibles e información para tomar mejores decisiones."
        },
        {
          n: "03",
          t: "Resultados Medibles",
          d: "Orientamos cada recomendación hacia impacto operativo, mejora continua y control de gestión."
        },
        {
          n: "04",
          t: "Acompañamiento Real",
          d: "No entregamos informes para guardar. Trabajamos junto al cliente para impulsar la ejecución."
        }
      ].map((item) => (
        <div
          key={item.t}
          style={{
            textAlign: "left",
            padding: 35,
            borderRadius: 22,
            background: "rgba(255,255,255,0.035)",
            border: "1px solid rgba(212,175,55,0.16)",
            minHeight: 260,
          }}
        >
          <div
            style={{
              color: "#d4af37",
              fontSize: 36,
              fontWeight: 800,
              marginBottom: 18,
            }}
          >
            {item.n}
          </div>

          <h3 style={{ fontSize: 24, marginBottom: 15 }}>{item.t}</h3>

          <p style={{ color: "rgba(255,255,255,0.70)", lineHeight: 1.7 }}>
            {item.d}
          </p>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: 60,
        padding: 32,
        borderRadius: 22,
        background: "rgba(212,175,55,0.08)",
        border: "1px solid rgba(212,175,55,0.25)",
      }}
    >
      <h3 style={{ color: "#d4af37", fontSize: 28, margin: 0 }}>
        No trabajamos para entregar informes.
      </h3>

      <p
        style={{
          color: "rgba(255,255,255,0.78)",
          fontSize: 20,
          lineHeight: 1.6,
          margin: "14px auto 0",
          maxWidth: 900,
        }}
      >
        Trabajamos para generar decisiones, ejecución y resultados.
      </p>
    </div>
  </div>
</section>

      {/* INDUSTRIAS */}
<section
  id="industrias"
  style={{
    padding: "120px 40px",
    background: "#0b1220"
  }}
>
  <div
    style={{
      maxWidth: 1400,
      margin: "0 auto"
    }}
  >
    <div style={{ textAlign: "center", marginBottom: 60 }}>
      <h2
        style={{
          fontSize: 48,
          marginBottom: 15
        }}
      >
        Industrias Estratégicas
      </h2>

      <p
        style={{
          color: "rgba(255,255,255,0.70)",
          maxWidth: 800,
          margin: "0 auto",
          fontSize: 18,
          lineHeight: 1.7
        }}
      >
        Acompañamos organizaciones que operan en sectores clave de la economía,
        aportando gestión, control y visión estratégica.
      </p>
    </div>

     <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 25
  }}
>
  {[
    {
      image: "/images/petroleo-nexor.jpg.png",
      title: "Petróleo y Gas",
      text: "Optimización operativa, control de gestión y eficiencia en entornos de alta exigencia."
    },
    {
      image: "/images/construccion-nexor.jpg.png",
      title: "Construcción",
      text: "Soluciones integrales para el desarrollo de proyectos con calidad y seguridad."
    },
    {
      image: "/images/transporte-nexor.jpg.png",
      title: "Transporte y Logística",
      text: "Gestión eficiente de la cadena de suministro, con compromiso y puntualidad."
    },
    {
      image: "/images/mineria-nexor.jpg.png",
      title: "Minería",
      text: "Soluciones integrales para una minería segura, eficiente y sostenible."
    }
  ].map((item) => (
    <div
      key={item.title}
      style={{
        borderRadius: 22,
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(212,175,55,0.18)"
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: 420,
          objectFit: "cover",
          display: "block"
        }}
      />

      <div style={{ padding: 28 }}>
        <h3 style={{ fontSize: 24, marginBottom: 15 }}>
          {item.title}
        </h3>

        <p style={{ color: "rgba(255,255,255,0.70)", lineHeight: 1.7 }}>
          {item.text}
        </p>
      </div>
    </div>
     ))}
</div>
</div>
</section>
       {/* CIERRE CORPORATIVO */}
<section
  style={{
    padding: "140px 40px 70px",
    background: "linear-gradient(180deg, #0b1220 0%, #05070d 100%)",
    textAlign: "center",
    borderTop: "1px solid rgba(212,175,55,0.18)",
  }}
>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <div
      style={{
        color: "#d4af37",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: 3,
        marginBottom: 18,
        textTransform: "uppercase",
      }}
    >
      Argentina Productiva
    </div>

    <h2
      style={{
        fontSize: 52,
        lineHeight: 1.1,
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      Creemos en el potencial de la industria argentina.
    </h2>

    <p
      style={{
        maxWidth: 850,
        margin: "28px auto",
        color: "rgba(255,255,255,0.72)",
        lineHeight: 1.8,
        fontSize: 19,
      }}
    >
      Trabajamos para ayudar a empresas de construcción, transporte, petróleo,
      minería y servicios a crecer con gestión profesional, eficiencia operativa
      y visión estratégica.
    </p>

    <div
      style={{
        marginTop: 45,
        marginBottom: 60,
        padding: 35,
        borderRadius: 24,
        background: "rgba(212,175,55,0.08)",
        border: "1px solid rgba(212,175,55,0.25)",
      }}
    >
      <h3 style={{ color: "#d4af37", fontSize: 30, margin: 0 }}>
        Cada empresa que mejora fortalece el futuro productivo de nuestro país.
      </h3>
    </div>

    <h2 style={{ fontSize: 42, marginBottom: 20 }}>
      Hablemos de tu empresa
    </h2>

    <p
      style={{
        color: "rgba(255,255,255,0.70)",
        fontSize: 18,
        marginBottom: 35,
      }}
    >
      Transformamos desafíos en oportunidades.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 18,
        flexWrap: "wrap",
      }}
    >
      <a
        href="https://wa.me/5492994737731?text=Hola%20Nexor%20Group,%20quiero%20solicitar%20un%20Diagnostico%20Empresarial%20Integral."
        target="_blank"
        rel="noopener noreferrer"
        style={buttonPrimary}
      >
        Solicitar Diagnóstico
      </a>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonSecondary}
      >
        Contactar por WhatsApp
      </a>
    </div>

    <footer
      style={{
        marginTop: 80,
        paddingTop: 35,
        borderTop: "1px solid rgba(255,255,255,0.10)",
        color: "rgba(255,255,255,0.62)",
      }}
    >
      <h3
        style={{
          color: "#d4af37",
          letterSpacing: 3,
          fontSize: 28,
          marginBottom: 8,
        }}
      >
        NEXOR GROUP
      </h3>

      <p style={{ letterSpacing: 2, fontSize: 12, marginBottom: 25 }}>
        ESTRATEGIA • GESTIÓN • RESULTADOS
      </p>

      <p style={{ lineHeight: 1.9 }}>
        josecavallari@nexorgroup.com.ar
        <br />
        www.nexorgroup.com.ar
        <br />
        San Rafael, Mendoza, Argentina
      </p>
    </footer>
  </div>
</section>    </div>
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