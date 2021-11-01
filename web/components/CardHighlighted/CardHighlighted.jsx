import { urlForImage } from "lib/sanity";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { sanityConfig } from "lib/config";
import styles from "./CardHighlighted.module.scss";
import Fade from "react-reveal/Fade";
import { sanityImagePropType } from "utils/sanityPropType";
import PropTypes from "prop-types";

function CardHighlighted({ title, slug, mainImage }) {
    const imageProps = useNextSanityImage(sanityConfig, mainImage, {
        imageBuilder: () => urlForImage(mainImage).height(300).width(900),
    });

    return (
        <Fade>
            <div className={styles.root}>
                <Link href={`/noticias/${slug}`}>
                    <a aria-label={title}>
                        <Image
                            className={styles.image}
                            height={300}
                            width={900}
                            alt={`Cover Image for ${title}`}
                            {...imageProps}
                        />
                        <p className={styles.title}>{title}</p>
                    </a>
                </Link>
            </div>
        </Fade>
    );
}

CardHighlighted.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    mainImage: sanityImagePropType,
};

export default CardHighlighted;
