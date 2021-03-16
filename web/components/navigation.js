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
    title: "Contacto",
    slug: "/contacto",
    ariaLabel: "Ver datos contacto",
  },
  
]

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full">
    {routes.map((route, i) => {
      return (
        <Link href={route.slug} key={route.slug}>
          <a
            className="my-3 text-2xl font-light text-white border-b border-red-600 cursor-pointer hover:text-red-300"
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
