import React from "react";
import Layout from "../components/layout";
import client from "../lib/client";


export default function News(props) {
  console.log("🚀 ~ file: news.js ~ line 4 ~ news ~ props", props);
  return (
    <Layout>
      <div className="">
        <div className="py-24 text-center text-white bg-gray-800 ">
          <h1 className="font-sans text-6xl font-bold">Noticias</h1>
        </div>
        <div className="grid max-w-6xl grid-cols-3 gap-3 p-2 mx-auto mt-6">
          {props.news &&
            props.news.map((n) => (
              <div className="p-3 text-4xl bg-white shadow-2xl">
                <h3 className="font-sans text-3xl font-bold">{n.title}</h3>
                <p className="mt-2 text-xl">{n.text}</p>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(ctx) { 
    const res = await client.fetch(` *[_type == "post"] `)
    return {
        props: {
            news: res
        },
    };
}
