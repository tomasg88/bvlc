import Image from "next/image";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import HeaderLink from "./headerLink";

export default function Header() {

  return (
    <header className="flex flex-col w-full mx-auto bg-gray-100 border-b-2 border-red-400 shadow-2xl">
      <div className="w-full py-2 text-white bg-red-700 shadow-xl">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <b>
            info@bomberoslujanmza.com.ar
          </b>
          <div className="flex items-center text-2xl">
            <div className="mr-3 text-base">0261-498-0999</div>
            <AiOutlineFacebook className="mr-3" />
            <AiOutlineInstagram />
          </div>
        </div>
      </div>
      <div>
        <a className="flex flex-col items-center justify-center font-sans text-xl font-bold transform -translate-y-7">
          <Image
            src="/logo-bomberos-cuyo.png"
            alt="Picture of the author"
            width={100}
            height={126}
          />
          <span className="text-lg font-bold text-red-500 uppercase">
            Bomberos Voluntarios de Luján de Cuyo
          </span>
        </a>
      </div>
      <nav className="flex items-center justify-center bg-gray-100 border-t border-gray-500">
        <HeaderLink url="/" title="Inicio" />
        <HeaderLink url="/servicios" title="Servicios" />
        <HeaderLink url="/noticias" title="Noticias" />
        <HeaderLink url="/cuerpo-activo" title="Cuerpo Activo" />
        <HeaderLink url="/comision-directiva" title="Comisión Directiva" />
        <HeaderLink url="/contacto" title="Contacto" />
      </nav>
    </header>
  );
}
