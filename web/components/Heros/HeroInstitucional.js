import BackgroundImage from "../backgroundImage"
import { BG_CONSTANTS } from "../../utils/constants"
import NavInstitucional from "../Navigation/NavInstitucional"
import styles from "./HeroInstitucional.module.css"
import Fade from "react-reveal/Fade"

export default function HeroInstitucional({ title, image, opacity }) {
  return (
    <div>
      <div className="relative w-full py-40 overflow-hidden text-center text-white bg-gray-800">
        <Fade cascade>
          <h1 className="relative z-10 font-sans text-4xl font-light md:text-6xl">
            {title}
          </h1>
        </Fade>

        {image ? (
          <BackgroundImage image={image} opacity={opacity ? opacity : "20"} />
        ) : (
          <BackgroundImage image={BG_CONSTANTS.team} opacity={20} />
        )}
      </div>
      <div className={styles.tabs}>
        <NavInstitucional/>
      </div>
    </div>
  )
}