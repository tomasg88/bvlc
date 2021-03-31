import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="flex flex-col w-full mx-auto max-w-7xl">

        <div className="grid w-full gap-3 mx-auto mt-12 text-lg text-center text-gray-500 md:mt-3 md:grid-cols-3">
          <div className="flex flex-col mt-6 space-y-1 md:mt-0">
            <span className="block mb-3 text-sm font-bold uppercase">Contacto</span>
            <Link href="/contacto">Emergencias - 0261 498 0999</Link>
            <Link href="/contacto">Admistración - 0261 498 6341</Link>
            <Link href="/contacto">info@bomberoslujanmza.com.ar</Link>
            <Link href="/contacto">Instagram</Link>
            <Link href="/contacto">Facebook</Link>
          </div>
          <div className="flex flex-col mt-6 space-y-1 md:mt-0">
            <span className="block mb-3 text-sm font-bold uppercase">Institucional</span>
            <Link href="/noticias">Historia</Link>
            <Link href="/noticias">Comisión Directiva</Link>
            <Link href="/noticias">Cuerpo Activo</Link>
          </div>
          <div className="flex flex-col mt-6 space-y-1 md:mt-0">
            <span className="block mb-3 text-sm font-bold uppercase">Noticias</span>
            <Link href="/noticias">Academia</Link>
            <Link href="/noticias">Contribuciones</Link>
            <Link href="/noticias">Equipamiento</Link>
          </div>
        </div>
        <div className="w-full pt-12">
          <Link href="/">
            <a className="flex flex-col items-center justify-center">
              <Image
                src="/logo-bomberos-cuyo.png"
                alt="Bomberos Voluntarios de Luján de Cuyo"
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
