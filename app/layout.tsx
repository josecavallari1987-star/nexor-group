 export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <header>
          <img src="/logo.png" alt="Grupo Nexor" width={150} />
        </header>

        {children}

      </body>
    </html>
  );
}