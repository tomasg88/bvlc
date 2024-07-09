import React, { FC } from 'react';
import { MdClose } from 'react-icons/md';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import styles from './Gallery.module.scss';
import SanityImage from 'components/SanityImage/SanityImage';
import { ImageAsset } from '@sanity/types';
import classNames from 'classnames';
import { useStateList } from 'react-use';
interface GalleryProps {
  onClose: () => void;
  list: ImageAsset[];
}

const Gallery: FC<GalleryProps> = ({ onClose, list }): JSX.Element => {
  const { currentIndex, prev: prevImg, next: nextImg, setStateAt } = useStateList(list);

  return (
    <Fade>
      <div id="gallery-container" style={{ zIndex: 1000 }} className={styles.root}>
        <div id="close" className={styles.closeButtonContainer}>
          <MdClose onClick={onClose} className={styles.closeIcon} />
        </div>
        <div id="content" className={styles.contentContainer}>
          <div id="main-image" className={styles.mainImageContainer}>
            {list[currentIndex] && (
              <SanityImage
                src={list[currentIndex]}
                fill
                sizes="100vw"
                style={{
                  objectFit: 'contain',
                }}
                className={styles.image}
                quality={100}
                priority
              />
            )}
          </div>
          <div
            id="previous"
            onClick={prevImg}
            className={`${styles.arrowContainer} ${styles.previous}`}
          >
            <AiOutlineArrowLeft className={styles.arrow} />
          </div>
          <div id="next" onClick={nextImg} className={`${styles.arrowContainer} ${styles.next}`}>
            <AiOutlineArrowRight className={styles.arrow} />
          </div>
          <div id="bottom-image-list" className={styles.imageListContainer}>
            {list.map((img, index) => (
              <div
                key={img._id}
                className={classNames(styles.smallImage, index === currentIndex && styles.active)}
              >
                <SanityImage
                  src={img}
                  width={60}
                  height={60}
                  fixed="true"
                  style={{
                    objectFit: 'cover',
                  }}
                  onClick={() => setStateAt(index)}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Gallery;
