import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { DEFAULT_PAGE_TITLE } from "../utils/constants"
import { Context } from "./context"
import { useContext } from "react"

export default function Footer() {
  const [rrss] = useContext(Context)
  console.log("🚀 ~ file: footer.js ~ line 10 ~ Footer ~ rrss", rrss)
  return (
    <footer className={styles.footer}>
      <div className="flex flex-col w-full mx-auto max-w-7xl">

        <div className="grid w-full gap-3 mx-auto mt-12 text-lg text-center text-gray-500 md:mt-3 md:grid-cols-3">
          <div className="flex flex-col mt-6 space-y-1 md:mt-0">
            <span className="block mb-3 text-sm font-bold uppercase">Contacto</span>
            <Link href="/contacto">Emergencias - 0261 498 0999</Link>
            <Link href="/contacto">Admistración - 0261 498 6341</Link>
            <Link href="/contacto">info@bomberoslujanmza.com.ar</Link>
            {
              rrss.map(rs => (
                <a key={rs._id} href={rs.rrssUrl} target="_blank">{rs.rrss}</a>
              ))
            }
          </div>
          <div className="flex flex-col mt-6 space-y-1 md:mt-0">
            <span className="block mb-3 text-sm font-bold uppercase">Institucional</span>
            <Link href="/institucional">Historia</Link>
            <Link href="/comision-directiva">Comisión Directiva</Link>
            <Link href="/cuerpo-activo">Cuerpo Activo</Link>
          </div>
          <div className="flex flex-col mt-6 space-y-1 md:mt-0">
            <span className="block mb-3 text-sm font-bold uppercase">Noticias</span>
            <Link href="/academia">Academia</Link>
            <Link href="/equipamiento">Equipamiento</Link>
          </div>
        </div>
        <div className="w-full pt-12">
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
              <span className="block text-sm font-bold text-center text-gray-900 uppercase">
                Bomberos Voluntarios <br /> de Luján de Cuyo
              </span>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
