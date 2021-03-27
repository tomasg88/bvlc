import React, { useCallback, useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { urlForImage } from '../lib/sanity';

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
      style={{ zIndex: 1000, padding: '3rem 1rem 1rem' }}
      className="w-screen h-screen absolute block bg-black bg-opacity-80 w-full h-full inset-0"
    >
      <div id="close" className="absolute right-0 top-0 cursor-pointer m-8">
        <AiFillCloseCircle onClick={onClose} color="#ffffff" size="3rem" />
      </div>

      <div id="content" className="flex flex-col items-center relative">
        <div id="main-image" className="flex items-center justify-between w-3/4 mb-5">
          <div id="previous" onClick={ previous } className="cursor-pointer">
            <FaArrowAltCircleLeft color="#ffffff" size="2rem" />
          </div>
          <img 
            src={urlForImage(list[mainIndex]).width(600).height(600).url()} 
          />
          <div id="next" onClick={ next } className="cursor-pointer">
            <FaArrowAltCircleRight color="#ffffff" size="2rem" />
          </div>
        </div>

        <div id="bottom-image-list" className="flex items-center justify-start mt-5">
          {
            list.map((img, index) => 
              <img 
                className="mx-4"
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
