import Image from "next/image"
import Link from "next/link"
import CoverImage from "./coverImage"

// title, mainImage, excerpt, slug
export default function Card({ title, mainImage, excerpt, slug }) {
  return (
    <div className="relative overflow-hidden text-4xl duration-500 transform translate-y-0 bg-white rounded-md shadow-md hover:shadow-2xl hover:-translate-y-1 ">
      {mainImage ? (
        <Link href={`/noticias/${slug}`}>
          <a aria-label={title} className="transition-all duration-500 hover:opacity-80">
            <CoverImage title={title} image={mainImage} />
          </a>
        </Link>
      ) : (
        <></>
      )}
      <div className="px-6 py-3 pb-8">
        <h3 className="font-sans text-lg font-bold md:text-xl">{title}</h3>
        <p className="my-2 text-base line-clamp-4">{excerpt}</p>
        <Link href={`/noticias/${slug}`}>
          <a className="relative z-10 block mt-6 text-base text-center btn">
            Leer nota completa
          </a>
        </Link>
      </div>
    </div>
  )
}