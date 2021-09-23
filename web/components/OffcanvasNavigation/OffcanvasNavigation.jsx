import Link from 'next/link';
import { ROUTES } from 'utils/constants';
import styles from './OffcanvasNavigation.module.scss';

const OffcanvasNavigation = ({ closeMenu }) => (
    <nav className="flex flex-col w-full pt-6">
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

export default OffcanvasNavigation;
