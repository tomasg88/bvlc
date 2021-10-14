import { FiPhone, FiInfo } from "react-icons/fi";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { BG_CONSTANTS, DEFAULT_PAGE_TITLE } from "utils/constants";
import PropTypes from "prop-types";
import CarouselUI from "./CarouselUI/CarouselUI";
import styles from "./HeroHomeCarousel.module.scss";
import { ClassicComponent, FunctionComponent, ReactElement } from "react";

interface IProps {
    arrows: boolean;
}

interface ICarouselProps {
    defaultWait: number;
    maxTurns: number;
}

const HeroHomeCarousel: FunctionComponent<IProps> = ({
    arrows,
}): ReactElement => {
    const Carousel = makeCarousel((props) => (
        <CarouselUI arrows={arrows} {...props} />
    )) as FunctionComponent<ICarouselProps>;

    const PICTURES = [
        BG_CONSTANTS.index_1,
        BG_CONSTANTS.team,
        BG_CONSTANTS.index_3,
    ];

    return (
        <div className={styles.root}>
            <Fade cascade delay={900}>
                <p className={styles.legend}>Saber para servir</p>
            </Fade>
            <Fade delay={400}>
                <h1 className={styles.title}>{DEFAULT_PAGE_TITLE}</h1>
            </Fade>

            <div className={styles.buttonsContainer}>
                <Link href="/contacto">
                    <a className={styles.button}>
                        <FiPhone className={styles.icon} />
                        <div className={styles.text}>
                            {"Emergencias"}
                            <span className={styles.number}>
                                {"(0261) 498-0999"}
                            </span>
                        </div>
                    </a>
                </Link>
            </div>

            <div className={styles.carouselContainer}>
                <Carousel
                    defaultWait={4000}
                    maxTurns={99} /*wait for 1000 milliseconds*/
                >
                    {PICTURES.map((p) => (
                        <Fade key={p}>
                            <div>
                                <img
                                    className={styles.image}
                                    alt=""
                                    width="1800"
                                    height="800"
                                    src={p}
                                />
                            </div>
                        </Fade>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

HeroHomeCarousel.propTypes = {
    arrows: PropTypes.bool.isRequired,
};

export default HeroHomeCarousel;
