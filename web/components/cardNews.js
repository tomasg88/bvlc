import { format, parseISO } from "date-fns"
import { es } from "date-fns/locale"
import Link from "next/link"
import CoverImage from "./coverImage"

const getDate = (date) => {
  const day = '0' + format(parseISO(date), 'd', { locale: es })
  return day.slice(-2);
}

const getMonth = (date) => format(parseISO(date), 'LLL', { locale: es })

// title, mainImage, excerpt, slug
export default function Card({ title, mainImage, excerpt, slug, publishedAt }) {
  return (
    <div className="relative overflow-hidden text-4xl duration-500 transform translate-y-0 bg-white rounded-md shadow-md hover:shadow-2xl hover:-translate-y-1 ">
      <div className="relative border-b-4 border-red-600">
        {mainImage ? (
          <Link href={`/noticias/${slug}`}>
            <a aria-label={title} className="transition-all duration-500 hover:opacity-80">
              <CoverImage title={title} image={mainImage} />
            </a>
          </Link>
        ) : (
          <></>
        )}
        <div className="absolute bottom-0 right-0 flex items-center p-2 py-1 text-white bg-red-600 rounded-tl-lg">
          <p className="mr-2 text-xl"> 
            {getDate(publishedAt)} 
          </p>
          <p className="text-sm"> 
            {getMonth(publishedAt)} 
          </p>
        </div>
      </div>
      <div className="h-48 px-6 py-3 pb-8">
        <h3 className="font-sans text-lg font-bold md:text-xl">{title}</h3>
        <p className="my-2 text-base line-clamp-2">{excerpt}</p>
        <Link href={`/noticias/${slug}`}>
          <a className="absolute bottom-0 left-0 right-0 z-10 block mt-6 text-base text-center btn">
            Leer nota completa
          </a>
        </Link>
      </div>
    </div>
  )
}
