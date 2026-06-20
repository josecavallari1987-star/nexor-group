"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function EmpresaPage() {
  const [form, setForm] = useState({
    nombre_empresa: "",
    pais: "",
    rubro: "",
    email: "",
    whatsapp: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
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

    setMensaje("Guardando...");

    const { error } = await supabase
      .from("empresas")
      .insert([form]);

    if (error) {
  console.log(error);
  setMensaje(error.message);
  return;

    }

    setMensaje("Empresa registrada correctamente.");

    setForm({
      nombre_empresa: "",
      pais: "",
      rubro: "",
      email: "",
      whatsapp: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#05080d] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-2xl">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
          NEXOR TALENT
        </p>

        <h1 className="mb-2 text-4xl font-bold">
          Registro Empresa
        </h1>

        <p className="mb-8 text-gray-300">
          Registrá tu empresa para conectar con talento y soluciones industriales.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="nombre_empresa"
            placeholder="Nombre de la empresa"
            value={form.nombre_empresa}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-black/40 p-4"
          />

          <input
            type="text"
            name="pais"
            placeholder="País"
            value={form.pais}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-black/40 p-4"
          />

          <input
            type="text"
            name="rubro"
            placeholder="Rubro"
            value={form.rubro}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-black/40 p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-black/40 p-4"
          />

          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp"
            value={form.whatsapp}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-black/40 p-4"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500"
          >
            Registrar empresa
          </button>
        </form>

        {mensaje && (
          <p className="mt-6 text-center text-blue-300">
            {mensaje}
          </p>
        )}

        <a
          href="/talent"
          className="mt-8 block text-center text-sm text-gray-400 hover:text-white"
        >
          Volver a NEXOR TALENT
        </a>
      </div>
    </main>
  );
}