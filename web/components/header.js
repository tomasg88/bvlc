import Link from "next/link";
import Headroom from "react-headroom";

export default function Header() {
  return (
    <Headroom disableInlineStyles>
      <header className="w-full p-3 mx-auto bg-white border-b-2 border-red-400 shadow-2xl">
        <Link href="/">
          <a className="font-sans text-xl font-bold">
            Bomberos Voluntarios <br />
            de Luján de Cuyo
          </a>
        </Link>
        <nav>
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/noticias">
            <a>Noticias</a>
          </Link>
          <Link href="/cuerpo-activo">
            <a>Cuerpo activo</a>
          </Link>
          <Link href="/comision-directiva">
            <a>Comisión directiva</a>
          </Link>
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>
        </nav>
      </header>
    </Headroom>
  );
}
