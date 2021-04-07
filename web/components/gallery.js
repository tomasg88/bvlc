import React, { useCallback, useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { urlForImage } from "../lib/sanity"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { motion, AnimatePresence } from "framer-motion"

export default function Gallery({ onClose, list }) {
  const [mainIndex, setMainIndex] = useState(null)
  useEffect(() => {
    if (list && list.length > 0) {
      setMainIndex(0)
    }
  }, [list])

  const previous = useCallback(() => {
    setMainIndex((prevState) => (prevState === 0 ? list.length - 1 : prevState - 1))
  }, [mainIndex])

  const next = useCallback(() => {
    setMainIndex((prevState) => (prevState === list.length - 1 ? 0 : prevState + 1))
  }, [mainIndex])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="gallery-container"
        style={{ zIndex: 1000 }}
        className="fixed inset-0 block h-screen bg-black bg-opacity-80 "
      >
        <div
          id="close"
          className="absolute top-0 right-0 z-50 m-8 cursor-pointer hover:opacity-75"
        >
          <MdClose
            onClick={onClose}
            className="text-white stroke-current"
            color="#ffffff"
            size="3rem"
          />
        </div>
        <div id="content" className="relative flex flex-col items-center h-screen">
          <div
            id="main-image"
            className="flex items-center justify-between w-full h-full mb-5"
          >
            <AnimatePresence>
              <motion.img
                src={urlForImage(list[mainIndex]).width(1440).url()}
                className="w-full h-auto max-w-5xl mx-auto select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </AnimatePresence>
          </div>
          <div
            id="previous"
            onClick={previous}
            className="absolute bottom-0 left-0 top-auto z-50 p-6 duration-200 bg-gray-600 bg-opacity-50 cursor-pointer md:bottom-auto hover:opacity-60 md:top-1/2"
          >
            <AiOutlineArrowLeft className="mx-3 text-4xl text-white" />
          </div>
          <div
            id="next"
            onClick={next}
            className="absolute bottom-0 right-0 top-auto z-50 p-6 duration-200 bg-gray-600 bg-opacity-50 cursor-pointer md:bottom-auto hover:opacity-60 z-5 md:top-1/2"
          >
            <AiOutlineArrowRight className="mx-3 text-4xl text-white" />
          </div>
          <div
            id="bottom-image-list"
            className="absolute bottom-0 left-0 right-0 items-center justify-center hidden w-full mt-5 overflow-x-auto md:flex"
          >
            {list.map((img, index) => (
              <img
                className="w-24 h-auto mx-2 cursor-pointer"
                key={img._key}
                onClick={() => setMainIndex(index)}
                src={urlForImage(img).width(200).height(200).url()}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
