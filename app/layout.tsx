 export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{
        margin: 0,
        fontFamily: "Inter, Arial, sans-serif",
        background: "#0b1220",
        color: "white"
      }}>
        
        {/* NAVBAR */}
        <header style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          background: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)"
        }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/logo.png" width={40} />
            <strong>NEXOR</strong>
          </div>

          <nav style={{ display: "flex", gap: 25 }}>
            {["Inicio", "Servicios", "Proyectos", "Contacto"].map((i) => (
              <a key={i} href="#" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                {i}
              </a>
            ))}
          </nav>

          <a href="#" style={{
            background: "linear-gradient(90deg,#2563eb,#7c3aed)",
            padding: "10px 16px",
            borderRadius: 10,
            color: "white",
            textDecoration: "none"
          }}>
            Contacto
          </a>
        </header>

        {children}

        {/* FOOTER */}
        <footer style={{
          padding: 40,
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: 80,
          color: "rgba(255,255,255,0.6)"
        }}>
          © {new Date().getFullYear()} Grupo NEXOR. Todos los derechos reservados.
        </footer>

      </body>
    </html>
  );
}