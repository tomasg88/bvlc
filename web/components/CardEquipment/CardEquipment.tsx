import React, { FC } from 'react';
import Image from 'next/image';
import { MdPhotoCamera } from 'react-icons/md';
import BlockContent from '@sanity/block-content-to-react';
import styles from './CardEquipment.module.scss';
import PropTypes from 'prop-types';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from 'lib/config';
import { sanityImagePropType } from 'utils/sanityPropType';
import { Equipment } from 'interfaces/News';

const CardEquipment: FC<Equipment> = ({
    body,
    cover,
    onClick,
    title,
}): JSX.Element => {
    const { src, loader } = useNextSanityImage(sanityConfig, cover);
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    loader={loader}
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    className={styles.img}
                    onClick={onClick}
                    alt={title}
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
};

CardEquipment.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    cover: sanityImagePropType.isRequired,
};

export default CardEquipment;
