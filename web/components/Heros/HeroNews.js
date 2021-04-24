import Link from "next/link"
import BackgroundImage from "../backgroundImage"
import { BG_CONSTANTS } from "../../utils/constants"

export default function HeroNews() {
  return (
    <div className="relative py-40 overflow-hidden text-center text-white bg-gray-800 ">
      <h1 className="relative z-10 font-sans text-6xl font-light">Últimas noticias</h1>
      <BackgroundImage image={BG_CONSTANTS.news} opacity={20} />
      <div className="bottom-0 left-0 right-0 flex flex-col justify-center w-full max-w-3xl p-6 pb-8 mx-auto sm:space-x-4 sm:flex-row sm:absolute ">
        <Link href="/academia">
          <a className="relative z-10 block mt-6 text-base text-center uppercase btn">
            Academia
          </a>
        </Link>
        <Link href="/equipamiento">
          <a className="relative z-10 block mt-6 text-base text-center uppercase btn">
            Equipamiento
          </a>
        </Link>
      </div>
    </div>
  )
}
