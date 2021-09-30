import BackgroundImage from '../BackgroundImage/BackgroundImage';
import { BG_CONSTANTS } from 'utils/constants';
import NavInstitucional from '../NavInstitucional/NavInstitucional';
import styles from './HeroInstitucional.module.scss';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const HeroInstitucional = ({ title, image, opacity }) => (
    <div>
        <div className={styles.container}>
            <Fade cascade>
                <h1 className={styles.title}>{title}</h1>
            </Fade>

            <BackgroundImage
                image={image || BG_CONSTANTS.team}
                opacity={opacity || 20}
            />
        </div>
        <div className={styles.tabs}>
            <NavInstitucional />
        </div>
    </div>
);

HeroInstitucional.propTypes = {
    opacity: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string.isRequired,
};

export default HeroInstitucional;