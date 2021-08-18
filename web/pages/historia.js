import React from 'react';
import ArticleContent from '../components/articleContent';
import { getClient } from '../lib/sanity.server';
import { pagesQuery } from '../lib/queries';
import { SRLWrapper } from 'simple-react-lightbox';

const options = {
    settings: {
        overlayColor: 'rgb(255, 255, 255)',
    },
};

export default function Historia({ pages }) {
    return (
        <div>
            {pages.title}
            <SRLWrapper options={options}>
                <ArticleContent
                    dateString={pages.publishedAt}
                    body={pages.body}
                />
            </SRLWrapper>
        </div>
    );
}

export async function getStaticProps() {
    const slug = 'nuestra-historia';
    const pages = await getClient().fetch(pagesQuery, { slug });

    return {
        props: {
            pages,
        },
    };
}
