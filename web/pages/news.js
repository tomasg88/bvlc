import React from "react";

export default function News(props) {
    console.log("🚀 ~ file: news.js ~ line 4 ~ news ~ props", props);
    return (
        <div>
            <h1>Noticias</h1>
            {props.news &&
                props.news.map((n) => (
                    <div>
                        <h3>{n.title}</h3>
                        <p>{n.text}</p>
                    </div>
                ))}
        </div>
    );
}

export async function getStaticProps(ctx) {
    return {
        props: {
            news: [
                {
                    title: "noticia1",
                    text: "prueba1",
                },
                {
                    title: "noticia2",
                    text: "prueba2",
                },
            ],
        },
    };
}
