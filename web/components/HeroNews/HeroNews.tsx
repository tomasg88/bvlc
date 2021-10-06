import BackgroundImage from "../BackgroundImage/BackgroundImage";
import { BG_CONSTANTS } from "utils/constants";
import styles from "./HeroNews.module.scss";
import { FunctionComponent, ReactElement } from "react";

const HeroNews: FunctionComponent = (): ReactElement => (
    <div className={styles.root}>
        <h1 className={styles.title}>Últimas noticias</h1>
        <BackgroundImage image={BG_CONSTANTS.news} opacity={20} />
    </div>
);

export default HeroNews;
