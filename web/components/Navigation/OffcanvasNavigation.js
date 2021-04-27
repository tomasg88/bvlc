import Link from "next/link"
import { ROUTES } from "./../../utils/constants"

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full pt-6">
    {ROUTES.map((route, i) => {
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
