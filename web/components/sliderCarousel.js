import Fade from "react-reveal/Fade"
import makeCarousel from "react-reveal/makeCarousel"
import Link from "next/link"

import { BsNewspaper, BsPeopleFill } from "react-icons/bs"
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi"
import { FaFireExtinguisher } from "react-icons/fa"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

export default function SliderCarousel() {
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="relative w-full h-full mb-0 overflow-hidden border-b border-red-400">
      <div
        className="absolute left-0 z-50 items-center justify-center hidden w-12 h-12 text-5xl text-center text-white cursor-pointer hover:opacity-90 md:flex top-48"
        onClick={handleClick}
        data-position={position - 1}
      >
        <AiOutlineArrowLeft />
      </div>
      <div
        className="absolute right-0 z-50 items-center justify-center hidden w-12 h-12 text-5xl text-center text-white cursor-pointer hover:opacity-90 md:flex top-48"
        right
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
  )
  const Carousel = makeCarousel(CarouselUI)
  return (
    <div className="relative flex flex-col items-center justify-center py-40 overflow-hidden text-center text-white bg-gray-700">
      <div className="relative z-10 max-w-2xl mx-auto text-5xl font-extrabold ">
        Al servicio de la comunidad de Luján de Cuyo
      </div>
      <Link href="/comision-directiva">
        <a className="relative z-10 max-w-xs mx-auto mt-6 btn">
          Conocé más sobre nosotros
        </a>
      </Link>
      <div className="absolute inset-0 z-0">
        <Carousel defaultWait={4000} maxTurns={99} /*wait for 1000 milliseconds*/>
          <Fade>
            <div>
              <p className="absolute top-0 w-full mt-6 font-bold text-center uppercase">Equipamiento</p>
              <img
                className="object-cover w-full h-screen opacity-30"
                src="https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-9/149283800_2826697110912201_6199177887266118548_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=D5mUIWXF_2oAX_7ZVM8&_nc_ht=scontent.faep8-1.fna&oh=76a7f5c1da87f3bc8c14caaae7504058&oe=606864F7"
              />
            </div>
          </Fade>
          <Fade>
            <div>
              <p className="absolute top-0 w-full mt-6 font-bold text-center uppercase">cuerpo activo</p>
              <img
                className="object-cover w-full h-screen opacity-30"
                src="https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/145919140_2818111668437412_458251714749266980_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=_Uh04GCrRwIAX9lA8eJ&_nc_ht=scontent.faep8-2.fna&oh=61058e52c7a6fb69343074be16bcb93f&oe=606826B9"
              />
            </div>
          </Fade>
          <Fade>
            <div>
              <p className="absolute top-0 w-full mt-6 font-bold text-center uppercase">comunidad</p>
              <img
                className="object-cover w-full h-screen opacity-30"
                src="https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-9/139424359_2807504019498177_8774613192109568254_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=aqeakTz2-RYAX8AFIL5&_nc_ht=scontent.faep8-1.fna&oh=8391f0bae1e4cf33d831323765dcc9d8&oe=60675283"
              />
            </div>
          </Fade>
        </Carousel>
      </div>
    </div>
  )
}
