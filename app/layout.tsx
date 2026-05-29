 export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{
        margin: 0,
        background: "#0b1220",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}>

        {/* LOGO CENTRADO GRANDE */}
        <header style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "60px 20px 20px 20px",
          textAlign: "center"
        }}>
          
          <img
            src="/logo.png"
            alt="NEXOR"
            style={{
              width: 260,
              height: "auto",
              marginBottom: 20
            }}
          />

          {/* SLOGAN */}
          <h2 style={{
            fontWeight: 300,
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 700
          }}>
            Operational Strategy & Industrial Execution Partner
          </h2>

        </header>

        {children}

      </body>
    </html>
  );
}