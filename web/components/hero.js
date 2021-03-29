import { useCallback, useState } from "react";
import { urlForImage } from "../lib/sanity";

export default function Hero({ name, description, image}) {
  const [showDetails, setShowDetails] = useState('opacity-0')

  const getImage = useCallback( () => {
    if (!image) 
      return '/no-profile-image.png';
    else 
      return urlForImage(image).height(100).width(100).url()
    }, [image] )

  return (
    <figure id="hero" className="relative flex items-start w-full bg-white border border-gray-300 rounded-md shadow-lg">
      <img 
        alt={name} 
        className={'rounded-md rounded-r-none'} 
        src={getImage()} 
        style={{ height: '100px', width: '100px' }}
        onMouseEnter={() => setShowDetails('opacity-1')}
        onMouseLeave={() => setShowDetails('opacity-0')}
      />

      <div className={`w-full flex h-full flex-col items-start justify-center  space-y-2 ml-4`}>
        <figcaption className="text-lg">
          <div className="font-bold text-gray-800">
            {name}
          </div>
          <div className="text-gray-500">
            {description}
          </div>
        </figcaption>
      </div>

    </figure>
  )
}
