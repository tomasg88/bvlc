import React from 'react';
import { urlForImage } from 'lib/sanity';
import { MdPhotoCamera } from 'react-icons/md';
import styles from './AlbumCover.module.scss';
import PropTypes from 'prop-types';

const AlbumCover = ({ cover, title, description, album, selectAlbum }) => (
    <div className={styles.root}>
        <div className={styles.imageContainer}>
            <img
                onClick={() => selectAlbum(album)}
                src={urlForImage(cover).url()}
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

AlbumCover.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    selectAlbum: PropTypes.func.isRequired,
};

export default AlbumCover;
