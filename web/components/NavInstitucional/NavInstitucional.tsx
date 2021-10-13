import { FunctionComponent, ReactElement } from "react";
import HeaderLink from "../HeaderLink/HeaderLink";

const NavInstitucional: FunctionComponent = (): ReactElement => (
    <>
        <HeaderLink url="/comision-directiva" title="Comisión Directiva" />
        <HeaderLink url="/cuerpo-activo" title="Cuerpo Activo" />
        <HeaderLink url="/equipamiento" title="Equipamiento" />
        <HeaderLink url="/institucional" title="Historia" />
    </>
);

export default NavInstitucional;
