import PropTypes from 'prop-types';
import { sanityImagePropType } from 'utils/sanityPropType';
import styles from './MediaObject.module.scss';
import { sanityConfig } from 'lib/config';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';

function MediaObject({ name, description, image }) {
    const NO_PROFILE_IMAGE = '/no-profile-image.png';
    let imageProps = {};
    try {
        imageProps = useNextSanityImage(sanityConfig, image);
    } catch (error) {
        imageProps = { src: NO_PROFILE_IMAGE };
    }

    return (
        <figure id="hero" className={styles.root}>
            <div className={styles.imageContainer}>
                <Image
                    src={imageProps.src}
                    layout="fixed"
                    height={100}
                    width={100}
                    objectFit="cover"
                    alt={name}
                    className={styles.image}
                />
            </div>

            <div className={styles.dataContainer}>
                <figcaption className={styles.data}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.description}>{description}</div>
                </figcaption>
            </div>
        </figure>
    );
}

MediaObject.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: sanityImagePropType,
};

export default MediaObject;
