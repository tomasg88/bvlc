import Image from "next/image"
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import HeaderLink from "./headerLink"
import Link from "next/link"
import Headroom from "react-headroom"
export default function Header() {
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
              <a
                target="_blank"
                className="ml-6 mr-3 text-3xl"
                href="https://www.facebook.com/Bomberos-Voluntarios-Luj%C3%A1n-De-Cuyo-Oficial-1530083307240261/about/?ref=page_internal"
              >
                <AiOutlineFacebook />
              </a>
              <a
                target="_blank"
                className="text-3xl"
                href="https://www.instagram.com/bomberoslujandecuyooficial/"
              >
                <AiOutlineInstagram />
              </a>
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
