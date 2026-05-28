  "use client";

import { useState } from "react";

export default function Home() {
  const [lang] = useState<"es" | "en">("es");

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>

      {/* HERO */}
      <h1 style={{ fontSize: 52 }}>
        {lang === "es"
          ? "Socio estratégico en operaciones industriales críticas"
          : "Strategic partner for critical industrial operations"}
      </h1>

      <p style={{
        maxWidth: 900,
        margin: "20px auto",
        color: "rgba(255,255,255,0.7)",
        fontSize: 18
      }}>
        {lang === "es"
          ? "NEXOR es una firma de consultoría operativa enfocada en minería, petróleo, transporte y construcción, especializada en optimización logística y administrativa."
          : "NEXOR is an operational advisory firm focused on mining, oil & gas, transportation and construction, specializing in logistics and administrative optimization."}
      </p>

      {/* SECTORES */}
      <h2 style={{ marginTop: 80 }}>
        {lang === "es" ? "Industrias" : "Industries"}
      </h2>

      <p style={{ color: "rgba(255,255,255,0.6)" }}>
        Oil & Gas • Mining • Construction • Transportation
      </p>

      {/* PROBLEMAS */}
      <h2 style={{ marginTop: 80 }}>
        {lang === "es" ? "Problemas que resolvemos" : "Problems we solve"}
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: 20,
        marginTop: 30
      }}>
        {[
          lang === "es"
            ? "Falta de coordinación operativa"
            : "Lack of operational coordination",

          lang === "es"
            ? "Sobrecarga administrativa"
            : "Administrative overload",

          lang === "es"
            ? "Ineficiencia logística"
            : "Logistical inefficiency",

          lang === "es"
            ? "Desconexión entre campo y oficina"
            : "Field-office misalignment"
        ].map((t) => (
          <div key={t} style={{
            padding: 20,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 12
          }}>
            {t}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 100 }}>
        <h2>
          {lang === "es"
            ? "Hablemos de operación"
            : "Let’s discuss operations"}
        </h2>

        <p style={{ color: "rgba(255,255,255,0.6)" }}>
          {lang === "es"
            ? "Contacto ejecutivo directo con el equipo NEXOR"
            : "Direct executive contact with NEXOR team"}
        </p>

        <a href="#" style={{
          display: "inline-block",
          marginTop: 20,
          padding: "14px 26px",
          background: "white",
          color: "#0b1220",
          borderRadius: 12,
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          {lang === "es" ? "Contactar" : "Contact"}
        </a>
      </div>

    </div>
  );
}