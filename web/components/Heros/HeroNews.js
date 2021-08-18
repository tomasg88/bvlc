import BackgroundImage from '../backgroundImage';
import { BG_CONSTANTS } from '../../utils/constants';
import styles from './HeroNews.module.scss';

export default function HeroNews() {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Últimas noticias</h1>
            <BackgroundImage image={BG_CONSTANTS.news} opacity={20} />
        </div>
    );
}
