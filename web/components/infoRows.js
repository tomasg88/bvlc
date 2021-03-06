import { BsNewspaper, BsPeopleFill } from "react-icons/bs"
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi"
import { FaFireExtinguisher } from "react-icons/fa"
import BackgroundImage from "../components/backgroundImage"

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { GiFireAxe } from "react-icons/gi"
import Link from "next/link"

export default function InfoRows() {
  return (
    <div className="relative px-6 py-40 overflow-hidden transition-all duration-1000 transform bg-gray-900 border-t-4 border-red-600 hover:bg-gray-800">
      <div className="relative z-10 flex flex-col items-center justify-center max-w-6xl py-12 mx-auto font-sans text-center ">
        <h3 className="text-6xl font-light text-white">Categorias</h3>
      </div>
      <div className="relative z-10 grid max-w-6xl mx-auto md:grid-cols-3 gap-9">
        <div className="flex flex-col items-center justify-center p-6 text-center bg-white border-2 border-red-600 shadow-2xl">
          <FaFireExtinguisher className="mb-6 text-6xl opacity-50" />
          <h3 className="mb-3 text-2xl font-bold text-gray-800">
            Guias para prevenir <br /> posibles riesgos.
          </h3>
          <p className="text-lg text-gray-600">
            Elementos a tener en cuenta para aprender a cuidarnos entre todos.
          </p>
          <Link href="/noticias/academia-aspirantes-a-bomberos-ciclo-2021">
            <a className="relative z-10 px-6 mt-6 btn ">Acceder a la guia</a>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center p-6 text-center bg-white border-2 border-red-600 shadow-2xl">
          <BsPeopleFill className="mb-6 text-6xl opacity-50" />
          <h3 className="mb-3 text-2xl font-bold text-gray-800">
            Contribuciones y apoyo por parte de la comunidad{" "}
          </h3>
          <p className="text-lg text-gray-600">
            Consecuencia de nuestra forma de hacer las cosas,{" "}
          </p>
          <Link href="/noticias/donacion-de-polea-para-la-bomba-de-vacio-para-el-movil-ccf-b34">
            <a className="relative z-10 px-6 mt-6 btn ">Ver contribuciones</a>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center p-6 text-center bg-white border-2 border-red-600 shadow-2xl">
          <GiFireAxe className="mb-6 text-6xl opacity-50" />
          <h3 className="mb-3 text-2xl font-bold text-gray-800">
            Equipamiento, Unidades y <br /> materiales
          </h3>
          <p className="text-lg text-gray-600">
            Capacitación que asegure un alto desempeño en las emergencias
          </p>
          <Link href="/noticias/spai-embarca-los-nuevos-ccf-para-lujan">
            <a className="relative z-10 px-6 mt-6 btn ">Ver galería</a>
          </Link>
        </div>
      </div>
      <div className="fixed inset-0 z-0 hidden bg-fixed bg-no-repeat bg-cover opacity-50 md:block" style={{backgroundImage: "url(https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-9/38462453_2117591731822746_8157056370223349760_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=7AV-Wmrbrz8AX9UJzqE&_nc_oc=AQlrgUcY2c1lvt75N_lui9PpapK8AhSsnXvbnOqiJob2l1TvDXBBHU6WVfRf2p-N8cU&_nc_ht=scontent.faep8-1.fna&oh=c13755abaab5904142fe79d83f85d3e4&oe=606945C9)"}}>
       
      </div>
    </div>
  )
}
