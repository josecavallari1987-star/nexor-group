import Link from "next/link";

export default function ExpansionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
<section className="relative overflow-hidden px-6 py-10 md:px-12 lg:px-20">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1d4ed8_0%,transparent_35%),linear-gradient(135deg,#020617_0%,#0f172a_55%,#020617_100%)] opacity-95" />

 <div className="relative mx-auto max-w-5xl">
     <p className="mb-4 text-base font-semibold uppercase tracking-[0.4em] text-blue-400">
  NEXOR GROUP
</p>
  <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
      NEXOR EXPANSION
    </h1>

   <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
     Estrategia · Implementación · Crecimiento
    </p>

<p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
      Ayudamos a empresas a instalarse, operar y crecer en nuevos mercados mediante
      soluciones integrales que combinan estrategia, implementación operativa y
      desarrollo comercial.
    </p>

  <div className="mt-4 flex flex-col gap-4 sm:flex-row">
      <a
        href="https://wa.me/5492604018114"
        target="_blank"
        className="rounded-full bg-blue-600 px-8 py-4 text-center font-semibold text-white transition hover:bg-blue-500"
      >
        Solicitar Diagnóstico
      </a>

      <a
        href="https://wa.me/5492604018114"
        target="_blank"
        className="rounded-full border border-slate-500 px-8 py-4 text-center font-semibold text-white transition hover:border-blue-400 hover:text-blue-300"
      >
        Hablar con un Consultor
      </a>
    </div>
  </div>
</section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Qué hacemos
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              De la idea a la operación.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Expandir un negocio requiere mucho más que abrir una oficina o
              conseguir clientes. En NEXOR EXPANSION diseñamos, gestionamos y
              ejecutamos proyectos de expansión empresarial acompañando a las
              organizaciones en cada etapa de su crecimiento territorial y
              operativo.
            </p>
          </div>
<div className="flex items-center justify-center lg:pt-12">
  <div className="rounded-[2rem] bg-slate-950/60 p-4 shadow-[0_0_60px_rgba(37,99,235,0.25)]">
    <img
      src="/images/argentina-expansion-map.png"
      alt="Mapa de expansión territorial"
      className="w-full max-w-2xl object-contain rounded-3xl"
    />
  </div>
</div>
        </div>
      </section>

      <section className="bg-slate-900/60 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Industrias
          </p>
          <h2 className="text-4xl font-bold">Industrias que impulsamos</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
  [
    "Petróleo y Gas",
    "Servicios industriales, mantenimiento, logística y soporte operativo.",
    "/images/industria-petroleo.jpg",
  ],
  [
    "Transporte y Logística",
    "Cargas, transporte de personal y operaciones especializadas.",
    "/images/industria-transporte.jpg",
  ],
  [
    "Construcción e Ingeniería",
    "Constructoras, metalúrgicas, infraestructura y obras industriales.",
    "/images/industria-construccion.jpg",
  ],
  [
    "Minería",
    "Proveedores que buscan ingresar o crecer en nuevos proyectos.",
    "/images/industria-mineria.jpg",
  ],
].map(([title, text, image]) => (
              <div
                key={title}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-[0_0_30px_rgba(37,99,235,0.10)] transition duration-300 hover:-translate-y-1 hover:border-blue-500"
              >
              <img
  src={image}
  alt={title}
className="mb-6 h-56 w-full rounded-2xl object-cover transition duration-500 hover:scale-110"
/>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Servicios
          </p>
          <h2 className="text-4xl font-bold">Soluciones para expandir operaciones</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Diagnóstico de Expansión", "Evaluamos viabilidad, riesgos, mercado y oportunidades."],
              ["Plan de Desembarco", "Diseñamos la estrategia de ingreso, cronograma y estructura operativa."],
              ["Implementación Operativa", "Organizamos la puesta en marcha de la operación."],
              ["Desarrollo Comercial", "Identificamos oportunidades, clientes potenciales y posicionamiento."],
              ["Acompañamiento Estratégico", "Monitoreamos indicadores, avances y consolidación."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7"
              >
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/60 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Metodología
          </p>
          <h2 className="text-4xl font-bold">NEXOR 360°</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {["Diagnóstico", "Planificación", "Implementación", "Desarrollo Comercial", "Consolidación"].map(
              (step, index) => (
                <div key={step} className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-semibold">{step}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

       <section className="px-6 py-20 md:px-12 lg:px-20">
  <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
    <div className="rounded-3xl border border-blue-900/60 bg-blue-950/30 p-8">
      <h2 className="text-4xl font-bold">Expansión hacia Vaca Muerta</h2>

      <p className="mt-6 leading-8 text-slate-300">
        Desde el análisis inicial hasta la operación en marcha, acompañamos
        a las empresas en cada etapa de su proceso de expansión hacia
        regiones estratégicas.
      </p>

      <div className="mt-8 space-y-4">
        {["Empresa", "Plan de Expansión", "Implementación", "Clientes", "Operación en marcha"].map(
          (item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5 font-semibold"
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
<div className="flex items-start justify-center lg:pt-8">
  <div className="rounded-[2rem] bg-slate-950/60 p-4 shadow-[0_0_60px_rgba(37,99,235,0.25)]">
    <img
      src="/images/vaca-muerta.jpg"
      alt="Vaca Muerta"
      className="w-full max-w-2xl rounded-[1.5rem] object-cover"
    />
  </div>
</div>
  </div>
</section>

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-blue-950 p-10 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            ¿Está listo para desarrollar su próximo mercado?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Diseñamos y ejecutamos proyectos de expansión empresarial de principio a fin.
          </p>
          <a
            href="https://wa.me/5492604018114"
            target="_blank"
            className="mt-10 inline-flex rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Solicitar Diagnóstico
          </a>
        </div>
      </section>
    </main>
  );
}