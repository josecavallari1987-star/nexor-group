 "use client";

import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <html lang={lang}>
      <body style={{
        margin: 0,
        background: "#0b1220",
        color: "white",
        fontFamily: "Arial, sans-serif"
      }}>

        {/* LOGO GRANDE + SLOGAN */}
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
            style={{ width: 300 }}
          />

          <h2 style={{
            fontWeight: 300,
            marginTop: 20,
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 800
          }}>
            Operational Advisory Firm for Critical Industrial Environments
          </h2>

          {/* LANGUAGE SWITCH */}
          <div style={{
            marginTop: 25,
            display: "flex",
            gap: 10
          }}>
            <button onClick={() => setLang("es")} style={btn(lang === "es")}>
              Español
            </button>
            <button onClick={() => setLang("en")} style={btn(lang === "en")}>
              English
            </button>
          </div>

        </header>

        {/* CONTENIDO */}
        {children(lang)}

      </body>
    </html>
  );
}

function btn(active: boolean): React.CSSProperties {
  return {
    padding: "8px 14px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.2)",
    background: active ? "white" : "transparent",
    color: active ? "#0b1220" : "white",
    cursor: "pointer"
  };
}