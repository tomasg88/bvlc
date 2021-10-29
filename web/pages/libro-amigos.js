import React from 'react';
import Layout from 'components/Layout/Layout';
import { getClient } from 'lib/sanity.server';
import ArticleContent from 'components/ArticleContent/ArticleContent';
import { SRLWrapper } from 'simple-react-lightbox';
import { pagesQuery } from 'lib/queries';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { BG_CONSTANTS } from 'utils/constants';
import Button from 'components/Button/Button';

const BOOK_PUBLIC_URL =
    'https://drive.google.com/file/d/1-Ej0AXd14-xLfvooEfzWHG1bGdZYbOjO/view?usp=sharing';

export default function LibroAmigos({ pages }) {
    function handleClick() {
        ga.pageEvent('download_book', {
            event_category: 'engagement',
            event_label: 'Libro descargado',
        });
    }

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
                <Button
                    text={'Descargalo acá!'}
                    href={BOOK_PUBLIC_URL}
                    target={'_blank'}
                    onClick={handleClick}
                />
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const slug = 'libro-amigos';
    const pages = await getClient().fetch(pagesQuery, { slug });
    return {
        props: {
            pages,
        },
    };
}
