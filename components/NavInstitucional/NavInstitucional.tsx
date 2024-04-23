import { FunctionComponent, ReactElement } from 'react';
import HeaderLink from '../HeaderLink/HeaderLink';

const NavInstitucional: FunctionComponent = (): ReactElement => (
  <>
    <HeaderLink href="/institucional" title="Historia" />
    <HeaderLink href="/libro-amigos" title="2 Amigos por un Sueño" />
    <HeaderLink href="/comision-directiva" title="Comisión Directiva" />
    <HeaderLink href="/cuerpo-activo" title="Cuerpo Activo" />
    <HeaderLink href="/equipamiento" title="Equipamiento" />
    <HeaderLink href="/especialidades" title="Especialidades" />
  </>
);

export default NavInstitucional;
