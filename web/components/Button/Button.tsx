import PropTypes from 'prop-types';
import { FC } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';
import { IButton } from 'interfaces/News';

const Button: FC<IButton> = ({ text, href, target, onClick }): JSX.Element => (
  <div className={styles.root}>
    <Link href={href}>
      <a target={target} className={styles.text} onClick={onClick}>
        {text}
      </a>
    </Link>
  </div>
);

Button.defaultProps = {
  target: '_self',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  onClick: PropTypes.func,
};

export default Button;
