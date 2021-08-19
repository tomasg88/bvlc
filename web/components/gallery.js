import React, { useCallback, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { urlForImage } from '../lib/sanity';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';

export default function Gallery({ onClose, list }) {
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
                className="fixed inset-0 block h-screen bg-black"
            >
                <div
                    id="close"
                    className="absolute top-0 right-0 z-50 m-5 cursor-pointer hover:opacity-75"
                >
                    <MdClose
                        onClick={onClose}
                        className="text-white stroke-current"
                        color="#ffffff"
                        size="3rem"
                    />
                </div>
                <div
                    id="content"
                    className="relative flex flex-col items-center h-screen"
                >
                    <div
                        id="main-image"
                        className="flex items-center justify-between w-full h-full mb-5"
                    >
                        <Fade>
                            <img
                                src={urlForImage(list[mainIndex]).url()}
                                className="object-contain w-full h-full mx-auto"
                            />
                        </Fade>
                    </div>
                    <div
                        id="previous"
                        onClick={previous}
                        className="absolute left-0 z-50 p-2 duration-200 bg-gray-600 bg-opacity-50 cursor-pointer top-1/2 hover:opacity-60"
                    >
                        <AiOutlineArrowLeft className="w-12 h-12 text-gray-300 " />
                    </div>
                    <div
                        id="next"
                        onClick={next}
                        className="absolute right-0 z-50 p-2 duration-200 bg-gray-600 bg-opacity-50 cursor-pointer top-1/2 hover:opacity-60"
                    >
                        <AiOutlineArrowRight className="w-12 h-12 text-gray-300 " />
                    </div>
                    <div
                        id="bottom-image-list"
                        className="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full p-2 mt-5 overflow-x-auto bg-black"
                    >
                        {list.map((img, index) => (
                            <Fade delay={500} key={img._key}>
                                <img
                                    className="w-12 h-12 mx-1 duration-500 cursor-pointer hover:!opacity-90"
                                    key={img._key}
                                    onClick={() => setMainIndex(index)}
                                    src={urlForImage(img)
                                        .width(200)
                                        .height(200)
                                        .url()}
                                />
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
