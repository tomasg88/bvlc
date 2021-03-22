import Image from "next/image"
import HeaderLink from "./headerLink"
import Link from "next/link"
import Headroom from "react-headroom"
import RrssIcon from "./rrssIcon"

export default function Header({ rrss }) {
  return (
    <Headroom disableInlineStyles className="bg-pattern ">
      <header className="relative z-50 flex flex-col w-full px-3 mx-auto ">
        <div className="flex justify-between">
          <Link href="/">
            <a className="flex items-center justify-center transform translate-y-4">
              <Image
                src="/logo-bomberos-cuyo.png"
                alt="Bomberos Voluntarios de Luján de Cuyo"
                width={80}
                height={100}
              />
              <span className="ml-3 text-sm text-gray-100 uppercase md:text-2xl">
                Bomberos Voluntarios <br /> de Luján de Cuyo
              </span>
            </a>
          </Link>
          <div className="flex-col items-end justify-center hidden md:flex">
            <div className="flex items-center justify-end w-full p-1 pl-6 pr-2 text-white border-b border-gray-50">
              <span className="font-sans font-bold uppercase"><small className="text-xs">Emergencias</small> (0261) 498-0999</span>
              {
                rrss && rrss.map(rs => <RrssIcon key={rs._id} rrss={rs.rrss} url={rs.rrssUrl} /> )
              }
            </div>
            <nav className="flex items-center justify-end mt-3">
              <HeaderLink url="/noticias" title="Noticias" />
              <HeaderLink url="/institucional" title="Institucional" />
              <HeaderLink url="/galeria" title="Galería" />
              <HeaderLink url="/contacto" title="Contacto" />
            </nav>
          </div>
        </div>
      </header>
    </Headroom>
  )
}
