import BackgroundImage from '../BackgroundImage/BackgroundImage';
import { BG_CONSTANTS } from 'utils/constants';
import styles from './HeroPage.module.scss';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const HeroPage = ({ title, image, opacity }) => (
    <div className={styles.root}>
        <div className={styles.container}>
            <Fade cascade>
                <h1 className={styles.title}>{title}</h1>
            </Fade>

            <BackgroundImage image={image} opacity={opacity} />
        </div>
    </div>
);

HeroPage.defaultProps = {
    opacity: 20,
    title: '',
    image: BG_CONSTANTS.team,
};

HeroPage.propTypes = {
    opacity: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
};

export default HeroPage;
