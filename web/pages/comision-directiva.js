import React from "react";
import Layout from "../components/layout";
import BackgroundImage from "../components/backgroundImage";
import client from "../lib/client";

export default function News(props) {
  return (
    <Layout>
      <div>
        <div className="relative w-full py-64 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 flex flex-col items-center justify-center font-sans text-6xl font-bold">Comisión directiva</h1>
          <BackgroundImage image="https://images.unsplash.com/photo-1497463477252-4bfc1cbd798a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=817&q=80"/>
        </div>
        <div className="max-w-6xl p-2 py-12 mx-auto mt-6 bg-white ">
          {props.list &&
            props.list.map((n) => (
              <div className="p-3 text-2xl text-center">
                <h3 className="font-sans font-bold">{n.title}</h3>
                <p className="mt-2">{n.text}</p>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(ctx) { 
    const res = await client.fetch(` *[_type == "leadership"] `)
    return {
        props: {
            list: res
        },
    };
}
