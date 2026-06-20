"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function TalentAdminPage() {
  const [stats, setStats] = useState({
    empresas: 0,
    profesionales: 0,
    proveedores: 0,
    vacantes: 0,
    postulaciones: 0,
    enRevision: 0,
    entrevistas: 0,
    seleccionados: 0,
  });

  useEffect(() => {
    async function cargarDatos() {
      const { count: empresas } = await supabase.from("empresas").select("*", { count: "exact", head: true });
      const { count: profesionales } = await supabase.from("profesionales").select("*", { count: "exact", head: true });
      const { count: proveedores } = await supabase.from("proveedores").select("*", { count: "exact", head: true });
      const { count: vacantes } = await supabase.from("vacantes").select("*", { count: "exact", head: true });
      const { count: postulaciones } = await supabase.from("postulaciones").select("*", { count: "exact", head: true });
      const { count: enRevision } = await supabase.from("postulaciones").select("*", { count: "exact", head: true }).eq("estado", "En revisión");
      const { count: entrevistas } = await supabase.from("postulaciones").select("*", { count: "exact", head: true }).eq("estado", "Entrevista");
      const { count: seleccionados } = await supabase.from("postulaciones").select("*", { count: "exact", head: true }).eq("estado", "Seleccionado");

      setStats({
        empresas: empresas ?? 0,
        profesionales: profesionales ?? 0,
        proveedores: proveedores ?? 0,
        vacantes: vacantes ?? 0,
        postulaciones: postulaciones ?? 0,
        enRevision: enRevision ?? 0,
        entrevistas: entrevistas ?? 0,
        seleccionados: seleccionados ?? 0,
      });
    }

    cargarDatos();
  }, []);

  return (
    <main className="min-h-screen bg-[#05080d] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
          NEXOR TALENT
        </p>

        <h1 className="mb-10 text-4xl font-bold">Panel Administrativo</h1>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            [stats.empresas, "Empresas"],
            [stats.profesionales, "Profesionales"],
            [stats.proveedores, "Proveedores"],
            [stats.vacantes, "Vacantes"],
          ].map(([numero, texto]) => (
            <div key={texto} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-5xl font-bold text-blue-400">{numero}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-300">{texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            [stats.postulaciones, "Postulaciones"],
            [stats.enRevision, "En Revisión"],
            [stats.entrevistas, "Entrevistas"],
            [stats.seleccionados, "Seleccionados"],
          ].map(([numero, texto]) => (
            <div key={texto} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-5xl font-bold text-blue-400">{numero}</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-300">{texto}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/talent/admin/empresas" className="rounded-full border border-white/20 px-6 py-3">Empresas</a>
          <a href="/talent/admin/vacantes" className="rounded-full border border-white/20 px-6 py-3">Vacantes</a>
          <a href="/talent/admin/postulaciones" className="rounded-full border border-white/20 px-6 py-3">Postulaciones</a>
          <a href="/talent" className="rounded-full border border-white/20 px-6 py-3">Volver a NEXOR TALENT</a>
        </div>
      </div>
    </main>
  );
}