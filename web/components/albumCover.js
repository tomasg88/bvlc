import React, { useState } from 'react'
import { urlForImage } from '../lib/sanity'

export default function AlbumCover({ 
  cover, title, description, album, selectAlbum 
}) {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div className="relative flex items-start justify-start mb-3 overflow-hidden border border-gray-300 rounded-sm shadow ">
      <img
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        className="object-cover w-48 h-48 cursor-pointer opacity-90"
        src={urlForImage(cover).url()}
      />
      <div className="relative z-10 pt-3 pl-3 text-gray-900">
        <div className="text-xl">{title}</div>
        <div className="text-base">{description}</div>
        <div onClick={() => selectAlbum(album)} className="mt-3 font-bold text-red-600 uppercase duration-150 cursor-pointer hover:opacity-80 hover:bg-red-300">
          abrir galeria
        </div>
      </div>
    </div>
  )
}
