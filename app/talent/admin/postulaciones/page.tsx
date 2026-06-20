"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type Postulacion = {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  estado: string;
  cv_url: string;
};

export default function AdminPostulacionesPage() {
  const [postulaciones, setPostulaciones] = useState<Postulacion[]>([]);
  const [busqueda, setBusqueda] = useState("");

  const postulacionesFiltradas = postulaciones.filter((p) =>
    p.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.email?.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.telefono?.toLowerCase().includes(busqueda.toLowerCase())
  );

  useEffect(() => {
    cargarPostulaciones();
  }, []);

  async function cargarPostulaciones() {
    const { data, error } = await supabase
      .from("postulaciones")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setPostulaciones(data || []);
  }

  async function cambiarEstado(id: string, nuevoEstado: string) {
    const { error } = await supabase
      .from("postulaciones")
      .update({ estado: nuevoEstado })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setPostulaciones((actuales) =>
      actuales.map((p) =>
        p.id === id ? { ...p, estado: nuevoEstado } : p
      )
    );
  }

  async function eliminarPostulacion(id: string) {
    const confirmar = confirm("¿Eliminar esta postulación?");
    if (!confirmar) return;

    const { error } = await supabase
      .from("postulaciones")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setPostulaciones((actuales) =>
      actuales.filter((p) => p.id !== id)
    );
  }

  return (
    <main className="min-h-screen bg-[#05080d] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
          NEXOR TALENT
        </p>

        <h1 className="mb-8 text-4xl font-bold">
          Postulaciones Recibidas
        </h1>

        <input
          type="text"
          placeholder="Buscar por nombre, email o teléfono..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="mb-6 w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-gray-400"
        />

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-white/10 text-gray-300">
              <tr>
                <th className="p-4">Nombre</th>
                <th className="p-4">Email</th>
                <th className="p-4">Teléfono</th>
                <th className="p-4">Estado</th>
                <th className="p-4">CV</th>
                <th className="p-4">Acción</th>
              </tr>
            </thead>

            <tbody>
              {postulacionesFiltradas.map((p) => (
                <tr key={p.id} className="border-b border-white/5">
                  <td className="p-4">{p.nombre}</td>
                  <td className="p-4">{p.email}</td>
                  <td className="p-4">{p.telefono}</td>

                  <td className="p-4">
                    <select
                      value={p.estado}
                      onChange={(e) => cambiarEstado(p.id, e.target.value)}
                      className="rounded-full bg-blue-600/20 px-3 py-2 text-blue-300"
                    >
                      <option value="Nueva">Nueva</option>
                      <option value="En revisión">En revisión</option>
                      <option value="Entrevista">Entrevista</option>
                      <option value="Seleccionado">Seleccionado</option>
                      <option value="Rechazado">Rechazado</option>
                    </select>
                  </td>

                  <td className="p-4">
                    {p.cv_url ? (
                      <a
                        href={p.cv_url}
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        Descargar PDF
                      </a>
                    ) : (
                      "Sin CV"
                    )}
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => eliminarPostulacion(p.id)}
                      className="rounded-full bg-red-600/20 px-3 py-1 text-red-300 hover:bg-red-600/30"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <a
          href="/talent/admin"
          className="mt-8 inline-block rounded-full border border-white/20 px-6 py-3"
        >
          Volver al Panel
        </a>
      </div>
    </main>
  );
}