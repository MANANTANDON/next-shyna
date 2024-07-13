import { AlbumArt } from "@/components/AlbumArt";
import { Layout } from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shyna</title>
        <meta
          name="description"
          content="Join Shyna, an author and journalist, as she explores the latest trends in economics and information technology. Discover insightful articles and fresh perspectives that inform and inspire."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shyna.ico" />
      </Head>
      <>
        <Layout>
          <AlbumArt />
        </Layout>
      </>
    </>
  );
}
