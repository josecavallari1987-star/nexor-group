 export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Inter, Arial, sans-serif", background: "#0b1220" }}>
        
        {/* NAVBAR PREMIUM */}
        <header style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          background: "rgba(15, 23, 42, 0.85)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)"
        }}>
          
          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/logo.png" alt="NEXOR" width={42} />
            <strong style={{ color: "white", letterSpacing: "1px" }}>
              GRUPO NEXOR
            </strong>
          </div>

          {/* MENU */}
          <nav style={{ display: "flex", gap: "28px" }}>
            {["Inicio", "Servicios", "Nosotros", "Contacto"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontSize: "15px",
                  transition: "0.3s"
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* BOTÓN DESTACADO */}
          <a
            href="#"
            style={{
              background: "linear-gradient(90deg, #2563eb, #7c3aed)",
              color: "white",
              padding: "10px 16px",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "bold"
            }}
          >
            Empezar
          </a>

        </header>

        {/* CONTENIDO */}
        <main style={{
          padding: "60px 40px",
          color: "white"
        }}>
          {children}
        </main>

      </body>
    </html>
  );
}