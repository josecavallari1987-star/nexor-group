"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function PostularPage() {
 const [form, setForm] = useState({
  nombre: "",
  email: "",
  telefono: "",
});

const [archivo, setArchivo] = useState<File | null>(null);

  const [mensaje, setMensaje] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setMensaje("Enviando postulación...");

    let cvUrl = "";

if (archivo) {
  const fileName = `${Date.now()}-${archivo.name}`;

  const { error: uploadError } = await supabase.storage
    .from("cvs")
    .upload(fileName, archivo);

  if (uploadError) {
    console.error(uploadError);
    setMensaje(uploadError.message);
    return;
  }

  const { data } = supabase.storage
    .from("cvs")
    .getPublicUrl(fileName);

  cvUrl = data.publicUrl;
}

const { error } = await supabase
  .from("postulaciones")
  .insert([
    {
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono,
      cv_url: cvUrl,
      estado: "Nueva",
    },
  ]);

    if (error) {
      console.error(error);
      setMensaje(error.message);
      return;
    }

    setMensaje("Postulación enviada correctamente.");

    setForm({
      nombre: "",
      email: "",
      telefono: "",
    });
    setArchivo(null);
  }

  return (
    <main className="min-h-screen bg-[#050820] text-white px-6 py-20">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur-md">

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
          NEXOR TALENT
        </p>

        <h1 className="mb-8 text-4xl font-bold">
          Postularme
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4"
        >
          <input
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
            className="rounded-xl p-4 bg-black/20 border border-white/10"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="rounded-xl p-4 bg-black/20 border border-white/10"
          />

          <input
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
            className="rounded-xl p-4 bg-black/20 border border-white/10"
          />
<input
  type="file"
  accept=".pdf"
  onChange={(e) => {
    if (e.target.files?.[0]) {
      setArchivo(e.target.files[0]);
    }
  }}
  className="rounded-xl p-4 bg-black/20 border border-white/10"
/>
          <button
            type="submit"
            className="rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-500"
          >
            Enviar postulación
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