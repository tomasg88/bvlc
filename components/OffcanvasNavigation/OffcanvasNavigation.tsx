import Link from 'next/link';
import { ROUTES } from 'utils/constants';
import styles from './OffcanvasNavigation.module.scss';
import PropTypes from 'prop-types';
import { FunctionComponent, ReactElement } from 'react';

interface IProps {
  closeMenu: () => void;
}

const OffcanvasNavigation: FunctionComponent<IProps> = ({ closeMenu }): ReactElement => (
  <nav className={styles.root}>
    {ROUTES.map((route) => {
      return (
        <Link
          href={route.slug}
          key={route.slug}
          className={styles.link}
          onClick={closeMenu}
          title={route.ariaLabel}
          aria-label={route.ariaLabel}
        >
          {route.title}
        </Link>
      );
    })}
  </nav>
);

OffcanvasNavigation.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default OffcanvasNavigation;
