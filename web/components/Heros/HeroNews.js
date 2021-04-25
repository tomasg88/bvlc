import BackgroundImage from "../backgroundImage"
import { BG_CONSTANTS } from "../../utils/constants"

export default function HeroNews() {
  return (
    <div className="relative py-40 overflow-hidden text-center text-white bg-gray-800 ">
      <h1 className="relative z-10 font-sans text-6xl font-light">Últimas noticias</h1>
      <BackgroundImage image={BG_CONSTANTS.news} opacity={20} />
    </div>
  )
}
