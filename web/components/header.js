import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-3 text-white bg-red-500">
        <span>tel: 9999-4545 (Administración)</span>{" "}
        <span>secretaria@bvlc.com.ar</span>
      </div>
      <header className="w-full p-3 mx-auto bg-white border-b-2 border-red-400 shadow-2xl">
        <Link href="/">
          <a className="font-sans text-xl font-bold">
            Bomberos Voluntarios <br />
            de Luján de Cuyo
          </a>
        </Link>
        <nav>
          <Link href="/">
            <a >Inicio</a>
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
    </div>
  );
}
