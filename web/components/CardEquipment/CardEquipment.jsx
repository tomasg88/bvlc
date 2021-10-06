import React from 'react';
import { urlForImage } from 'lib/sanity';
import { MdPhotoCamera } from 'react-icons/md';
import BlockContent from '@sanity/block-content-to-react';
import styles from './CardEquipment.module.scss';
import PropTypes from 'prop-types';

const CardEquipment = ({ cover, title, body, onClick }) => (
    <div className={styles.card}>
        <div className={styles.image}>
            <img
                className={styles.img}
                onClick={onClick}
                src={urlForImage(cover).url()}
            />
        </div>
        <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            <BlockContent
                blocks={body}
                className={styles.excerpt}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                imageOptions={{ w: 1200, fit: 'fill' }}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
            <div onClick={onClick} className={styles.action}>
                <MdPhotoCamera className="w-6 h-6 " />
                <span className="ml-3">Ver galería</span>
            </div>
        </div>
    </div>
);

CardEquipment.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CardEquipment;
