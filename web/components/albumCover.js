import React from "react"
import { urlForImage } from "../lib/sanity"

export default function AlbumCover({ cover, title, description, album, selectAlbum }) {
  return (
    <div className="relative h-64 my-3 duration-500 transform translate-y-1 bg-gray-800 shadow-md hover:bg-opacity-90 hover:translate-y-0 hover:shadow-xl">
      <div className="absolute inset-0 overflow-hidden rounded-md">
        <img
          onClick={() => selectAlbum(album)}
          className="object-cover w-full h-full cursor-pointer opacity-20"
          src={urlForImage(cover).url()}
        />
      </div>
      <div onClick={() => selectAlbum(album)} className="relative z-10 flex flex-col items-center justify-center w-full h-full p-6 text-center text-gray-100 cursor-pointer ">
        <div className="mb-2 text-3xl font-bold">{title}</div>
        <div className="text-xl">{description}</div>
        <div  className="w-full px-3 mt-3 font-bold uppercase btn">
          Abrir galería
        </div>
      </div>
    </div>
  )
}
