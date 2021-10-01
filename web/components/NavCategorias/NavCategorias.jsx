import HeaderLink from '../HeaderLink/HeaderLink';
import styles from './NavCategorias.module.scss';

export default function NavCategorias() {
    return (
        <div className={styles.tabs}>
            <HeaderLink
                url="/categoria/contribuciones"
                title="Contribuciones"
            />
            <HeaderLink url="/categoria/comunidad" title="Comunidad" />
            <HeaderLink url="/categoria/equipamiento" title="Equipamiento" />
        </div>
    );
}
