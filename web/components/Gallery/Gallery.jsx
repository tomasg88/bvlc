import React, { useCallback, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { urlForImage } from 'lib/sanity';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import styles from './Gallery.module.scss';
import PropTypes from 'prop-types';
import { sanityImagePropType } from 'utils/sanityPropType';
import SanityImage from 'components/SanityImage/SanityImage';
import classNames from 'classnames';

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
                        {list[mainIndex] && (
                            <SanityImage
                                src={list[mainIndex]}
                                layout="fill"
                                className={styles.image}
                            />
                        )}
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
                            <div
                                key={img._id}
                                className={classNames(
                                    styles.smallImage,
                                    index === mainIndex && styles.active
                                )}
                            >
                                <SanityImage
                                    src={img}
                                    width={48}
                                    height={48}
                                    layout={'fixed'}
                                    objectFit="cover"
                                    onClick={() => setMainIndex(index)}
                                />
                            </div>
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
