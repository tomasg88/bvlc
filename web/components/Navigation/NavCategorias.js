import HeaderLink from '../Navigation/HeaderLink';
import styles from './NavCategorias.module.css';

export default function HeroInstitucional() {
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
