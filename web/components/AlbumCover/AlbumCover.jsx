import React from 'react';
import { urlForImage } from 'lib/sanity';
import { MdPhotoCamera } from 'react-icons/md';
import styles from './AlbumCover.module.scss';

export default function AlbumCover({
    cover,
    title,
    description,
    album,
    selectAlbum,
}) {
    return (
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
}
