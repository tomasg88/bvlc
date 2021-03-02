import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and Sanity.io.`}
      />
    </Head>
  );
}
