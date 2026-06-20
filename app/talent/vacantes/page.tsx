"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function VacantesPage() {
  const [form, setForm] = useState({
    titulo: "",
    empresa: "",
    ubicacion: "",
    descripcion: "",
    estado: "Activa",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setMensaje("Publicando...");

    const { error } = await supabase
      .from("vacantes")
      .insert([form]);

    if (error) {
      console.error(error);
      setMensaje(error.message);
      return;
    }

    setMensaje("Vacante publicada correctamente.");

    setForm({
      titulo: "",
      empresa: "",
      ubicacion: "",
      descripcion: "",
      estado: "Activa",
    });
  };

  return (
    <main className="min-h-screen bg-[#050B20] text-white p-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">
          Publicar Vacante
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="titulo"
            placeholder="Título"
            value={form.titulo}
            onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 bg-white p-4 text-black"
          />

          <input
            name="empresa"
            placeholder="Empresa"
            value={form.empresa}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-white p-4 text-black"
          />

          <input
            name="ubicacion"
            placeholder="Ubicación"
            value={form.ubicacion}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-white p-4 text-black"
          />

          <textarea
            name="descripcion"
            placeholder="Descripción"
            value={form.descripcion}
            onChange={handleChange}
           className="w-full rounded-xl border border-gray-300 bg-white p-4 text-black"
            rows={5}
          />

          <button
            type="submit"
            className="w-full rounded-xl border border-blue-500 bg-blue-500 p-4 font-bold text-white hover:bg-blue-600"
          >
            Publicar vacante
          </button>
        </form>

        {mensaje && (
          <p className="mt-6 text-center">
            {mensaje}
          </p>
        )}
      </div>
    </main>
  );
}