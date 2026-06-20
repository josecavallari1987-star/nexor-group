"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Vacante = {
  id: string;
  titulo: string;
  empresa: string;
  ubicacion: string;
  descripcion: string;
  estado: string;
};

export default function EmpleosPage() {
  const [vacantes, setVacantes] = useState<Vacante[]>([]);

  useEffect(() => {
    async function cargarVacantes() {
      const { data, error } = await supabase
        .from("vacantes")
        .select("*")
        .eq("estado", "Activa")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setVacantes(data || []);
    }

    cargarVacantes();
  }, []);

  return (
    <main className="min-h-screen bg-[#05080d] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
          NEXOR TALENT
        </p>

        <h1 className="mb-4 text-4xl font-bold">
          Empleos Industriales
        </h1>

        <p className="mb-10 max-w-2xl text-gray-300">
          Vacantes publicadas por empresas vinculadas al ecosistema industrial, logístico, minero, petrolero y de construcción.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {vacantes.map((vacante) => (
            <div
              key={vacante.id}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold">{vacante.titulo}</h2>

              <p className="mt-2 text-blue-300">
                {vacante.empresa}
              </p>

              <p className="mt-2 text-sm text-gray-300">
                {vacante.ubicacion}
              </p>

              <p className="mt-4 text-sm text-gray-300">
                {vacante.descripcion}
              </p>

              <a
                href="/talent/profesional"
                className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-500"
              >
                Postularme
              </a>
            </div>
          ))}
        </div>

        <a
          href="/talent"
          className="mt-10 inline-block rounded-full border border-white/20 px-6 py-3"
        >
          Volver a NEXOR TALENT
        </a>
      </div>
    </main>
  );
}