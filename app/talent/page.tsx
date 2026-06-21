"use client";
import { useState } from "react";
export default function TalentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const countries = [
    { code: "AR", iso: "ar", name: "Argentina" },
    { code: "CL", iso: "cl", name: "Chile" },
    { code: "PE", iso: "pe", name: "Perú" },
    { code: "CO", iso: "co", name: "Colombia" },
    { code: "EC", iso: "ec", name: "Ecuador" },
    { code: "MX", iso: "mx", name: "México" },
    { code: "PA", iso: "pa", name: "Panamá" },
    { code: "VE", iso: "ve", name: "Venezuela" },
    { code: "UY", iso: "uy", name: "Uruguay" },
    { code: "PY", iso: "py", name: "Paraguay" },
    { code: "BO", iso: "bo", name: "Bolivia" },
  ];

  const cards = [
    {
      code: "EMP",
      title: "Empresas",
      text: "Publicá vacantes, encontrá talento especializado y accedé a proveedores industriales de la región.",
      button: "Registrar Empresa",
      href: "/talent/empresa",
    },
    {
      code: "PRO",
      title: "Profesionales",
      text: "Creá tu perfil, cargá tu CV y conectá con oportunidades laborales en Latinoamérica.",
      button: "Crear Perfil",
      href: "/talent/profesional",
    },
    {
      code: "SER",
      title: "Proveedores",
      text: "Mostrá tus servicios, generá contactos comerciales y conectá con empresas industriales.",
      button: "Registrar Proveedor",
      href: "/talent/proveedor",
    },
    {
      code: "EDU",
      title: "Academia",
      text: "Capacitación práctica para mejorar la empleabilidad y profesionalizar servicios.",
      button: "Ver Academia",
      href: "#academia",
    },
  ];

  const industries = [
    "Petróleo y Gas",
    "Minería",
    "Construcción",
    "Transporte y Logística",
    "Industria",
  ];

  const jobs = [
    {
      ref: "NT-001",
      title: "Supervisor de Obra",
      location: "Neuquén, Argentina",
      industry: "Construcción",
    },
    {
      ref: "NT-002",
      title: "Administrativo Logístico",
      location: "Mendoza, Argentina",
      industry: "Transporte y Logística",
    },
    {
      ref: "NT-003",
      title: "Chofer de Hidrogrúa",
      location: "Argentina / Chile",
      industry: "Servicios Industriales",
    },
    {
      ref: "NT-004",
      title: "Comprador Técnico Minero",
      location: "Perú",
      industry: "Minería",
    },
    {
      ref: "NT-005",
      title: "Técnico de Mantenimiento",
      location: "Colombia",
      industry: "Industria",
    },
    {
      ref: "NT-006",
      title: "Operador Logístico",
      location: "Panamá",
      industry: "Logística",
    },
  ];

  const featured = [
    {
      type: "Profesional",
      title: "Supervisor de Obra",
      text: "Construcción • Argentina • Disponible para proyectos industriales.",
      action: "Ver perfil",
    },
    {
      type: "Empresa",
      title: "Búsqueda Técnica",
      text: "Petróleo y Gas • Neuquén • Perfiles operativos y administrativos.",
      action: "Ver oportunidad",
    },
    {
      type: "Proveedor",
      title: "Transporte Industrial",
      text: "Logística • Chile / Argentina • Servicios para cargas y operaciones.",
      action: "Ver proveedor",
    },
  ];

  const whatsappNumber = "5492994737731";

  const whatsappLinks = {
    empresa: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Hola NEXOR TALENT, quiero registrar mi empresa.\n\nNombre de la empresa:\nPaís:\nRubro:\nEmail:\nWhatsApp:"
    )}`,
    profesional: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Hola NEXOR TALENT, quiero crear mi perfil profesional.\n\nNombre y apellido:\nPaís:\nProfesión / especialidad:\nEmail:\nWhatsApp:\nLink de LinkedIn:"
    )}`,
    proveedor: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Hola NEXOR TALENT, quiero registrar mi servicio como proveedor.\n\nNombre de empresa / servicio:\nPaís:\nServicio principal:\nEmail:\nWhatsApp:"
    )}`,
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05080d] text-white">
     <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
   <a href="/talent" className="flex items-center gap-3 md:hidden">
      <img
  src="/logo.png"
  alt="NEXOR GROUP"
className="mx-auto mb-8 w-40 object-contain md:w-56 lg:w-64"
/>
      <div>
        <p className="text-sm font-bold leading-none">NEXOR TALENT</p>
        <p className="hidden text-xs text-gray-400 sm:block">
          by NEXOR GROUP | LATAM
        </p>
      </div>
    </a>

     <nav className="hidden items-center gap-8 md:flex">
      <a href="/talent/empresa" className="text-sm text-gray-300 hover:text-white">Empresas</a>
      <a href="/talent/profesional" className="text-sm text-gray-300 hover:text-white">Profesionales</a>
      <a href="/talent/proveedor" className="text-sm text-gray-300 hover:text-white">Proveedores</a>
      <a href="#academia" className="text-sm text-gray-300 hover:text-white">Academia</a>
      <a href="/" className="text-sm text-gray-300 hover:text-white">Ingresar</a>
    </nav>

<button
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-3xl"
>
  ☰
</button>
  </div>
</header>
{menuOpen && (
  <div className="fixed left-0 right-0 top-[80px] z-40 border-b border-white/10 bg-black/95 px-6 py-6 backdrop-blur-xl md:hidden">
   <div className="flex flex-col gap-5 pt-3 text-center">
      <a onClick={() => setMenuOpen(false)} href="/talent/empresa" className="text-white">
        Empresas
      </a>
      <a onClick={() => setMenuOpen(false)} href="/talent/profesional" className="text-white">
        Profesionales
      </a>
      <a onClick={() => setMenuOpen(false)} href="/talent/proveedor" className="text-white">
        Proveedores
      </a>
      <a onClick={() => setMenuOpen(false)} href="#academia" className="text-white">
        Academia
      </a>
      <a onClick={() => setMenuOpen(false)} href="/" className="text-white">
        Ingresar
      </a>
    </div>
  </div>
)}
<section className="relative overflow-hidden px-5 pt-24 pb-20 text-center md:px-8 md:pt-28 lg:pt-32 md:pb-28">
  <div className="absolute inset-0 bg-gradient-to-br from-[#061a2f] via-[#05080d] to-black opacity-95" />

  <div className="relative mx-auto max-w-4xl">
    <img
      src="/logo.png"
      alt="NEXOR GROUP"
className="mx-auto mb-8 w-56 object-contain md:w-80 lg:w-[420px]"
    />

    <p className="mb-4 text-xs uppercase tracking-[0.45em] text-blue-300 md:text-sm">
      NEXOR TALENT
    </p>
<h1 className="mb-8 text4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
      by NEXOR GROUP | LATAM
    </h1>

    <h2 className="mx-auto mb-6 max-w-3xl text-2xl font-semibold leading-tight text-blue-100 md:text-4xl">
      El ecosistema industrial de Latinoamérica.
    </h2>

    <p className="mx-auto mb-8 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
      Conectamos empresas, profesionales y proveedores especializados en petróleo,
      minería, construcción, transporte, logística e industria.
    </p>

    <div className="mb-8 flex flex-wrap justify-center gap-3">
      <a href="/talent/empresa" className="rounded-full border border-blue-400/50 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600">Soy Empresa</a>
      <a href="/talent/profesional" className="rounded-full border border-blue-400/50 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600">Soy Profesional</a>
      <a href="/talent/proveedor" className="rounded-full border border-blue-400/50 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600">Soy Proveedor</a>
      <a href="#academia" className="rounded-full border border-blue-400/50 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600">Academia</a>
    </div>

    <div className="flex flex-wrap justify-center gap-3">
      {countries.map((country) => (
        <span key={country.code} title={country.name} className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
          <img src={`https://flagcdn.com/w40/${country.iso}.png`} alt={country.name} className="h-6 w-9 rounded-sm object-cover" />
        </span>
      ))}
    </div>
  </div>
