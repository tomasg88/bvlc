import { useState } from "react";
import { urlForImage } from "../lib/sanity";

export default function Hero({ name, description, image}) {
  const [showDetails, setShowDetails] = useState('opacity-0')
  return (
    <figure className="relative flex flex-col w-40 p-15 mx-8">
      <img 
        alt={name} 
        className={'rounded-full shadow-none hover:shadow-lg transition-shadow duration-200'} 
        src={urlForImage(image).height(160).width(160).url()} 
        style={{ height: '100%', width: '100%' }}
        onMouseEnter={() => setShowDetails('opacity-1')}
        onMouseLeave={() => setShowDetails('opacity-0')}
      />

      <div className={`${showDetails} absolute transition-opacity duration-200 bg-red-300 h-3 bottom-0 w-full text-center space-y-4 mt-2`}>
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
