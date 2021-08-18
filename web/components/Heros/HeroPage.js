import BackgroundImage from '../backgroundImage';
import { BG_CONSTANTS } from '../../utils/constants';
import styles from './HeroPage.module.scss';
import Fade from 'react-reveal/Fade';

export default function HeroPage({ title, image, opacity }) {
    return (
        <div className={styles.hero}>
            <div className="relative py-40 overflow-hidden text-center text-white bg-gray-800 ">
                <Fade cascade>
                    <h1 className="relative z-10 font-sans text-4xl font-light md:text-6xl">
                        {title}
                    </h1>
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
