import React from 'react';
import { HOME_SECTION_CARDS_CONTENT } from 'utils/constants';
import { HomeSectionCard } from './HomeSectionCard';

const YellowBorder = () => <div className="w-40 border-b-2 border-yellow-400 my-8 h-1">&nbsp;</div>;

export const HeadquarterSection = () => (
  <>
    {/* <div className="bg-gradient-to-b to-gray-400 from-gray-100 mt-20">&nbsp;</div> */}
    <div className="block w-full bg-gray-900 pt-12 pb-24 mx-auto md:flex-row border-t-2 border-red-700 shadow-2xl">
      {/* content */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-light text-white mb-12">
          Conocé más sobre nosotros!
        </h2>
        <div className="flex flex-col justify-between items-center mx-auto">
          {HOME_SECTION_CARDS_CONTENT.map(
            ({ background, ctaText, description, href, title }, index) => (
              <React.Fragment key={index}>
                <HomeSectionCard
                  background={background}
                  ctaText={ctaText}
                  description={description}
                  href={href}
                  title={title}
                />
                {index < HOME_SECTION_CARDS_CONTENT.length ? <YellowBorder /> : null}
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </div>
  </>
);