</section>

      <section className="border-y border-white/10 bg-white/5 px-5 py-12 text-center md:px-6">
        <h3 className="mb-6 text-xl font-semibold">Presencia Regional</h3>
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 text-sm text-gray-200">
          {countries.map((country) => (
            <span key={country.code} className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-600/20">
              <img src={`https://flagcdn.com/w40/${country.iso}.png`} alt={country.name} className="h-4 w-6 rounded-sm object-cover" />
              <span className="rounded-full bg-blue-500/20 px-2 py-1 text-[10px] font-bold tracking-widest text-blue-200">
                {country.code}
              </span>
              <span>{country.name}</span>
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-blue-200">
          Plataforma de alcance latinoamericano preparada para conectar talento,
          empresas y proveedores en 11 países de la región.
        </p>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-14 text-center text-3xl font-bold md:text-4xl">
            Una plataforma. Tres conexiones. Un ecosistema.
          </h3>

          <div className="grid gap-6 md:grid-cols-4">
            {cards.map((card) => (
              <div key={card.title} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:bg-white/[0.07]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-sm font-bold tracking-widest text-blue-300 transition group-hover:scale-110">
                  {card.code}
                </div>
                <h4 className="mb-4 text-2xl font-bold">{card.title}</h4>
                <p className="mb-8 text-sm leading-6 text-gray-300">{card.text}</p>
                <a href={card.href} className="inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold transition duration-300 hover:bg-blue-500">
                  {card.button}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
            Cómo funciona
          </p>
          <h3 className="mb-14 text-3xl font-bold md:text-4xl">
            De la necesidad a la oportunidad en tres pasos.
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["01", "Registrate", "Empresas, profesionales y proveedores cargan su información dentro del ecosistema NEXOR TALENT."],
              ["02", "Conectá", "La plataforma organiza perfiles, empresas y servicios por país, industria y especialidad."],
              ["03", "Generá oportunidades", "Se crean oportunidades laborales, comerciales y de capacitación para la industria latinoamericana."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold">
                  {number}
                </span>
                <h4 className="mb-4 text-2xl font-bold">{title}</h4>
                <p className="text-sm leading-6 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] md:p-10">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
              Explorar oportunidades
            </p>
            <h3 className="text-3xl font-bold md:text-4xl">
              Buscá talento, empresas o proveedores en LATAM
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <select className="rounded-xl bg-black/40 p-4 text-sm outline-none">
              <option>Seleccionar país</option>
              {countries.map((country) => (
                <option key={country.code}>{country.name}</option>
              ))}
            </select>
            <select className="rounded-xl bg-black/40 p-4 text-sm outline-none">
              <option>Industria</option>
              {industries.map((industry) => (
                <option key={industry}>{industry}</option>
              ))}
            </select>
            <select className="rounded-xl bg-black/40 p-4 text-sm outline-none">
              <option>Tipo de perfil</option>
              <option>Empresa</option>
              <option>Profesional</option>
              <option>Proveedor</option>
            </select>
            <button className="rounded-xl bg-blue-600 p-4 text-sm font-semibold transition hover:bg-blue-500">
              Buscar oportunidades
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/30 px-5 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 text-center md:grid-cols-4">
            {[
              ["11", "Países"],
              ["3", "Comunidades"],
              ["5", "Industrias"],
              ["LATAM", "Alcance Regional"],
            ].map(([number, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
                <h3 className="text-5xl font-bold text-blue-400">{number}</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-300">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
              Movimiento regional
            </p>
            <h3 className="text-3xl font-bold md:text-4xl">
              Perfiles y oportunidades destacadas
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.18)] md:p-10">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-blue-300">
                  {item.type}
                </p>
                <h4 className="mb-3 text-2xl font-bold">{item.title}</h4>
                <p className="mb-4 text-sm text-gray-300">{item.text}</p>
                <div className="mb-4 flex gap-2">
                  <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-200">
                    Disponible
                  </span>
                  <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-semibold text-green-200">
                    LATAM
                  </span>
                </div>
                <span className="rounded-full bg-blue-600/20 px-4 py-2 text-xs font-semibold text-blue-200">
                  {item.action}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
              Vacantes iniciales
            </p>
            <h3 className="text-3xl font-bold md:text-4xl">
              Primeras búsquedas industriales LATAM
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {jobs.map((job) => (
              <div key={job.ref} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-200">
                    {job.ref}
                  </span>
                  <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-semibold text-green-200">
                    {job.industry}
                  </span>
                </div>
                <h4 className="mb-3 text-2xl font-bold">{job.title}</h4>
                <p className="mb-6 text-gray-300">📍 {job.location}</p>
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hola NEXOR TALENT.

Quiero postularme a la vacante:

REF: ${job.ref}
Puesto: ${job.title}
Ubicación: ${job.location}

Nombre y apellido:
Profesión:
Experiencia:
Email:
WhatsApp:
Link de LinkedIn:
CV:`
                )}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500">
                  Postularme →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08111f] px-5 py-20 md:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="mb-10 text-3xl font-bold">
            Especializados en las industrias que mueven Latinoamérica
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span key={industry} className="rounded-2xl border border-blue-400/20 bg-black/30 px-6 py-4 text-sm font-semibold transition hover:border-blue-400/60 hover:bg-blue-600/20">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="registro" className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">
            Registrate en NEXOR TALENT
          </h3>
          <p className="mx-auto mb-12 max-w-3xl text-gray-300">
            Elegí el perfil que corresponde y completá tus datos. Esta primera
            etapa nos permitirá construir la base regional de empresas,
            profesionales y proveedores industriales.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Empresa", "/talent/empresa", "Registrar Empresa", ["Nombre de la empresa", "País", "Rubro", "Email", "WhatsApp"]],
              ["Profesional", "/talent/profesional", "Crear Perfil Profesional", ["Nombre y apellido", "País", "Profesión / especialidad", "Email", "WhatsApp"]],
              ["Proveedor", "/talent/proveedor", "Registrar Proveedor", ["Nombre de la empresa / servicio", "País", "Servicio principal", "Email", "WhatsApp"]],
            ].map(([title, href, button, fields]) => (
              <form key={title as string} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-2xl backdrop-blur-md">
                <h4 className="mb-5 text-2xl font-bold">{title as string}</h4>
                {(fields as string[]).map((field) => (
                  <input key={field} className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder={field} />
                ))}
                {title === "Profesional" && (
                  <input type="file" className="mb-5 w-full rounded-xl bg-black/40 p-3 text-sm text-gray-300 outline-none" />
                )}
                <a href={href as string} className="block w-full rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold transition hover:bg-blue-500">
                  {button as string}
                </a>
              </form>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-400/20 bg-blue-600/10 p-6 text-center shadow-[0_0_50px_rgba(59,130,246,0.18)] md:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
            Sumate hoy
          </p>
          <h3 className="mx-auto mb-6 max-w-4xl text-3xl font-bold md:text-5xl">
            Formá parte del ecosistema industrial de Latinoamérica.
          </h3>
          <p className="mx-auto mb-10 max-w-3xl text-gray-300">
            Empresas, profesionales y proveedores pueden comenzar a conectar oportunidades
            laborales, comerciales y operativas desde NEXOR TALENT.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={whatsappLinks.empresa} target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold transition hover:bg-blue-500">
              Registrar Empresa
            </a>
            <a href={whatsappLinks.profesional} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold transition hover:bg-white/10">
              Crear Perfil Profesional
            </a>
            <a href={whatsappLinks.proveedor} target="_blank" rel="noopener noreferrer" className="rounded-full border border-blue-400/40 px-7 py-3 text-sm font-semibold text-blue-200 transition hover:bg-blue-600/20">
              Registrar Proveedor
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-12 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
          <div>
            <img src="/logo.png" alt="NEXOR GROUP" className="mb-5 h-14 w-auto object-contain" />
            <p className="text-sm leading-6 text-gray-400">
              NEXOR TALENT by NEXOR GROUP | LATAM. Plataforma industrial para conectar
              empresas, profesionales y proveedores en Latinoamérica.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Plataforma</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Empresas</li>
              <li>Profesionales</li>
              <li>Proveedores</li>
              <li>Academia</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Industrias</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Petróleo y Gas</li>
              <li>Minería</li>
              <li>Construcción</li>
              <li>Transporte y Logística</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Contacto</h4>
            <p className="text-sm text-gray-400">contacto@nexorgroup.com.ar</p>
            <p className="mt-3 text-sm text-gray-400">Alcance regional LATAM</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © 2026 NEXOR GROUP. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  );
}
