import React, { useCallback } from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube, AiOutlineTwitter } from "react-icons/ai"

export default function RrssIcon({ className, rrss, url }) {
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
      className={className}
      href={ url }
    >
      { getIconComponent() }
    </a>
  )
}
