import React from "react";
import Layout from "../components/layout";

export default function News(props) {
  console.log("🚀 ~ file: news.js ~ line 4 ~ news ~ props", props);
  return (
    <Layout>
      <div style={{padding: "0 2rem"}}>
        <h1>Novedades</h1>
        {props.news &&
          props.news.map((n) => (
            <div>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
            </div>
          ))}
      </div>
    </Layout>
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
