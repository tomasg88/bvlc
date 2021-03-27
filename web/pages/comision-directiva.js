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
        <div className="relative w-full py-40 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 flex flex-col items-center justify-center font-sans text-6xl font-bold">Comisión directiva</h1>
          <BackgroundImage image={BG_CONSTANTS.trucks} />
        </div>
        <div className="flex justify-center max-w-6xl p-2 py-12 mx-auto mt-6 bg-white">
          {list &&
            list.map((n) => (
              <Hero key={n._id} name={n.title} description={n.position} image={n.image} />
            ))}
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
