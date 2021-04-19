import React from "react"
import { urlForImage } from "../lib/sanity"
import { MdPhotoCamera } from "react-icons/md";

export default function AlbumCover({ cover, title, description, album, selectAlbum }) {
  return (
    <div className="relative h-64 my-3 duration-700 transform translate-y-1 rounded shadow-md from-gray-800 via-gray-800 to-gray-900 bg-gradient-to-t hover:bg-opacity-90 hover:translate-y-0 hover:shadow-xl">
      <div className="absolute inset-0 overflow-hidden rounded-md">
        <img
          onClick={() => selectAlbum(album)}
          className="object-cover w-full h-full cursor-pointer opacity-20"
          src={urlForImage(cover).url()}
        />
      </div>
      <div onClick={() => selectAlbum(album)} className="relative z-10 flex flex-col items-center justify-end w-full h-full text-left text-gray-100 cursor-pointer ">
        <div className="w-full px-4 mb-2 text-2xl font-bold">{title}</div>
        <div className="w-full px-4 text-lg">{description}</div>
        <div className="flex items-center justify-start w-full p-2 mx-3 mt-2 font-bold uppercase duration-700 bg-red-600 shadow-2xl bg-opacity-20 hover:translate-x-2 hover:bg-red-500">
          <MdPhotoCamera className="w-6 h-6 m-2"/>
          <span>Ver galería</span>
        </div>
      </div>
    </div>
  )
}
