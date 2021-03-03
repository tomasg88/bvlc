import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-6xl p-3 mx-auto bg-white">
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
        <Link href="/news">
          <a>Noticias</a>
        </Link>
      </nav>
    </header>
  );
}
