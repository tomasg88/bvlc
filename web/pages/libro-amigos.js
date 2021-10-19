import React from "react";
import Link from "next/link";
import Layout from "components/Layout/Layout";
import { getClient } from "lib/sanity.server";
import ArticleContent from "components/ArticleContent/ArticleContent";
import { SRLWrapper } from "simple-react-lightbox";
import { pagesQuery } from "lib/queries";
import HeroInstitucional from "components/HeroInstitucional/HeroInstitucional";
import { BG_CONSTANTS } from "utils/constants";
import Button from "components/Button/Button";

// link publico a un pdf de prueba: https://drive.google.com/file/d/0B_uZcKZGPPu_QzdWTHdHTnVpbG8/view?usp=sharing&resourcekey=0-IteDYA-bhBeL7zN5wYHpCQ

export default function LibroAmigos({ pages }) {
    const link =
        "https://drive.google.com/file/d/0B_uZcKZGPPu_QzdWTHdHTnVpbG8/view?usp=sharing&resourcekey=0-IteDYA-bhBeL7zN5wYHpCQ";
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
                    text={"Descargalo acá!"}
                    href={link}
                    target={"_blank"}
                />
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const slug = "libro-amigos";
    const pages = await getClient().fetch(pagesQuery, { slug });
    return {
        props: {
            pages,
        },
    };
}
