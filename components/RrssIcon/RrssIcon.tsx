import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { General } from 'types/models';

interface RrssIconProps {
  className: string;
  rrss: General['rrss'];
  url: General['rrssUrl'];
}

const RrssIcon: FunctionComponent<RrssIconProps> = ({
  className = '',
  rrss,
  url,
}): ReactElement => {
  const getIconComponent = useMemo(() => {
    switch (rrss) {
      case 'Facebook':
        return <AiOutlineFacebook />;
      case 'Instagram':
        return <AiOutlineInstagram />;
      case 'Twitter':
        return <AiOutlineTwitter />;
      case 'YouTube':
        return <AiOutlineYoutube />;
    }
  }, [rrss]);

  return (
    <a
      target="_blank"
      className={className}
      href={url}
      aria-label={rrss}
      title="visitar red social"
      rel="noopener noreferrer"
    >
      {getIconComponent}
      <span className="sr-only">{rrss}</span>
    </a>
  );
};

export default RrssIcon;
