"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ProveedorPage() {
  const [form, setForm] = useState({
    empresa: "",
    pais: "",
    servicio: "",
    email: "",
    whatsapp: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMensaje("Guardando...");

    const { error } = await supabase.from("proveedores").insert([form]);

    if (error) {
      console.error(error);
      setMensaje(error.message);
      return;
    }

    setMensaje("Proveedor registrado correctamente.");

    setForm({
      empresa: "",
      pais: "",
      servicio: "",
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

        <h1 className="mb-2 text-4xl font-bold">Registro Proveedor</h1>

        <p className="mb-8 text-gray-300">
          Registrá tu empresa o servicio para integrar la red industrial NEXOR TALENT.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="empresa" placeholder="Nombre de la empresa / servicio" value={form.empresa} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/40 p-4" />
          <input name="pais" placeholder="País" value={form.pais} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/40 p-4" />
          <input name="servicio" placeholder="Servicio principal" value={form.servicio} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/40 p-4" />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/40 p-4" />
          <input name="whatsapp" placeholder="WhatsApp" value={form.whatsapp} onChange={handleChange} className="w-full rounded-xl border border-white/10 bg-black/40 p-4" />

          <button type="submit" className="w-full rounded-full bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500">
            Registrar proveedor
          </button>
        </form>

        {mensaje && (
          <p className="mt-6 text-center text-blue-300">{mensaje}</p>
        )}

        <a href="/talent" className="mt-8 block text-center text-sm text-gray-400 hover:text-white">
          Volver a NEXOR TALENT
        </a>
      </div>
    </main>
  );
}