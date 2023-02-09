import Image from 'next/image';
import PropTypes from 'prop-types';
import { FunctionComponent, ReactElement } from 'react';
import styles from './BackgroundImage.module.scss';

interface IProps {
  title?: string;
  image: string;
}

const BackgroundImage: FunctionComponent<IProps> = ({ title, image }): ReactElement => (
  <div className={styles.root}>
    <Image alt={title} className={styles.image} src={image} title={title} fill sizes="100vw" />
  </div>
);

BackgroundImage.defaultProps = {
  title: '',
};

BackgroundImage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default BackgroundImage;
