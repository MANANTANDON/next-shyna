import { Articles } from "@/components/Articles";
import { Compositions } from "@/components/Compositions";
import { Layout } from "@/components/Layout";
import { TopContainer } from "@/components/TopContainer";
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
          <TopContainer />
          <Articles />
          <Compositions />
        </Layout>
      </>
    </>
  );
}
