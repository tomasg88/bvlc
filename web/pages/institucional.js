import React from 'react';
import Layout from 'components/Layout/Layout';
import { getClient } from 'lib/sanity.server';
import ArticleContent from 'components/ArticleContent/ArticleContent';
import { SRLWrapper } from 'simple-react-lightbox';
import { pagesQuery } from 'lib/queries';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { BG_CONSTANTS } from 'utils/constants';

export default function Institucional({ pages }) {
    return (
        <Layout title={pages.title}>
            <div className="bg-white ">
                <HeroInstitucional
                    image={BG_CONSTANTS.station}
                    title={pages.title}
                />
                <div id="body" className="bg-white">
                    <SRLWrapper>
                        <ArticleContent body={pages.body} />
                    </SRLWrapper>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const slug = 'quienes-somos';
    const pages = await getClient().fetch(pagesQuery, { slug });
    return {
        props: {
            pages,
        },
    };
}
