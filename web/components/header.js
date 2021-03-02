import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>
        Bomberos Voluntarios <br />
        de Luján de Cuyo
      </h1>
      <nav>
        <Link href="/">
          <a>Inicio</a>
        </Link>
        <Link href="/news">
          <a>Novedades</a>
        </Link>
      </nav>
    </header>
  );
}
