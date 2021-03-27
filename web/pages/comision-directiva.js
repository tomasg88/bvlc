import React from "react";
import Layout from "../components/layout";
import BackgroundImage from "../components/backgroundImage";
import { getClient } from "../lib/sanity.server";
import { leadershipQuery } from "../lib/queries";
import Hero from "../components/hero";

export default function ComisionDirectiva({ list }) {
  return (
    <Layout>
      <div>
        <div className="relative w-full py-40 overflow-hidden text-center text-white bg-gray-800 ">
          <h1 className="relative z-10 flex flex-col items-center justify-center font-sans text-6xl font-bold">Comisión directiva</h1>
          <div
            className="absolute inset-0 z-0 hidden bg-fixed bg-no-repeat bg-cover opacity-50 md:block"
            style={{
              backgroundImage:
                "url(https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/49125089_2209430305972221_7899420858597244928_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Rv4gM7SeNuEAX_IpYLD&_nc_ht=scontent.faep8-2.fna&oh=653cd896e52442a64e9b5c87e8665ed6&oe=606720D4)",
            }}
          ></div>
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
