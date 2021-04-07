import Image from "next/image"
import HeaderLink from "./headerLink"
import Link from "next/link"
import Headroom from "react-headroom"
import RrssIcon from "./rrssIcon"
import { Context } from "./context"
import { useContext } from "react"
import { Menu, Transition } from "@headlessui/react"
export default function Header() {
  const [rrss] = useContext(Context)
  return (
    <Headroom disableInlineStyles className="bg-pattern">
      <header className="z-50 flex flex-col w-full p-3 pb-0 mx-auto max-w-7xl ">
        <div className="flex justify-between">
          <Link href="/">
            <a className="flex items-center justify-center transform -translate-y-2">
              <Image
                src="/logo-bomberos-cuyo.png"
                alt="Bomberos Voluntarios de Luján de Cuyo"
                title="Bomberos Voluntarios de Luján de Cuyo"
                width={80}
                height={100}
                objectFit="fill"
                quality={80}
                layout="fixed"
              />
              <span className="w-32 ml-3 text-sm text-gray-100 uppercase md:w-auto sm:block lg:text-2xl">
                Bomberos Voluntarios <br /> de Luján de Cuyo
              </span>
            </a>
          </Link>
          <div className="flex-col items-end justify-center hidden md:flex">
            <div className="flex items-center justify-end w-full p-1 pl-6 pr-2 text-white border-b border-red-400">
              <span className="font-sans font-bold uppercase">
                <small className="text-xs">Emergencias</small> (0261) 498-0999
              </span>
              {rrss &&
                rrss.map((rs) => (
                  <RrssIcon
                    className={"ml-3 text-3xl"}
                    key={rs._id}
                    rrss={rs.rrss}
                    url={rs.rrssUrl}
                  />
                ))}
            </div>
            <nav className="flex items-center justify-end mt-3">
              <div className="relative inline-block text-left">
                <Menu>
                  {({ open }) => (
                    <>
                      <span className="rounded-md shadow-sm">
                        <Menu.Button className="inline-flex justify-center w-full px-5 py-2 font-sans text-sm font-bold text-white uppercase border-b-4 border-transparent outline-none ring-0 lg:text-lg hover:border-white">
                          <span>Institucional</span>
                          <svg
                            className="w-5 h-5 ml-2 -mr-1 transform lg:translate-y-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Menu.Button>
                      </span>

                      <Transition
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="absolute left-0 right-0 w-full origin-top-right bg-red-600 shadow-lg outline-none"
                        >
                          <div className="py-3">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/institucional">
                                  <a
                                    className={`${
                                      active ? "bg-red-500 text-gray-100" : "text-white"
                                    } flex justify-between w-full px-4 py-3  hover:opacity-90 hover:bg-red-700 border-0 text-base leading-5 text-left`}
                                  >
                                    Historia
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/comision-directiva">
                                  <a
                                    className={`${
                                      active ? "bg-red-500 text-gray-100" : "text-white"
                                    } flex justify-between w-full px-4 py-3  hover:opacity-90 hover:bg-red-700 border-0 text-base leading-5 text-left`}
                                  >
                                    Comisión Directiva
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/cuerpo-activo">
                                  <a
                                    className={`${
                                      active ? "bg-red-500 text-gray-100" : "text-white"
                                    } flex justify-between w-full px-4 py-3  hover:opacity-90 hover:bg-red-700 border-0 text-base leading-5 text-left`}
                                  >
                                    Cuerpo Activo
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/equipamiento">
                                  <a
                                    className={`${
                                      active ? "bg-red-500 text-gray-100" : "text-white"
                                    } flex justify-between w-full px-4 py-3  hover:opacity-90 hover:bg-red-700 border-0 text-base leading-5 text-left`}
                                  >
                                    Equipamiento
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
              <HeaderLink url="/noticias" title="Noticias" />
              <HeaderLink
                url="/academia"
                title="Academia"
              />
              <HeaderLink url="/galeria" title="Galería" />
              <HeaderLink url="/contacto" title="Contacto" />
            </nav>
          </div>
        </div>
      </header>
    </Headroom>
  )
}
