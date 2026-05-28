 export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header>
          <img src="/logo.png" alt="Grupo Nexor" width={150} />
        </header>

        {children}
      </body>
    </html>
  );
}