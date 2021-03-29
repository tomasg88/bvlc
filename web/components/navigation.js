import Link from "next/link"

const routes = [
  {
    title: "Inicio",
    slug: "/",
    ariaLabel: "Bomberos voluntarios - pagina de inicio",
  },
  {
    title: "Noticias",
    slug: "/noticias",
    ariaLabel: "Ver noticias",
  },
  {
    title: "Historia",
    slug: "/institucional",
    ariaLabel: "Ver Historia",
  },
  {
    title: "Cuerpo Activo",
    slug: "/cuerpo-activo",
    ariaLabel: "Ver Cuerpo Activo",
  },
  {
    title: "Comisión Directiva",
    slug: "/comision-directiva",
    ariaLabel: "Ver Comisión Directiva",
  },
  {
    title: "Galería",
    slug: "/galeria",
    ariaLabel: "Ver galeria fotográfica",
  },

  {
    title: "Academia",
    slug: "/noticias/academia-aspirantes-a-bomberos-ciclo-2021",
    ariaLabel: "Ver Academia",
  },

  {
    title: "Contacto",
    slug: "/contacto",
    ariaLabel: "Ver datos contacto",
  },

  
]

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full pt-6">
    {routes.map((route, i) => {
      return (
        <Link href={route.slug} key={route.slug}>
          <a
            className="p-3 my-1 text-lg font-light text-white cursor-pointer hover:bg-red-800"
            onClick={closeMenu}
            alt={route.ariaLabel}
            title={route.ariaLabel}
            aria-label={route.ariaLabel}
          >
            {route.title}
          </a>
        </Link>
      )
    })}
  </nav>
)

export default Navigation
