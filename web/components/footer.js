import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { DEFAULT_PAGE_TITLE, BG_CONSTANTS } from '../utils/constants';
import { Context } from './context';
import { useContext } from 'react';

export default function Footer() {
    const [rrss] = useContext(Context);
    return (
        <footer className={styles.footer}>
            <div className="flex flex-col w-full mx-auto max-w-7xl">
                <div className={styles.siteMap}>
                    <div className="flex flex-col mt-6 space-y-1 md:mt-0">
                        <span className="block mb-3 text-sm font-bold text-white uppercase">
                            Noticias
                        </span>
                        <Link href="/academia">Academia</Link>
                        <Link href="/galeria">Galería</Link>
                        {rrss.map((rs) => (
                            <a key={rs._id} href={rs.rrssUrl} target="_blank">
                                Ir a {rs.rrss}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col mt-6 space-y-1 md:mt-0">
                        <span className="block mb-3 text-sm font-bold text-white uppercase">
                            Institucional
                        </span>
                        <Link href="/institucional">Historia</Link>
                        <Link href="/comision-directiva">
                            Comisión Directiva
                        </Link>
                        <Link href="/cuerpo-activo">Cuerpo Activo</Link>
                        <Link href="/equipamiento">Equipamiento</Link>
                    </div>
                    <div className="flex flex-col mt-6 space-y-1 md:mt-0">
                        <span className="block mb-3 text-sm font-bold text-white uppercase">
                            Contacto
                        </span>
                        <Link href="/contacto">
                            Emergencias - 0261 498 0999
                        </Link>
                        <Link href="/contacto">
                            Admistración - 0261 498 6341
                        </Link>
                        <Link href="/contacto">
                            info@bomberoslujanmza.com.ar
                        </Link>
                    </div>
                    <Link href="/">
                        <a className="flex flex-col items-center justify-center w-32 mx-auto mt-12 md:mt-0">
                            <Image
                                src="/logo-bomberos-cuyo.png"
                                alt={DEFAULT_PAGE_TITLE}
                                width={80}
                                height={100}
                                objectFit="fill"
                                quality={80}
                                layout="fixed"
                            />
                            <span className="block mt-3 text-sm font-bold text-center text-blue-400 uppercase">
                                Bomberos Voluntarios <br /> de Luján de Cuyo
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col justify-start w-full px-6 pt-12 mx-auto space-y-4 border-t border-gray-700 md:px-0 md:flex-row md:border-none md:space-y-0 max-w-7xl">
                    <a
                        href={BG_CONSTANTS.spai_pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-start overflow-hidden duration-500 hover:opacity-80 "
                    >
                        <Image
                            src={BG_CONSTANTS.escudo_spai}
                            alt="Spai"
                            quality={80}
                            className="w-full h-auto mx-auto"
                            layout="intrinsic"
                            width={57}
                            height={74}
                        />
                        <span className="ml-3 text-lg font-bold text-gray-400 ">
                            En convenio de cooperación con fundación SPAI
                        </span>
                    </a>
                    <a
                        href={BG_CONSTANTS.iram_pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-start overflow-hidden duration-500 group md:ml-20 hover:opacity-80"
                    >
                        <Image
                            src={BG_CONSTANTS.iram}
                            alt="Certificado Iram"
                            quality={80}
                            className="w-full h-auto"
                            layout="intrinsic"
                            width={60}
                            height={74}
                        />
                        <span className="ml-3 text-lg font-bold text-gray-400 group-hover:text-gray-100">
                            Certificación Iram Referencial N 12
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
