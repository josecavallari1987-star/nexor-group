"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function VacantesAdminPage() {
  const [vacantes, setVacantes] = useState<any[]>([]);

  useEffect(() => {
    cargarVacantes();
  }, []);

  async function cargarVacantes() {
    const { data, error } = await supabase
      .from("vacantes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setVacantes(data || []);
  }

  return (
    <main className="min-h-screen bg-[#050B20] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Vacantes Publicadas
      </h1>

      <div className="space-y-4">
        {vacantes.map((vacante) => (
          <div
            key={vacante.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold">
              {vacante.titulo}
            </h2>

            <p>Empresa: {vacante.empresa}</p>
            <p>Ubicación: {vacante.ubicacion}</p>
            <p>Descripción: {vacante.descripcion}</p>
            <p>Estado: {vacante.estado}</p>
          </div>
        ))}
      </div>
    </main>
  );
}