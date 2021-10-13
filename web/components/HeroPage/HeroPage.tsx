import BackgroundImage from "../BackgroundImage/BackgroundImage";
import { BG_CONSTANTS } from "utils/constants";
import styles from "./HeroPage.module.scss";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";
import { FunctionComponent, ReactElement } from "react";

interface IProps {
    title: string;
    image: string;
}

const HeroPage: FunctionComponent<IProps> = ({
    title,
    image,
}): ReactElement => (
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
    title: "",
    image: BG_CONSTANTS.team,
};

HeroPage.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
};

export default HeroPage;
