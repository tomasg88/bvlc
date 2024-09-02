import React, { FunctionComponent } from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Fade from 'react-reveal/Fade';
import { CarouselCore, CarouselProps } from 'components/Carousel/CarouselCore';
import { HOME_BANNERS_SECTION_CONTENT } from 'utils/constants';
import { BannerSection } from './BannerSection';

export const HeadquarterSection = () => {
  const Carousel = makeCarousel((props) => (
    <CarouselCore arrows={true} {...props} />
  )) as FunctionComponent<CarouselProps>;

  return (
    <div className="block w-full py-24 pb-36 mx-auto md:flex-row bg-gray-900 border-b-2 border-t-2 border-red-700">
      {/* content */}
      <div className="mx-auto">
        <div className="relative flex flex-col h-[500px] justify-between items-center mx-auto">
          <div className="absolute inset-0 z-0 px-48">
            <Carousel arrows={true} defaultWait={7000} maxTurns={99}>
              {HOME_BANNERS_SECTION_CONTENT.map((banner, index) => (
                <Fade key={index + 1}>
                  <BannerSection
                    background={banner.background}
                    ctaText={banner.ctaText}
                    description={banner.description}
                    key={index}
                    href={banner.href}
                    rtl={!!(index % 2 !== 0)}
                    title={banner.title}
                  />
                </Fade>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
