import React, { FC } from 'react';
import Image from 'next/image';
import { MdPhotoCamera } from 'react-icons/md';
import BlockContent from '@sanity/block-content-to-react';
import styles from './CardInfrastructure.module.scss';
import { SanityClientOrProjectDetails, useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from 'lib/sanity.config';
import Zoom from 'react-reveal/Zoom';
import { Infrastructure } from 'types/News';

type CardInfrastructure = {
  description: Infrastructure['description'];
  imageList: Infrastructure['imageList'];
  name: Infrastructure['name'];
  onClick: () => void;
};

const CardInfrastructure: FC<CardInfrastructure> = ({ description, imageList, name, onClick }) => {
  const cover = imageList[0];
  const { src, loader } = useNextSanityImage(sanityConfig as SanityClientOrProjectDetails, cover);
  console.log('{ description, imageList, name, onClick }', {
    description,
    imageList,
    name,
    onClick,
  });
  return (
    <Zoom>
      <div className={styles.root}>
        <h2 className={styles.title}>{name}</h2>

        <div className={styles.mainContent}>
          <div className={styles.imageContainer}>
            <Image
              loader={loader}
              src={src}
              className={styles.img}
              onClick={onClick}
              alt={name}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className={styles.content}>
            <BlockContent
              blocks={description}
              className={styles.description}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              imageOptions={{ w: 1200, fit: 'fill' }}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
          <div onClick={onClick} className={styles.action}>
            <MdPhotoCamera className="w-6 h-6 " />
            <span className="ml-3">Ver galería</span>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default CardInfrastructure;
