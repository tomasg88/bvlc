import React, { useCallback, useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { urlForImage } from "../lib/sanity"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

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
    <div
      id="gallery-container"
      style={{ zIndex: 1000 }}
      className="fixed inset-0 block h-screen bg-black bg-opacity-95"
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
          <img
            src={urlForImage(list[mainIndex]).width(1440).url()}
            className="w-full h-auto max-w-5xl mx-auto select-none"
          />
        </div>
        <div
          id="previous"
          onClick={previous}
          className="absolute left-0 z-50 p-6 duration-200 bg-gray-600 bg-opacity-50 cursor-pointer hover:opacity-60 bottom-32 md:bottom-8"
        >
          <AiOutlineArrowLeft className="mx-3 text-4xl text-white" />
        </div>
        <div
          id="next"
          onClick={next}
          className="absolute right-0 z-50 p-6 duration-200 bg-gray-600 bg-opacity-50 cursor-pointer hover:opacity-60 z-5 bottom-32 md:bottom-8"
        >
          <AiOutlineArrowRight className="mx-3 text-4xl text-white" />
        </div>
        <div
          id="bottom-image-list"
          className="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full mt-5 overflow-x-auto"
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
    </div>
  )
}
