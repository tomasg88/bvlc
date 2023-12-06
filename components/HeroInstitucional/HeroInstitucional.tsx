import BackgroundImage from '../BackgroundImage/BackgroundImage';
import { BG_CONSTANTS } from 'utils/constants';
import NavInstitucional from '../NavInstitucional/NavInstitucional';
import styles from './HeroInstitucional.module.scss';
import Fade from 'react-reveal/Fade';
import { FC, ReactElement } from 'react';

interface HeroInsttitucionalProps {
  title?: string;
  image: string;
}

const HeroInstitucional: FC<HeroInsttitucionalProps> = ({ title, image }): ReactElement => (
  <div className={styles.root}>
    <div className={styles.container}>
      <Fade cascade>
        <h1 className={styles.title}>{title}</h1>
      </Fade>
      <BackgroundImage image={image || BG_CONSTANTS.team} />
    </div>
    <div className={styles.tabs}>
      <NavInstitucional />
    </div>
  </div>
);

export default HeroInstitucional;
