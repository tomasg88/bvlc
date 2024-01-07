import Image from 'next/image';
import { sanityConfig } from 'lib/sanity.config';
import { useNextSanityImage } from 'next-sanity-image';
import React from 'react';

const SanityImage = ({ src, ...restProps }) => {
  const { src: url } = useNextSanityImage(sanityConfig, src);
  return <Image src={url} {...restProps} />;
};

export default SanityImage;
