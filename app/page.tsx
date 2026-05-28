export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold">
          NEXOR GROUP
        </h1>

        <p className="mt-6 text-xl text-zinc-400">
          Soluciones digitales impulsadas por IA
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold">
            Contactar
          </button>

          <button className="border border-zinc-700 px-6 py-3 rounded-2xl">
            Servicios
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Correos Corporativos
          </h2>

          <p className="text-zinc-400">
            Configuración profesional de dominios y emails empresariales.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Automatización IA
          </h2>

          <p className="text-zinc-400">
            Automatizamos procesos y atención al cliente con inteligencia artificial.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Diseño Web
          </h2>

          <p className="text-zinc-400">
            Creamos landing pages modernas y profesionales.
          </p>
        </div>
      </section>
    </main>
  );
}