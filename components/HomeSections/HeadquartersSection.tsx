import React from 'react';
import { HOME_SECTION_CARDS_CONTENT } from 'utils/constants';
import { HomeSectionCard } from './HomeSectionCard';

export const HeadquarterSection = () => (
  <>
    <div className="block w-full bg-gray-200 pt-12 pb-24 mx-auto md:flex-row">
      {/* content */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-light text-gray-900 pt-24 pb-6 mx-auto mb-20 border-b-2 border-yellow-400">
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
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </div>
  </>
);
