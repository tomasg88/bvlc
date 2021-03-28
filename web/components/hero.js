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
    <figure id="hero" className="relative flex items-start lg:w-2/3 w-full p-15 mx-none lg:mx-8 bg-white rounded-md shadow-md hover:shadow-2xl transition-shadow">
      <img 
        alt={name} 
        className={'rounded-md rounded-r-none'} 
        src={getImage()} 
        style={{ height: '100px', width: '100px' }}
        onMouseEnter={() => setShowDetails('opacity-1')}
        onMouseLeave={() => setShowDetails('opacity-0')}
      />

      <div className={`w-full space-y-4 mt-2 ml-2`}>
        <figcaption className="font-medium">
          <div className="text-cyan-600">
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
