import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"
export default function Footer() {
  return (
    <footer className={styles.footer}>
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
    </footer>
  )
}
