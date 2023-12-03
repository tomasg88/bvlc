import BackgroundImage from '../BackgroundImage/BackgroundImage';
import { BG_CONSTANTS } from 'utils/constants';
import styles from './HeroPage.module.scss';
import Fade from 'react-reveal/Fade';
import { FC, ReactElement } from 'react';

interface HeroPageProps {
  title: string;
  image: string;
}

const HeroPage: FC<HeroPageProps> = ({ title, image }): ReactElement => (
  <div className={styles.root}>
    <div className={styles.container}>
      <Fade cascade>
        <h1 className={styles.title}>{title}</h1>
      </Fade>

      <BackgroundImage image={image} />
    </div>
  </div>
);

HeroPage.defaultProps = {
  title: '',
  image: BG_CONSTANTS.team,
};

export default HeroPage;
