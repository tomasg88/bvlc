import BackgroundImage from '../BackgroundImage/BackgroundImage';
import { BG_CONSTANTS } from 'utils/constants';
import NavInstitucional from '../NavInstitucional/NavInstitucional';
import styles from './HeroInstitucional.module.scss';
import Fade from 'react-reveal/Fade';

export default function HeroInstitucional({ title, image, opacity }) {
    return (
        <div>
            <div className={styles.container}>
                <Fade cascade>
                    <h1 className={styles.title}>{title}</h1>
                </Fade>

                {image ? (
                    <BackgroundImage
                        image={image}
                        opacity={opacity ? opacity : '20'}
                    />
                ) : (
                    <BackgroundImage image={BG_CONSTANTS.team} opacity={20} />
                )}
            </div>
            <div className={styles.tabs}>
                <NavInstitucional />
            </div>
        </div>
    );
}
