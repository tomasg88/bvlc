import BackgroundImage from '../backgroundImage';
import { BG_CONSTANTS } from '../../utils/constants';
import styles from './HeroPage.module.scss';
import Fade from 'react-reveal/Fade';

export default function HeroPage({ title, image, opacity }) {
    return (
        <div className={styles.root}>
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
        </div>
    );
}
