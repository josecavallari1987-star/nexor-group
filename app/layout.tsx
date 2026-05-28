 export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f5f5f5" }}>
        
        <header style={{
          display: "flex",
          alignItems: "center",
          padding: "15px 30px",
          background: "#ffffff",
          borderBottom: "1px solid #ddd"
        }}>
          <img src="/logo.png" alt="Grupo Nexor" width={140} />
        </header>

        <main style={{ padding: "30px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}