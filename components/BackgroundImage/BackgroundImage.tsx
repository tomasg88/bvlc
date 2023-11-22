import Image from 'next/image';
import { FunctionComponent, ReactElement } from 'react';
import styles from './BackgroundImage.module.scss';

interface IProps {
  title: string;
  image: string;
}

const BackgroundImage: FunctionComponent<IProps> = ({ title = '', image }): ReactElement => (
  <div className={styles.root}>
    <Image alt={title} className={styles.image} src={image} title={title} fill sizes="100vw" />
  </div>
);

export default BackgroundImage;
