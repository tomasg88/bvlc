import { FunctionComponent, ReactElement } from 'react';
import HeaderLink from '../HeaderLink/HeaderLink';
import styles from './NavCategorias.module.scss';

const NavCategorias: FunctionComponent = (): ReactElement => (
  <div className={styles.tabs}>
    <HeaderLink href="/categoria/contribuciones" title="Contribuciones" />
    <HeaderLink href="/categoria/comunidad" title="Comunidad" />
    <HeaderLink href="/categoria/equipamiento" title="Equipamiento" />
  </div>
);

export default NavCategorias;
