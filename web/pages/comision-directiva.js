import React from "react";
import Layout from "../components/layout";
import BackgroundImage from "../components/backgroundImage";
import { getClient } from "../lib/sanity.server";
import { leadershipQuery } from "../lib/queries";
import Hero from "../components/hero";
import { BG_CONSTANTS } from "../utils/constants";

export default function ComisionDirectiva({ list }) {
  return (
    <Layout>
      <div>
        <div className="relative w-full py-32 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 flex flex-col items-center justify-center font-sans text-4xl font-bold">
            Comisión directiva
          </h1>
          <BackgroundImage image={BG_CONSTANTS.trucks} opacity={20} />
        </div>
        <div className="p-6 mx-auto mt-6 bg-gray-100 max-w-7xl">
          <div className="grid gap-3 py-6 pb-24 mx-auto max-w-7xl md:grid-cols-3 sm:grid-cols-2">
            {list &&
              list.map((n) => (
                <Hero key={n._id} name={n.title} description={n.position} image={n.image} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(ctx) { 
  const list = await getClient(false).fetch(leadershipQuery);
  return {
    props: {
      list
    },
  };
}
