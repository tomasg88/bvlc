import Image from "next/image"
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import HeaderLink from "./headerLink"
import Link from "next/link"  
import Headroom from "react-headroom"
export default function Header() {
  return (
    <Headroom disableInlineStyles>
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
              <span className="ml-3 text-sm text-gray-900 uppercase md:text-2xl">
                Bomberos Voluntarios <br /> de Luján de Cuyo
              </span>
            </a>
          </Link>
          <div className="items-end justify-center hidden pb-3 md:flex">
            <nav className="flex items-center justify-end">
              <HeaderLink url="/noticias" title="Noticias" />
              <HeaderLink url="/cuerpo-activo" title="Cuerpo Activo" />
              <HeaderLink url="/comision-directiva" title="Comisión Directiva" />
              <HeaderLink url="/contacto" title="Contacto" />
              <a
                target="_blank"
                className="ml-6 text-3xl"
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
            </nav>
          </div>
        </div>
      </header>
    </Headroom>
  )
}
