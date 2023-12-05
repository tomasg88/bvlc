import { FC } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';
import { IButton } from 'types/News';

const Button: FC<IButton> = ({ text, href, target, onClick }): JSX.Element => (
  <div className={styles.root}>
    <Link href={href} target={target} className={styles.text} onClick={onClick}>
      {text}
    </Link>
  </div>
);

Button.defaultProps = {
  target: '_self',
};

export default Button;
