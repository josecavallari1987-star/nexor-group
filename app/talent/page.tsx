export default function TalentPage() {
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
    },
    {
      code: "PRO",
      title: "Profesionales",
      text: "Creá tu perfil, cargá tu CV y conectá con oportunidades laborales en Latinoamérica.",
      button: "Crear Perfil",
    },
    {
      code: "SER",
      title: "Proveedores",
      text: "Mostrá tus servicios, generá contactos comerciales y conectá con empresas industriales.",
      button: "Registrar Proveedor",
    },
    {
      code: "EDU",
      title: "Academia",
      text: "Capacitación práctica para mejorar la empleabilidad y profesionalizar servicios.",
      button: "Ver Academia",
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
    <main className="min-h-screen bg-[#05080d] text-white">

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

    <div className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="NEXOR GROUP"
        className="h-10 w-auto"
      />

      <div>
        <p className="text-sm font-bold">NEXOR TALENT</p>
        <p className="text-xs text-gray-400">
          by NEXOR GROUP | LATAM
        </p>
      </div>
    </div>

    <nav className="hidden items-center gap-8 md:flex">
      <a
        href="/talent/empresa"
        className="text-sm text-gray-300 transition hover:text-white"
      >
        Empresas
      </a>

      <a
       href="/talent/profesional"
        className="text-sm text-gray-300 transition hover:text-white"
      >
        Profesionales
      </a>

      <a
        href="/talent/proveedor"
        className="text-sm text-gray-300 transition hover:text-white"
      >
        Proveedores
      </a>

      <a
        href="#academia"
        className="text-sm text-gray-300 transition hover:text-white"
      >
        Academia
      </a>

      <a
        href="#registro"
        className="rounded-full border border-blue-500 px-5 py-2 text-sm font-semibold transition hover:bg-blue-600"
      >
        Ingresar
      </a>
    </nav>

  </div>
</header>
  <section className="relative overflow-hidden px-6 pt-24 pb-28 text-center">
  <div className="absolute inset-0 bg-gradient-to-br from-[#061a2f] via-[#05080d] to-black opacity-95" />

  <div className="relative mx-auto max-w-6xl">
    <img
      src="/logo.png"
      alt="NEXOR GROUP"
      className="mx-auto mb-8 h-24 w-auto object-contain"
    />

    <p className="mb-4 text-sm uppercase tracking-[0.5em] text-blue-300">
      NEXOR TALENT
    </p>

    <h1 className="mb-5 text-5xl font-bold tracking-tight md:text-7xl">
      by NEXOR GROUP | LATAM
    </h1>

    <h2 className="mb-6 text-3xl font-semibold text-blue-100 md:text-5xl">
      El ecosistema industrial de Latinoamérica.
    </h2>

    <div className="mx-auto mb-8 flex max-w-4xl flex-wrap justify-center gap-3">
      {countries.map((country) => (
        <span
          key={country.code}
          title={country.name}
          className="
rounded-full
border border-white/10
bg-white/10
px-3 py-2
backdrop-blur-md
transition-all
duration-300
hover:scale-110
hover:border-blue-400/60
hover:bg-blue-500/20
hover:shadow-[0_0_20px_rgba(59,130,246,0.45)]
cursor-pointer
"
        >
          <img
            src={`https://flagcdn.com/w40/${country.iso}.png`}
            alt={country.name}
            className="h-6 w-9 rounded-sm object-cover"
          />
        </span>
      ))}
    </div>

    <p className="mb-5 text-sm uppercase tracking-[0.25em] text-blue-200">
      11 países • Un ecosistema industrial • Miles de oportunidades
    </p>

    <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-300">
      Conectamos empresas, profesionales y proveedores especializados en
      petróleo, minería, construcción, transporte, logística e industria.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      <a
  href="/talent/empresa"
  className="rounded-full border border-blue-400/50 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
>
  Soy Empresa
</a>

<a
  href="/talent/profesional"
  className="rounded-full border border-blue-400/50 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
>
  Soy Profesional
</a>

<a
  href="/talent/proveedor"
  className="rounded-full border border-blue-400/50 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
>
  Soy Proveedor
</a>

<a
  href="#academia"
  className="rounded-full border border-blue-400/50 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
>
  Academia
</a>
    </div>
  </div>
</section>

      <section className="border-y border-white/10 bg-white/5 px-6 py-12 text-center">
        <h3 className="mb-6 text-xl font-semibold">Presencia Regional</h3>

        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 text-sm text-gray-200">
          {countries.map((country) => (
            <span
              key={country.code}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-600/20"
            >
              <img
  src={`https://flagcdn.com/w40/${country.iso}.png`}
  alt={country.name}
  className="h-4 w-6 rounded-sm object-cover"
/>
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

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-14 text-center text-3xl font-bold md:text-4xl">
            Una plataforma. Tres conexiones. Un ecosistema.
          </h3>

          <div className="grid gap-6 md:grid-cols-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-sm font-bold tracking-widest text-blue-300 transition group-hover:scale-110">
                  {card.code}
                </div>

                <h4 className="mb-4 text-2xl font-bold">{card.title}</h4>

                <p className="mb-8 text-sm leading-6 text-gray-300">
                  {card.text}
                </p>

                <a
                  href="#registro"
                  className="inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold transition duration-300 hover:bg-blue-500"
                >
                  {card.button}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="px-6 py-24">
  <div className="mx-auto max-w-6xl text-center">
    <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-300">
      Cómo funciona
    </p>

    <h3 className="mb-14 text-3xl font-bold md:text-4xl">
      De la necesidad a la oportunidad en tres pasos.
    </h3>

    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
        <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold">
          01
        </span>
        <h4 className="mb-4 text-2xl font-bold">Registrate</h4>
        <p className="text-sm leading-6 text-gray-300">
          Empresas, profesionales y proveedores cargan su información dentro del ecosistema NEXOR TALENT.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
        <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold">
          02
        </span>
        <h4 className="mb-4 text-2xl font-bold">Conectá</h4>
        <p className="text-sm leading-6 text-gray-300">
          La plataforma organiza perfiles, empresas y servicios por país, industria y especialidad.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
        <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold">
          03
        </span>
        <h4 className="mb-4 text-2xl font-bold">Generá oportunidades</h4>
        <p className="text-sm leading-6 text-gray-300">
          Se crean oportunidades laborales, comerciales y de capacitación para la industria latinoamericana.
        </p>
      </div>
    </div>
  </div>
  
</section>
<section className="px-6 py-24">
  <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-2xl backdrop-blur-md transition-all duration-500 hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
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
        <option>Argentina</option>
        <option>Chile</option>
        <option>Perú</option>
        <option>Colombia</option>
        <option>Ecuador</option>
        <option>México</option>
        <option>Panamá</option>
        <option>Venezuela</option>
        <option>Uruguay</option>
        <option>Paraguay</option>
        <option>Bolivia</option>
      </select>

      <select className="rounded-xl bg-black/40 p-4 text-sm outline-none">
        <option>Industria</option>
        <option>Petróleo y Gas</option>
        <option>Minería</option>
        <option>Construcción</option>
        <option>Transporte y Logística</option>
        <option>Industria</option>
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

<section className="border-y border-white/10 bg-black/30 px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-6 text-center md:grid-cols-4">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
        <h3 className="text-5xl font-bold text-blue-400">11</h3>
        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-300">
          Países
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
        <h3 className="text-5xl font-bold text-blue-400">3</h3>
        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-300">
          Comunidades
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
        <h3 className="text-5xl font-bold text-blue-400">5</h3>
        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-300">
          Industrias
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl">
        <h3 className="text-5xl font-bold text-blue-400">LATAM</h3>
        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gray-300">
          Alcance Regional
        </p>
      </div>
    </div>
  </div>
</section>

<section className="px-6 py-32">
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
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(59,130,246,0.18)] hover:border-blue-400/40">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-blue-300">
          Profesional
        </p>
        <h4 className="mb-3 text-2xl font-bold">Supervisor de Obra</h4>
        <p className="mb-4 text-sm text-gray-300">
          Construcción • Argentina • Disponible para proyectos industriales.
          <div className="mb-4 flex gap-2">
  <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-200">
    Disponible
  </span>

  <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-semibold text-green-200">
    LATAM
  </span>
</div>
        </p>
        <span className="rounded-full bg-blue-600/20 px-4 py-2 text-xs font-semibold text-blue-200">
          Ver perfil
        </span>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(59,130,246,0.18)] hover:border-blue-400/40">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-blue-300">
          Empresa
        </p>
        <h4 className="mb-3 text-2xl font-bold">Búsqueda Técnica</h4>
        <p className="mb-4 text-sm text-gray-300">
          Petróleo y Gas • Neuquén • Perfiles operativos y administrativos.
          <div className="mb-4 flex gap-2">
  <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-200">
    Disponible
  </span>

  <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-semibold text-green-200">
    LATAM
  </span>
</div>
        </p>
        <span className="rounded-full bg-blue-600/20 px-4 py-2 text-xs font-semibold text-blue-200">
          Ver oportunidad
        </span>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(59,130,246,0.18)] hover:border-blue-400/40">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-blue-300">
          Proveedor
        </p>
        <h4 className="mb-3 text-2xl font-bold">Transporte Industrial</h4>
        <p className="mb-4 text-sm text-gray-300">
          Logística • Chile / Argentina • Servicios para cargas y operaciones.
          <div className="mb-4 flex gap-2">
  <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-200">
    Disponible
  </span>

  <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-semibold text-green-200">
    LATAM
  </span>
</div>
        </p>
        <span className="rounded-full bg-blue-600/20 px-4 py-2 text-xs font-semibold text-blue-200">
          Ver proveedor
        </span>
      </div>
    </div>
  </div>
</section>

<section className="px-6 py-24">
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
      
        
      </div>
  {jobs.map((job) => (
    <div
      key={job.ref}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-200">
          {job.ref}
        </span>

        <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-semibold text-green-200">
          {job.industry}
        </span>
      </div>

      <h4 className="mb-3 text-2xl font-bold">
        {job.title}
      </h4>

      <p className="mb-6 text-gray-300">
        📍 {job.location}
      </p>

      <a
        href={`https://wa.me/5492994737731?text=${encodeURIComponent(
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
        )}`}
        target="_blank"
        className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
      >
        Postularme →
      </a>
    </div>
  ))}
</div>
</section>


      <section className="bg-[#08111f] px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="mb-10 text-3xl font-bold">
            Especializados en las industrias que mueven Latinoamérica
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-2xl border border-blue-400/20 bg-black/30 px-6 py-4 text-sm font-semibold transition hover:border-blue-400/60 hover:bg-blue-600/20"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="registro" className="px-6 py-24">
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
            <form className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-2xl backdrop-blur-md">
              <h4 className="mb-5 text-2xl font-bold">Empresa</h4>

              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="Nombre de la empresa" />
              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="País" />
              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="Rubro" />
              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="Email" />
              <input className="mb-5 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="WhatsApp" />

              <a
  href="/talent/empresa"
  className="block w-full rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold transition hover:bg-blue-500"
>
  Registrar Empresa
</a>
            </form>

            <form className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-2xl backdrop-blur-md">
              <h4 className="mb-5 text-2xl font-bold">Profesional</h4>

              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="Nombre y apellido" />
              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="País" />
              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="Profesión / especialidad" />
              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="Email" />
              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="WhatsApp" />
              <input type="file" className="mb-5 w-full rounded-xl bg-black/40 p-3 text-sm text-gray-300 outline-none" />

              <a
  href="/talent/profesional"
  className="block w-full rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold transition hover:bg-blue-500"
>
  Crear Perfil Profesional
</a>
            </form>

            <form className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-2xl backdrop-blur-md">
              <h4 className="mb-5 text-2xl font-bold">Proveedor</h4>

              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="Nombre de la empresa / servicio" />
              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="País" />
              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="Servicio principal" />
              <input className="mb-3 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="Email" />
              <input className="mb-5 w-full rounded-xl bg-black/40 p-3 text-sm outline-none" placeholder="WhatsApp" />

              <a
  href="/talent/proveedor"
  className="block w-full rounded-full bg-blue-600 px-5 py-3 text-center text-sm font-semibold transition hover:bg-blue-500"
>
  Registrar Proveedor
</a>
            </form>
          </div>
        </div>
      </section>
      <section className="px-6 py-24">
  <div className="mx-auto max-w-6xl rounded-3xl border border-blue-400/20 bg-blue-600/10 p-10 text-center shadow-[0_0_50px_rgba(59,130,246,0.18)]">
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
      <a
        href={whatsappLinks.empresa}
        target="_blank"
        className="rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold transition hover:bg-blue-500"
      >
        Registrar Empresa
      </a>

      <a
        href={whatsappLinks.profesional}
        target="_blank"
        className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold transition hover:bg-white/10"
      >
        Crear Perfil Profesional
      </a>

      <a
        href={whatsappLinks.proveedor}
        target="_blank"
        className="rounded-full border border-blue-400/40 px-7 py-3 text-sm font-semibold text-blue-200 transition hover:bg-blue-600/20"
      >
        Registrar Proveedor
      </a>
    </div>
  </div>
</section>
      <footer className="border-t border-white/10 bg-black px-6 py-12">
  <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
    <div>
      <img
        src="/logo.png"
        alt="NEXOR GROUP"
        className="mb-5 h-14 w-auto object-contain"
      />
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
      <p className="text-sm text-gray-400">
        contacto@nexorgroup.com.ar
      </p>
      <p className="mt-3 text-sm text-gray-400">
        Alcance regional LATAM
      </p>
    </div>
  </div>

  <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-gray-500">
    © 2026 NEXOR GROUP. Todos los derechos reservados.
  </div>
</footer>
    </main>
  );
}