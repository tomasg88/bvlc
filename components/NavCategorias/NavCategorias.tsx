import { FunctionComponent, ReactElement } from 'react';
import HeaderLink from '../HeaderLink/HeaderLink';
import styles from './NavCategorias.module.scss';

const NavCategorias: FunctionComponent = (): ReactElement => (
  <div className={styles.tabs}>
    <HeaderLink url="/categoria/contribuciones" title="Contribuciones" />
    <HeaderLink url="/categoria/comunidad" title="Comunidad" />
    <HeaderLink url="/categoria/equipamiento" title="Equipamiento" />
  </div>
);

export default NavCategorias;
