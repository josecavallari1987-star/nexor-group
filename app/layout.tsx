 export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        
        <header style={{ padding: 20 }}>
          <img src="/logo.png" alt="Grupo Nexor" width={150} />
        </header>

        {children}

      </body>
    </html>
  );
}