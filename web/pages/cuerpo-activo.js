import React from "react";
import BackgroundImage from "../components/backgroundImage";
import Layout from "../components/layout";
import client from "../lib/client";

export default function News(props) {
  return (
    <Layout>
      <div>
        <div className="relative py-64 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-bold">Cuerpo Activo</h1>
          <BackgroundImage image="https://images.unsplash.com/photo-1596644820103-8be239a56110?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
        </div>
        <div className="grid max-w-6xl grid-cols-3 gap-3 p-2 mx-auto mt-6">
          {props.list &&
            props.list.map((n) => (
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
    const res = await client.fetch(` *[_type == "activeForce"] `)

    return {
        props: {
            list: res
        },
    };
}