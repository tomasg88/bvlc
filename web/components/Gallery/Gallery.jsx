import React, { useCallback, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { urlForImage } from 'lib/sanity';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import styles from './Gallery.module.scss';
import PropTypes from 'prop-types';
import { sanityImagePropType } from 'utils/sanityPropType';

function Gallery({ onClose, list }) {
    const [mainIndex, setMainIndex] = useState(null);
    useEffect(() => {
        if (list && list.length > 0) {
            setMainIndex(0);
        }
    }, [list]);

    const previous = useCallback(() => {
        setMainIndex((prevState) =>
            prevState === 0 ? list.length - 1 : prevState - 1
        );
    }, [mainIndex]);

    const next = useCallback(() => {
        setMainIndex((prevState) =>
            prevState === list.length - 1 ? 0 : prevState + 1
        );
    }, [mainIndex]);

    return (
        <Fade>
            <div
                id="gallery-container"
                style={{ zIndex: 1000 }}
                className={styles.root}
            >
                <div id="close" className={styles.closeButtonContainer}>
                    <MdClose onClick={onClose} className={styles.closeIcon} />
                </div>
                <div id="content" className={styles.contentContainer}>
                    <div id="main-image" className={styles.mainImageContainer}>
                        <img
                            src={urlForImage(list[mainIndex]).url()}
                            className={styles.image}
                        />
                    </div>
                    <div
                        id="previous"
                        onClick={previous}
                        className={`${styles.arrowContainer} ${styles.previous}`}
                    >
                        <AiOutlineArrowLeft className={styles.arrow} />
                    </div>
                    <div
                        id="next"
                        onClick={next}
                        className={`${styles.arrowContainer} ${styles.next}`}
                    >
                        <AiOutlineArrowRight className={styles.arrow} />
                    </div>
                    <div
                        id="bottom-image-list"
                        className={styles.imageListContainer}
                    >
                        {list.map((img, index) => (
                            <img
                                key={img._key}
                                className={styles.smallImage}
                                onClick={() => setMainIndex(index)}
                                src={urlForImage(img)
                                    .width(200)
                                    .height(200)
                                    .url()}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fade>
    );
}

Gallery.propTypes = {
    onClose: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(sanityImagePropType.isRequired),
};

export default Gallery;
