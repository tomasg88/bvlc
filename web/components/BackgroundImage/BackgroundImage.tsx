import Image from 'next/legacy/image';
import PropTypes from 'prop-types';
import { FunctionComponent, ReactElement } from 'react';
import styles from './BackgroundImage.module.scss';

interface IProps {
  title?: string;
  image: string;
}

const BackgroundImage: FunctionComponent<IProps> = ({ title, image }): ReactElement => (
  <div className={styles.root}>
    <Image alt={title} layout="fill" className={styles.image} src={image} title={title} />
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
