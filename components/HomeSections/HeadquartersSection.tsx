import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const CTA_CLASSNAME =
  'z-10 block px-4 py-2 mt-6 text-base font-bold text-center text-white bg-red-700 border-b-4 border-red-700 rounded cursor-pointer hover:bg-red-600 hover:border-red-800';

type CardContent = {
  ctaText: string;
  description: string;
  href: string;
  title: string;
};

const CARDS: CardContent[] = [
  {
    title: '',
    href: '',
    description: '',
    ctaText: '',
  },
];

const SectionCard = ({ ctaText, description, href, title }: CardContent) => (
  <Fade>
    <div className="bg-white w-80 lg:grid-cols-3 sm:grid-cols-2 rounded-lg p-6">
      <p className="text-lg">{title}</p>
      <p>{description}</p>
      <Link href={href} className={CTA_CLASSNAME}>
        {ctaText}
      </Link>
    </div>
  </Fade>
);

export const HeadquarterSection = () => (
  <>
    {/* <div className="bg-gradient-to-b to-gray-400 from-gray-100 mt-20">&nbsp;</div> */}
    <div className="block w-full bg-gray-900 pt-12 pb-24 mx-auto md:flex-row border-t-2 border-red-700 shadow-2xl">
      {/* content */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-light text-white mb-12">
          Conocé más sobre nosotros!
        </h2>
        <div className="flex justify-between items-center mx-auto">
          <SectionCard
            ctaText="Ver más"
            description="Mirá las salas de nuestro cuartel donde trabajamos día a día"
            title={'Infraestructura'}
            href={'/infraestructura'}
          />
          <SectionCard
            ctaText="Ver más"
            description="El equipamiento con el que contamos para proteger y servir a nuestra comunidad"
            title={'Equipamiento'}
            href={'/equipamiento'}
          />
          <SectionCard
            ctaText="Conocelos"
            description="Contamos con el mejor talento para proteger a nuestra comunidad."
            title={'Cuerpo Activo'}
            href={'/cuerpo-activo'}
          />
        </div>
      </div>
    </div>
  </>
);
