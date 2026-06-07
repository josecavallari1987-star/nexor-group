  export const metadata = {
  title: "Nexor Group | Consultoría Industrial y Empresarial",
  description:
    "Consultoría especializada en petróleo, minería, transporte y construcción. Diagnóstico empresarial, optimización operativa y transformación organizacional.",
  icons: {
    icon: "/favicon.png",
  },
};
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

        {/* IDENTIDAD DE FIRMA */}
        <header style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "70px 20px 20px",
          textAlign: "center"
        }}>
          
          <img
            src="/logo.png"
            alt="NEXOR"
            style={{ width: 320 }}
          />

          <h2 style={{
            marginTop: 20,
            fontSize: 18,
            fontWeight: 300,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 850
          }}>
            Firma de consultoría operativa especializada en industrias críticas:
            petróleo, minería, transporte y construcción.
          </h2>

        </header>

        {children}

      </body>
    </html>
  );
}