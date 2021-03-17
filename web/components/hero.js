import { urlForImage } from "../lib/sanity";

export default function Hero({ name, description, image}) {
  return (
    <figure className="flex flex-col w-40 p-4 mx-8 shadow-sm">
      <img 
        alt={name} 
        className={'shadow-small hover:shadow-medium transition-shadow duration-200 rounded-full'} 
        src={urlForImage(image).height(100).width(100).url()} 
      />
      <div className="pt-6 p-8 text-center text-left space-y-4">
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
