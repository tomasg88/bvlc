import { HomeSectionCard, HomeSectionCardProps } from 'components/HomeSections/HomeSectionCard';

export const DEFAULT_PAGE_TITLE = 'Bomberos Voluntarios de Luján de Cuyo';
export const DEFAULT_PAGE_DESCRIPTION =
  'Sitio web oficial de los Bomberos Voluntarios de Luján de Cuyo, Mendoza';
export const DEFAULT_PAGE_URL = 'https://bomberoslujandecuyo.org.ar';
export const DEFAULT_PAGE_IMAGE = '/logo-bomberos-cuyo.png';

export const BG_CONSTANTS = {
  team: '/web/team.jpg',
  academy: '/web/academia-lujan-cuyo.jpg',
  station: '/web/estacion-bomberos-lujan-cuyo.jpg',
  trucks: '/web/camiones.jpg',
  news: '/web/equipo.jpg',
  doors: '/web/doors.jpg',
  iram: '/web/iram-bvlc.png',
  sello_iram: '/web/sello-iram.png',
  iram_pdf: '/web/CUERPO-BOMBEROS-VOLUNTARIOS-LUJAN-DE-CUYO.pdf',
  escudo_spai: '/web/escudo-spai.png',
  spai_pdf: '/web/historia-de-spai.pdf',
  index_1: '/web/camion-b34.jpg',
  index_3: '/web/rescate-montana.jpg',
};

export const MAPS_URL =
  'https://www.google.com/maps/embed?pb=!4v1617073836651!6m8!1m7!1sJDrb8eUKNjmWiFLuO3zmFw!2m2!1d-33.03411810101265!2d-68.89872557060163!3f256.0376351254512!4f1.281970502218357!5f1.5334771114843995';

export const ROUTES = [
  {
    title: 'Inicio',
    slug: '/',
    ariaLabel: 'Bomberos voluntarios - pagina de inicio',
  },
  {
    title: 'Historia',
    slug: '/institucional',
    ariaLabel: 'Ver Historia',
  },
  {
    title: '2 Amigos por un Sueño',
    slug: '/libro-amigos',
    ariaLabel: 'Ver libro 2 Amigos por un Sueño',
  },
  {
    title: 'Cuerpo Activo',
    slug: '/cuerpo-activo',
    ariaLabel: 'Ver Cuerpo Activo',
  },
  {
    title: 'Comisión Directiva',
    slug: '/comision-directiva',
    ariaLabel: 'Ver Comisión Directiva',
  },
  {
    title: 'Equipamiento',
    slug: '/equipamiento',
    ariaLabel: 'Ver equipamiento',
  },
  {
    title: 'Especialidades',
    slug: '/especialidades',
    ariaLabel: 'Ver especialidades',
  },
  {
    title: 'Noticias',
    slug: '/noticias',
    ariaLabel: 'Ver noticias',
  },
  {
    title: 'Academia',
    slug: '/academia',
    ariaLabel: 'Ver Academia',
  },
  {
    title: 'Galería',
    slug: '/galeria',
    ariaLabel: 'Ver galeria fotográfica',
  },
  {
    title: 'Donaciones',
    slug: '/donaciones',
    ariaLabel: 'Ver donaciones',
  },
  {
    title: 'Contacto',
    slug: '/contacto',
    ariaLabel: 'Ver datos contacto',
  },
];

export const ACADEMY_MEMBERS = [
  {
    title: 'DIRECTOR',
    name: 'Adrián Gil',
  },
  {
    title: 'Subdirector',
    name: 'Federico Brian',
  },
  {
    title: 'Coordinador Cadetes',
    name: 'Fernando Cicilotto',
  },
  {
    title: 'Coordinador Aspirantes',
    name: 'Gastón Goncalvez',
  },
  {
    title: 'Coordinador Bomberos',
    name: 'Marcelo Rosales',
  },
  {
    title: 'Departamento de Trauma',
    name: 'Franco Pifaretti',
  },
];

// This list feeds both Sanity and Website
export const RANKS = [
  { title: 'Jefe del Cuerpo', value: 'jefe-del-cuerpo' },
  { title: '2do. Jefe del Cuerpo', value: 'segundo-jefe-del-cuerpo' },
  { title: 'Comandante General', value: 'comandante-general' },
  { title: 'Comandante Mayor', value: 'comandante-mayor' },
  { title: 'Comandante', value: 'comandante' },
  { title: 'Subcomandante', value: 'subcomandante' },
  { title: 'Oficial Principal', value: 'oficial-principal' },
  { title: 'Oficial Inspector', value: 'oficial-inspector' },
  { title: 'Oficial Ayudante', value: 'oficial-ayudante' },
  { title: 'Suboficial Mayor', value: 'suboficial-mayor' },
  { title: 'Suboficial Principal', value: 'suboficial-principal' },
  { title: 'Suboficial Primero', value: 'suboficial-primero' },
  { title: 'Sargento Primero', value: 'sargento-primero' },
  { title: 'Sargento', value: 'sargento' },
  { title: 'Cabo Primero', value: 'cabo-primero' },
  { title: 'Cabo', value: 'cabo' },
  { title: 'Bombero', value: 'bombero' },
  { title: 'Aspirante', value: 'aspirante' },
];

// This list feeds both Sanity and Website
export const POSITIONS = [
  { title: 'Presidente', value: 'presidente' },
  { title: 'Vice Presidente', value: 'vice-presidente' },
  { title: 'Secretario', value: 'secretario' },
  { title: 'Pro secretario', value: 'pro-secretario' },
  { title: 'Tesorero', value: 'tesorero' },
  { title: 'Pro tesorero', value: 'pro-tesorero' },
  { title: 'Vocal Titular', value: 'vocal-titular' },
  { title: 'Vocal Suplente', value: 'vocal-suplente' },
  { title: 'Rev. de Ctas. Titular', value: 'cuentas-titular' },
  { title: 'Rev. de Ctas. Suplente', value: 'cuentas-suplente' },
];

// Used when there is no profile image of a member
export const NO_PROFILE_IMAGE = '/no-profile-image.png';

//
export const HOME_SECTION_CARDS_CONTENT: HomeSectionCardProps[] = [
  {
    background: BG_CONSTANTS.station,
    ctaText: 'Ver más',
    description: 'Mirá las salas de nuestro cuartel donde trabajamos día a día',
    href: '/infraestructura',
    title: 'Infraestructura',
  },
  {
    background: BG_CONSTANTS.trucks,
    ctaText: 'Ver más',
    description: 'El equipamiento con el que contamos para proteger y servir a nuestra comunidad',
    href: '/equipamiento',
    title: 'Equipamiento',
  },
  {
    background: BG_CONSTANTS.team,
    ctaText: 'Conocelos',
    description: 'Contamos con el mejor talento para proteger a nuestra comunidad.',
    href: '/cuerpo-activo',
    title: 'Cuerpo Activo',
  },
];
