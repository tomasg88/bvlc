import React from 'react';
import { HOME_BANNERS_SECTION_CONTENT } from 'utils/constants';
import { BannerSection } from './BannerSection';

export const HeadquarterSection = () => (
  <>
    <div className="block w-full pt-12 pb-24 mx-auto md:flex-row">
      {/* content */}
      <div className="mx-auto">
        <h1 className="text-center text-6xl font-thin tracking-wide text-gray-900 pt-18 pb-6 mx-auto mb-20">
          Conocé más sobre nosotros!
        </h1>
        <div className="flex flex-col justify-between items-center mx-auto px-48">
          {HOME_BANNERS_SECTION_CONTENT.map((banner, index) => (
            <BannerSection
              background={banner.background}
              ctaText={banner.ctaText}
              description={banner.description}
              key={index}
              href={banner.href}
              rtl={!!(index % 2 !== 0)}
              title={banner.title}
            />
          ))}
        </div>
      </div>
    </div>
  </>
);
