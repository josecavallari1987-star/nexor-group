 import "./globals.css";

export const metadata = {
  title: "Nexor Group | Consultora Industrial y Empresarial",
  description:
    "Consultoría especializada en petróleo, minería, transporte y construcción.",
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
    <html lang="es" suppressHydrationWarning>
      <body className="bg-[#0b1220] text-white">
        {children}
      </body>
    </html>
  );
}