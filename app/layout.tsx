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
        fontFamily: "Arial, sans-serif",
        background: "#0b1220",
        color: "white"
      }}>

        {/* HEADER PREMIUM */}
        <header style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 20px"
        }}>
          <img
            src="/logo.png"
            alt="NEXOR"
            style={{
              width: 180,
              height: "auto"
            }}
          />
        </header>

        {/* LANGUAGE SWITCH */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginBottom: 20
        }}>
          <button onClick={() => setLang("es")} style={btn(lang === "es")}>
            Español
          </button>
          <button onClick={() => setLang("en")} style={btn(lang === "en")}>
            English
          </button>
        </div>

        {/* CONTENIDO */}
        {children}

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