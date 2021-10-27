import React from 'react';
import Image from 'next/image';
import { MdPhotoCamera } from 'react-icons/md';
import styles from './AlbumCover.module.scss';
import PropTypes from 'prop-types';
import { sanityImagePropType } from 'utils/sanityPropType';
import { sanityConfig } from 'lib/config';
import { useNextSanityImage } from 'next-sanity-image';

const AlbumCover = ({ cover, title, description, album, selectAlbum }) => {
    const { src, loader } = useNextSanityImage(sanityConfig, cover);

    return (
        <div className={styles.root}>
            <div className={styles.imageContainer}>
                <Image
                    loader={loader}
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    className={styles.img}
                />
            </div>
            <div
                onClick={() => selectAlbum(album)}
                className={styles.infoContainer}
            >
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.ctaButton}>
                    <MdPhotoCamera className={styles.icon} />
                    <span className={styles.buttonText}>Abrir galería</span>
                </div>
            </div>
        </div>
    );
};

AlbumCover.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    selectAlbum: PropTypes.func.isRequired,
    cover: sanityImagePropType.isRequired,
    album: PropTypes.arrayOf(sanityImagePropType).isRequired,
};

export default AlbumCover;
