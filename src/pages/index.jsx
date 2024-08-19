import { Articles } from "@/components/Articles";
import { Compositions } from "@/components/Compositions";
import { Layout } from "@/components/Layout";
import { TopContainer } from "@/components/TopContainer";
import Head from "next/head";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shyna</title>
        <link rel="canonical" href="https://shynagupta.com/" />
        <link rel="icon" href="/shyna.ico" />
        <meta property="og:title" content="Shyna" />
        <meta property="og:url" content="https://shynagupta.com" />
        <meta
          name="description"
          content="Join Shyna, an author and journalist, as she explores the latest trends in economics and information technology. Discover insightful articles and fresh perspectives that inform and inspire."
        />
        <meta property="og:image:alt" content="logo" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Join Shyna, an author and journalist, as she explores the latest trends in economics and information technology. Discover insightful articles and fresh perspectives that inform and inspire."
        />
      </Head>
      <>
        <Layout>
          <TopContainer />
          <Articles />
          {/* <Compositions /> */}
        </Layout>
      </>
    </>
  );
}
