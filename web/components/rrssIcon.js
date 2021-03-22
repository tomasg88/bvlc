import React, { useCallback } from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter } from "react-icons/ai"

export default function RrssIcon({ rrss, url }) {
  const getIconComponent = useCallback(
    () => {
      switch(rrss) {
        case 'Facebook':
          return <AiOutlineFacebook />;
        case 'Instagram':
          return <AiOutlineInstagram />;
        case 'Twitter':
          return <AiOutlineTwitter />;
        case 'Youtube':
          return <AiOutlineYoutube />;
      }
    },
    [rrss],
  )
  return (
    <a
      target="_blank"
      className="ml-3 text-3xl"
      href={ url }
    >
      { getIconComponent() }
    </a>
  )
}
