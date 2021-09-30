import Link from 'next/link';
import { ROUTES } from 'utils/constants';
import styles from './OffcanvasNavigation.module.scss';
import PropTypes from 'prop-types';

const OffcanvasNavigation = ({ closeMenu }) => (
    <nav className={styles.root}>
        {ROUTES.map((route, i) => {
            return (
                <Link href={route.slug} key={route.slug}>
                    <a
                        className={styles.link}
                        onClick={closeMenu}
                        alt={route.ariaLabel}
                        title={route.ariaLabel}
                        aria-label={route.ariaLabel}
                    >
                        {route.title}
                    </a>
                </Link>
            );
        })}
    </nav>
);

OffcanvasNavigation.propTypes = {
    closeMenu: PropTypes.func.isRequired,
};

export default OffcanvasNavigation;
