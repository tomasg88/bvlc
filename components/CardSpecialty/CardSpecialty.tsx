import React, { FC } from 'react';
import Image from 'next/image';
import { MdPhotoCamera } from 'react-icons/md';
import BlockContent from '@sanity/block-content-to-react';
import styles from './CardSpecialty.module.scss';
import { useNextSanityImage } from 'next-sanity-image';
import { sanityConfig } from 'lib/config';
import SanityImage from 'components/SanityImage/SanityImage';
import Zoom from 'react-reveal/Zoom';
import { Specialty } from 'types/News';

const CardSpecialty: FC<Specialty> = ({ cover, title, body, onClick, members = [] }) => {
  const { src, loader } = useNextSanityImage(sanityConfig, cover);

  return (
    <Zoom>
      <div className={styles.root}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.mainContent}>
          <div className={styles.imageContainer}>
            <Image
              loader={loader}
              src={src}
              className={styles.img}
              onClick={onClick}
              alt={title}
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className={styles.content}>
            <BlockContent
              blocks={body}
              className={styles.description}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              imageOptions={{ w: 1200, fit: 'fill' }}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
            <h4 className={styles.membersTitle}>Integrantes</h4>
            <div className={styles.membersContainer}>
              {members.map((m) => (
                <div key={m._id} className={styles.memberPicture}>
                  <SanityImage src={m.image} fill className={styles.picture} />
                </div>
              ))}
            </div>
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

export default CardSpecialty;
