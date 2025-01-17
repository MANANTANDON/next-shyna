import { Articles } from "@/components/Articles";
import { Layout } from "@/components/Layout";
import { TopContainer } from "@/components/TopContainer";
import {
  fetchAllArticles,
  fetchBySlug,
  fetchPageBlocks,
  notion,
} from "@/lib/notion";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import Head from "next/head";

export default function Home({ infoData, articlesRes }) {
  return (
    <>
      <Head>
        <title>Shyna</title>
        <link rel="canonical" href="https://shynagupta.com/" />
        <link rel="icon" href="/shyna.ico" />
        <meta property="og:title" content="Shyna" />
        <meta property="og:url" content="https://shynagupta.com" />
        <meta property="og:image" content="/shynaSignature.png" />
        <meta property="og:image:alt" content="Shyna Gupta" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Join Shyna, an author and journalist, as she explores the latest trends in economics and information technology. Discover insightful articles and fresh perspectives that inform and inspire."
        />
        <meta
          property="og:description"
          content="Join Shyna, an author and journalist, as she explores the latest trends in economics and information technology. Discover insightful articles and fresh perspectives that inform and inspire."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />{" "}
      </Head>
      <>
        <Layout>
          <TopContainer info={infoData} />
          <Articles articles={articlesRes} />
          {/* <Compositions /> */}
        </Layout>
      </>
    </>
  );
}

export async function getServerSideProps() {
  const info = await fetchBySlug("landing-page-deets");

  const infoData = await fetchPageBlocks(info?.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const infoContent = await renderer.render(...infoData);

  let startCursor = undefined;
  const articles = await fetchAllArticles(startCursor, 6);
  const articlesRes = articles?.results;

  return { props: { infoContent, infoData, articlesRes } };
}
