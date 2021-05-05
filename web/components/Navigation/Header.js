// import Image from "next/image"
import HeaderLink from "./HeaderLink"
import Link from "next/link"
import Image from "next/image"
import Headroom from "react-headroom"
import RrssIcon from "../rrssIcon"
import { Context } from "../context"
import { useContext } from "react"
import { DEFAULT_PAGE_TITLE, BG_CONSTANTS } from "../../utils/constants"
import MenuDropdown from "./MenuDropdown"

export default function Header() {
  const [rrss] = useContext(Context)
  return (
    <Headroom disableInlineStyles>
      <div className="bg-pattern">
        <header className="z-50 flex flex-col w-full p-3 pb-0 mx-auto max-w-7xl ">
          <div className="flex justify-between">
            <Link href="/">
              <a className="flex items-center justify-center transform -translate-y-2">
                <img
                  src="/logo-bomberos-cuyo.png"
                  width="80"
                  height="100"
                  className="flex-none"
                  alt={DEFAULT_PAGE_TITLE}
                  title={DEFAULT_PAGE_TITLE}
                />
                <span className="w-32 ml-3 text-sm text-gray-100 uppercase md:w-auto sm:block md:text-lg xl:text-2xl">
                  Bomberos Voluntarios <br /> de Luján de Cuyo
                </span>
              </a>
            </Link>
            <div className="flex-col items-end justify-center hidden lg:flex">
              <div className="flex items-center justify-end w-full p-1 px-2 text-white border-b border-red-400">
                <a
                  href={BG_CONSTANTS.spai_pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center mr-2 overflow-hidden uppercase duration-500 bg-red-700 rounded-full mx-x justify-baseline hover:bg-red-900"
                >
                  <span className="px-3 pr-1 text-xs font-bold">
                    Convenio SPAI
                  </span>
                  <Image
                    src={BG_CONSTANTS.escudo_spai}
                    alt={DEFAULT_PAGE_TITLE}
                    quality={80}
                    className="flex-none w-8 h-8"
                    layout="fixed"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href={BG_CONSTANTS.iram_pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center mr-4 overflow-hidden uppercase duration-500 bg-red-700 rounded-full justify-baseline hover:bg-blue-900"
                >
                  <span className="px-3 pr-1 text-xs font-bold">Certificación IRAM</span>
                  <Image
                    src={BG_CONSTANTS.sello_iram}
                    alt={DEFAULT_PAGE_TITLE}
                    quality={80}
                    className="flex-none w-8 h-8"
                    layout="fixed"
                    width={30}
                    height={30}
                  />
                </a>
                <div className="flex items-center justify-between">
                  <span className="flex items-baseline font-sans font-bold uppercase">
                    <small className="inline-block mr-1 text-xs">Emergencias</small>{" "}
                    (0261) 498-0999
                  </span>
                  {rrss &&
                    rrss.map((rs) => (
                      <RrssIcon
                        className={"hidden xl:inline-block ml-3 text-3xl"}
                        key={rs._id}
                        rrss={rs.rrss}
                        url={rs.rrssUrl}
                      />
                    ))}
                </div>
              </div>
              <nav className="flex items-center justify-end mt-3">
                <MenuDropdown title="Institucional" />
                <HeaderLink url="/noticias" title="Noticias" />
                <HeaderLink url="/academia" title="Academia" />
                <HeaderLink url="/galeria" title="Galería" />
                <HeaderLink url="/contacto" title="Contacto" />
              </nav>
            </div>
          </div>
        </header>
      </div>
    </Headroom>
  )
}
