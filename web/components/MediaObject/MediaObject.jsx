import { useCallback } from 'react';
import { urlForImage } from 'lib/sanity';
import PropTypes from 'prop-types';
import { sanityImagePropType } from 'utils/sanityPropType';
import styles from './MediaObject.module.scss';

function MediaObject({ name, description, image }) {
    const getImage = useCallback(() => {
        if (!image) return '/no-profile-image.png';
        else return urlForImage(image).height(100).width(100).url();
    }, [image]);

    return (
        <figure id="hero" className={styles.root}>
            <img
                alt={name}
                className={styles.image}
                src={getImage()}
                style={{ height: '100px', width: '100px' }}
            />

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
