import { sanityConfig } from 'lib/sanity.config';
import { urlForImage } from 'lib/sanity.image';
import { SanityClientOrProjectDetails, useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import Link from 'next/link';
import { Sponsor } from 'types/models';

type SponsorsSectionProps = {
  list: Sponsor[];
};

const ConditionalLink = ({ url, children }) => {
  if (!url || url === '') return children;

  return (
    <Link href={url} target={'_blank'}>
      {children}
    </Link>
  );
};

const Sponsor = ({ logo, name, url }: Sponsor) => {
  const { src } = useNextSanityImage(sanityConfig as SanityClientOrProjectDetails, logo, {
    imageBuilder: () => urlForImage(logo).height(48).width(158),
  });

  return (
    <ConditionalLink url={url}>
      <Image
        alt={name}
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        height={48}
        src={src}
        width={158}
      />
    </ConditionalLink>
  );
};

export const SponsorsSection = ({ list = [] }: SponsorsSectionProps) => {
  if (list.length === 0) return null;

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Empresas que colaboran con nosotros
        </h2>
        <div className="mx-auto mt-10 grid grid-cols-1 items-center gap-x-8 gap-y-10 max-w-4xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {list.map(({ name, logo, url }, index) => (
            <Sponsor key={index} logo={logo} name={name} url={url} />
          ))}
        </div>
      </div>
    </div>
  );
};
