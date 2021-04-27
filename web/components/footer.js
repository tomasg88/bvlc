import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { DEFAULT_PAGE_TITLE, BG_CONSTANTS } from "../utils/constants"
import { Context } from "./context"
import { useContext } from "react"

export default function Footer() {
  const [rrss] = useContext(Context)
  return (
    <footer className={styles.footer}>
      <div className="flex flex-col w-full mx-auto max-w-7xl">
        <div className="grid w-full gap-3 mx-auto mt-12 text-lg text-center text-blue-200 md:mt-3 md:grid-cols-3">
          <div className="flex flex-col mt-6 space-y-1 md:mt-0">
            <span className="block mb-3 text-sm font-bold text-white uppercase">
              Contacto
            </span>
            <Link href="/contacto">Emergencias - 0261 498 0999</Link>
            <Link href="/contacto">Admistración - 0261 498 6341</Link>
            <Link href="/contacto">info@bomberoslujanmza.com.ar</Link>
          </div>
          <div className="flex flex-col mt-6 space-y-1 md:mt-0">
            <span className="block mb-3 text-sm font-bold text-white uppercase">
              Institucional
            </span>
            <Link href="/institucional">Historia</Link>
            <Link href="/comision-directiva">Comisión Directiva</Link>
            <Link href="/cuerpo-activo">Cuerpo Activo</Link>
            <Link href="/equipamiento">Equipamiento</Link>
          </div>
          <div className="flex flex-col mt-6 space-y-1 md:mt-0">
            <span className="block mb-3 text-sm font-bold text-white uppercase">
              Noticias
            </span>
            <Link href="/academia">Academia</Link>
            <Link href="/galeria">Galería</Link>
            {rrss.map((rs) => (
              <a key={rs._id} href={rs.rrssUrl} target="_blank">
                Ir a {rs.rrss}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between w-full max-w-6xl pt-12 mx-auto md:flex-row">
          <Link href="/">
            <a className="flex flex-col items-center justify-center">
              <Image
                src="/logo-bomberos-cuyo.png"
                alt={DEFAULT_PAGE_TITLE}
                width={80}
                height={100}
                objectFit="fill"
                quality={80}
                layout="fixed"
              />
              <span className="block mt-3 text-sm font-bold text-center text-blue-400 uppercase">
                Bomberos Voluntarios <br /> de Luján de Cuyo
              </span>
            </a>
          </Link>
          <a
            href={BG_CONSTANTS.iram_pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-32 overflow-hidden duration-500 rounded-2xl hover:opacity-80 md:mr-20"
          >
            <Image
              src={BG_CONSTANTS.iram}
              alt={DEFAULT_PAGE_TITLE}
              quality={80}
              className="w-full h-auto"
              layout="intrinsic"
              width={200}
              height={245}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
