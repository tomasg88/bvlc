import Image from 'next/image';
import { FC, ReactElement } from 'react';
import styles from './BackgroundImage.module.scss';

interface BackgroundImageProps {
  title: string;
  image: string;
}

const BackgroundImage: FC<BackgroundImageProps> = ({ title = '', image }): ReactElement => (
  <div className={styles.root}>
    <Image alt={title} className={styles.image} src={image} title={title} fill sizes="100vw" />
  </div>
);

export default BackgroundImage;
