import { FiPhone } from "react-icons/fi";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "lib/sanity";
import { BG_CONSTANTS, DEFAULT_PAGE_TITLE } from "utils/constants";
import PropTypes from "prop-types";
import CarouselUI from "./CarouselUI/CarouselUI";
import styles from "./HeroHomeCarousel.module.scss";
import { FunctionComponent, ReactElement } from "react";
import { sanityImagePropType } from "utils/sanityPropType";

interface IProps {
    arrows: boolean;
    images: any[];
}

interface ICarouselProps {
    defaultWait: number;
    maxTurns: number;
}

const HeroHomeCarousel: FunctionComponent<IProps> = ({
    arrows,
    images,
}): ReactElement => {
    const Carousel = makeCarousel((props) => (
        <CarouselUI arrows={arrows} {...props} />
    )) as FunctionComponent<ICarouselProps>;

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
                    {images.map((img) => (
                        <Fade key={img._key}>
                            <div>
                                <Image
                                    className={styles.image}
                                    width="1800"
                                    height="800"
                                    layout="fixed"
                                    src={urlForImage(img)
                                        .width(1800)
                                        .height(800)
                                        .url()}
                                />
                            </div>
                        </Fade>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

HeroHomeCarousel.defaultProps = {
    images: [],
};

HeroHomeCarousel.propTypes = {
    arrows: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(sanityImagePropType),
};

export default HeroHomeCarousel;
