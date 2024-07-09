import { FC } from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ text, href, target = '_self', onClick }): JSX.Element => (
  <div className={styles.root}>
    <Link href={href} target={target} className={styles.text} onClick={onClick}>
      {text}
    </Link>
  </div>
);

export default Button;
