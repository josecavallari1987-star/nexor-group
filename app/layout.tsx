 export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        {/* NAVBAR */}
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          background: "#0f172a",
          color: "white"
        }}>
          
          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/logo.png" alt="NEXOR" width={45} />
            <strong>GRUPO NEXOR</strong>
          </div>

          {/* MENU */}
          <nav style={{ display: "flex", gap: "20px" }}>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>Inicio</a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>Servicios</a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>Nosotros</a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>Contacto</a>
          </nav>

        </header>

        {/* CONTENIDO */}
        <main style={{ padding: "40px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}