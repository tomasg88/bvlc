import Link from "next/link"
import BackgroundImage from "../components/backgroundImage"
import { BG_CONSTANTS } from "../utils/constants"
import HeaderLink from "./headerLink"
import styles from "../styles/heroInstitucional.module.css"

export default function HeroInstitucional({ title, image, opacity }) {
  return (
    <div>
      <div className="relative w-full py-24 overflow-hidden text-center text-white bg-gray-800">
        <h1 className="relative z-10 flex flex-col items-center justify-center font-sans text-4xl font-bold">
          {title}
        </h1>
        {image ? (
          <BackgroundImage image={image} opacity={(opacity ? opacity : '20')}  />
        ) : (
          <BackgroundImage image={BG_CONSTANTS.team} opacity={20} />
        )}
      </div>
      <div className={styles.tabs}>
        <HeaderLink url="/comision-directiva" title="Comision Directiva" />
        <HeaderLink url="/cuerpo-activo" title="Cuerpo Activo" />
        <HeaderLink url="/institucional" title="Historia" />
        <HeaderLink url="/equipamiento" title="Equipamiento" />
      </div>
    </div>
  )
}
