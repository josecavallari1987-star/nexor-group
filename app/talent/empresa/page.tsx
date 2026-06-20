export default function EmpresaPage() {
  const whatsappNumber = "5492994737731";

  const message = `Hola NEXOR TALENT.

Quiero registrar mi empresa.

Nombre de la empresa:
País:
Provincia / Ciudad:
Industria:
Persona de contacto:
Email:
WhatsApp:
Cantidad de vacantes:
Necesidad principal:`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main className="min-h-screen bg-[#05080d] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-2xl backdrop-blur-md">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
          NEXOR TALENT
        </p>

        <h1 className="mb-4 text-4xl font-bold">Registro Empresa</h1>

        <p className="mb-8 text-gray-300">
          Registrá tu empresa para conectar con talento, proveedores y soluciones industriales en LATAM.
        </p>

        <div className="grid gap-4">
          {[
            "Nombre de la empresa",
            "País",
            "Provincia / Ciudad",
            "Industria",
            "Persona de contacto",
            "Email",
            "WhatsApp",
            "Cantidad de vacantes",
            "Necesidad principal",
          ].map((field) => (
            <input
              key={field}
              placeholder={field}
              className="rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            />
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          className="mt-8 block rounded-full bg-blue-600 px-6 py-4 text-center text-sm font-semibold transition hover:bg-blue-500"
        >
          Registrar empresa por WhatsApp
        </a>

        <a href="/talent" className="mt-4 block text-center text-sm text-gray-400 hover:text-white">
          Volver a NEXOR TALENT
        </a>
      </div>
    </main>
  );
}