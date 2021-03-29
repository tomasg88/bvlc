import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi"
import { FiPhone, FiInfo } from "react-icons/fi"

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
    <div className="relative flex flex-col items-center justify-center py-32 overflow-hidden text-center text-white bg-gray-900">
      <h4 className="relative z-10 max-w-xl px-6 mx-auto font-mono text-xl font-bold uppercase md:text-xl ">
        Saber para servir
      </h4>
      <h1 className="relative z-10 max-w-xl px-6 py-3 mx-auto font-mono text-4xl font-thin md:text-6xl ">
        Bomberos Voluntarios de Luján de Cuyo
      </h1>
      <div className="bottom-0 left-0 right-0 flex flex-col w-full max-w-xl p-6 pb-0 mx-auto sm:space-x-4 sm:flex-row sm:absolute ">
        <Link href="/contacto">
          <a className="relative z-10 flex flex-col items-center justify-center w-full p-3 mx-auto mt-6 text-red-600 duration-100 bg-white shadow-sm hover:bg-red-600 hover:text-red-100 hover:shadow-lg bg-opacity-90 ">
            <FiPhone className="mx-3 mb-2 text-4xl md:text-4xl" />
            <div className="text-lg font-bold uppercase">
              Contacto
              <span className="flex flex-col text-base text-left sm:text-center opacity-90 sm:hidden">
                EMERGENCIAS  (0261) 498-0999
              </span>
            </div>
          </a>
        </Link>
        <Link href="/institucional">
          <a className="relative z-10 flex flex-col items-center justify-center w-full p-3 mx-auto mt-6 text-red-600 duration-100 bg-white shadow-sm hover:bg-red-600 hover:text-red-100 hover:shadow-lg bg-opacity-90">
            <FiInfo className="mx-3 mb-2 text-4xl md:text-4xl" />
            <span className="text-lg font-bold uppercase">Institucional</span>
          </a>
        </Link>
      </div>

      <div className="absolute inset-0 z-0">
        <Carousel defaultWait={4000} maxTurns={99} /*wait for 1000 milliseconds*/>
          <Fade>
            <div>
              {/* <p className="absolute top-0 w-full mt-6 font-bold text-center uppercase">
                Equipamiento
              </p> */}
              <img
                className="object-cover w-full h-screen opacity-20"
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
                className="object-cover w-full h-screen opacity-20"
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
                className="object-cover w-full h-screen opacity-20"
                src={BG_CONSTANTS.index_3}
              />
            </div>
          </Fade>
        </Carousel>
      </div>
    </div>
  )
}
