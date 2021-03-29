import React, { useCallback, useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { urlForImage } from '../lib/sanity';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

export default function Gallery({ onClose, list }) {
  const [mainIndex, setMainIndex] = useState(null)
  useEffect(() => {
    if (list && list.length > 0) {
      setMainIndex(0);
    }
  }, [list]);

  const previous = useCallback( () => {
    setMainIndex(prevState => prevState === 0? list.length - 1 : prevState - 1)
  }, [mainIndex] )

  const next = useCallback( () => {
    setMainIndex(prevState => prevState === list.length - 1? 0 : prevState + 1)
  }, [mainIndex] )

  return (
    <div id="gallery-container" 
      style={{ zIndex: 1000}}
      className="fixed inset-0 block h-screen bg-black bg-opacity-95"
    >
      <div id="close" className="absolute top-0 right-0 z-50 m-8 cursor-pointer hover:opacity-75">
        <MdClose onClick={onClose} className="text-white stroke-current" color="#ffffff" size="3rem" />
      </div>

      <div id="content" className="relative flex flex-col items-center h-screen">
        <div id="main-image" className="flex items-center justify-between w-full h-full mb-5">
          <div id="previous" onClick={ previous } className="cursor-pointer">
            <AiOutlineArrowLeft className="px-3 text-5xl text-white" />
          </div>
          <img 
            src={urlForImage(list[mainIndex]).width(800).url()} 
          />
          <div id="next" onClick={ next } className="cursor-pointer">
            <AiOutlineArrowRight  className="px-3 text-5xl text-white" />
          </div>
        </div>

        <div id="bottom-image-list" className="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full mt-5">
          {
            list.map((img, index) => 
              <img 
                className="w-24 h-auto mx-2 cursor-pointer"
                key={img._key} 
                onClick={() => setMainIndex(index)} 
                src={urlForImage(img).width(200).height(200).url()} 
              />
            )
          }
        </div>
      </div>
    </div>
  )
}
