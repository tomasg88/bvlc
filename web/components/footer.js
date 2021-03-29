import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="flex flex-col w-full mx-auto md:flex-row max-w-7xl">
        <div className="w-full md:w-1/4">
          <Link href="/">
            <a className="flex flex-col items-center justify-center">
              <Image
                src="/logo-bomberos-cuyo.png"
                alt="Bomberos Voluntarios de Luján de Cuyo"
                width={80}
                height={100}
              />
              <span className="block text-sm font-bold text-center text-gray-900 uppercase">
                Bomberos Voluntarios <br /> de Luján de Cuyo
              </span>
            </a>
          </Link>
        </div>
        <div className="grid flex-auto max-w-5xl gap-3 mt-12 text-lg text-center text-gray-500 md:text-left md:mt-3 md:grid-cols-4">
          <div className="flex flex-col space-y-1">
            <span className="block mb-3 text-sm font-bold uppercase">Institucional</span>
            <Link href="/noticias">Noticias</Link>
            <Link href="/noticias">Noticias</Link>
            <Link href="/noticias">Noticias</Link>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="block mb-3 text-sm font-bold uppercase">Institucional</span>
            <Link href="/galeria">Galería</Link>
            <Link href="/galeria">Galería</Link>
            <Link href="/galeria">Galería</Link>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="block mb-3 text-sm font-bold uppercase">Institucional</span>
            <Link href="/contacto">Contacto</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="block mb-3 text-sm font-bold uppercase">Institucional</span>
            <Link href="/contacto">Contacto</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
