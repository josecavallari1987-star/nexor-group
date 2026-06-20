"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function EmpresasAdminPage() {
  const [empresas, setEmpresas] = useState<any[]>([]);

  useEffect(() => {
    cargarEmpresas();
  }, []);

  async function cargarEmpresas() {
    const { data } = await supabase
      .from("empresas")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setEmpresas(data);
    }
  }

  return (
    <main className="min-h-screen bg-[#050B20] text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Empresas Registradas
      </h1>

      <div className="space-y-4">
        {empresas.map((empresa) => (
          <div
            key={empresa.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-semibold">
              {empresa.nombre_empresa}
            </h2>

            <p>País: {empresa.pais}</p>
            <p>Rubro: {empresa.rubro}</p>
            <p>Email: {empresa.email}</p>
            <p>WhatsApp: {empresa.whatsapp}</p>
          </div>
        ))}
      </div>
    </main>
  );
}