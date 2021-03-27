import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import { BG_CONSTANTS } from "../utils/constants"


export default function SliderCarousel(props) {
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="relative w-full h-full mb-0 overflow-hidden border-b border-red-400">
      {props.arrows ? (
        <div>
          <div
            className="absolute left-0 z-50 items-center justify-center hidden w-12 h-12 text-5xl text-center text-white cursor-pointer hover:opacity-90 md:flex top-60"
            onClick={handleClick}
            data-position={position - 1}
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            className="absolute right-0 z-50 items-center justify-center hidden w-12 h-12 text-5xl text-center text-white cursor-pointer hover:opacity-90 md:flex top-60"
            right="true"
            onClick={handleClick}
            data-position={position + 1}
          >
            <AiOutlineArrowRight />
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-red-500">
            {Array(...Array(total)).map((val, index) => (
              <div
                className="mx-1 text-4xl cursor-pointer"
                key={index}
                onClick={handleClick}
                data-position={index}
              >
                {index === position ? <BiRadioCircleMarked /> : <BiRadioCircle />}
              </div>
            ))}
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <div>
          <div>{children}</div>
        </div>
      )}
    </div>
  )
  const Carousel = makeCarousel(CarouselUI)
  return (
    <div className="relative flex flex-col items-center justify-center py-48 overflow-hidden text-center text-white bg-gray-900">
      <div className="relative z-10 max-w-xl mx-auto text-6xl font-light ">
        Al servicio de la comunidad de Luján de Cuyo
      </div>
      <Link href="/institucional">
        <a className="relative z-10 max-w-xs mx-auto mt-6 btn">
          Conocé más sobre nosotros
        </a>
      </Link>
      <div className="absolute inset-0 z-0">
        <Carousel defaultWait={4000} maxTurns={99} /*wait for 1000 milliseconds*/>
          <Fade>
            <div>
              {/* <p className="absolute top-0 w-full mt-6 font-bold text-center uppercase">
                Equipamiento
              </p> */}
              <img
                className="object-cover w-full h-screen opacity-50"
                src={BG_CONSTANTS.index_1}
              />
            </div>
          </Fade>
          <Fade>
            <div>
              {/* <p className="absolute top-0 w-full mt-6 font-bold text-center uppercase">
                cuerpo activo
              </p> */}
              <img
                className="object-cover w-full h-screen opacity-50"
                src={BG_CONSTANTS.team}
              />
            </div>
          </Fade>
          <Fade>
            <div>
              {/* <p className="absolute top-0 w-full mt-6 font-bold text-center uppercase">
                comunidad
              </p> */}
              <img
                className="object-cover w-full h-screen opacity-50"
                src={BG_CONSTANTS.index_3}
              />
            </div>
          </Fade>
        </Carousel>
      </div>
    </div>
  )
}
