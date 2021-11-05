import { FunctionComponent, ReactElement } from 'react';
import HeaderLink from '../HeaderLink/HeaderLink';

const NavInstitucional: FunctionComponent = (): ReactElement => (
    <>
        <HeaderLink url="/institucional" title="Historia" />
        <HeaderLink url="/libro-amigos" title="2 Amigos por un Sueño" />
        <HeaderLink url="/comision-directiva" title="Comisión Directiva" />
        <HeaderLink url="/cuerpo-activo" title="Cuerpo Activo" />
        <HeaderLink url="/equipamiento" title="Equipamiento" />
        <HeaderLink url="/especialidades" title="Especialidades" />
    </>
);

export default NavInstitucional;
