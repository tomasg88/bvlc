import React from "react";
import Layout from "../components/layout";
import client from "../lib/client";
import BackgroundImage from "../components/backgroundImage";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function News({news}) {
  const router = useRouter()
  return (
    <Layout>
      <div className="">
        <div className="relative py-32 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 font-sans text-6xl font-bold">
          Noticias
          </h1>
          <BackgroundImage image="https://images.unsplash.com/photo-1522578755536-1e6830124399?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" />
        </div>

        <div className="grid max-w-6xl grid-cols-3 gap-3 p-2 mx-auto mt-6">
          {news &&
            news.map((n) => (
              <div key={n._id} className="p-3 text-4xl bg-white shadow-2xl">
                <Link href={router.pathname +'/'+ n.slug.current}>
                  <a>
                    <h3 className="font-sans text-3xl font-bold">{n.title}</h3>
                  </a>
                </Link>
                {/* <p className="mt-2 text-xl">{n.text}</p> */}
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const news = await client.fetch(` *[_type == "post"] `);
  return {
    props: { news }
  };
}
