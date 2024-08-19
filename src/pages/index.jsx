import { Articles } from "@/components/Articles";
import { Compositions } from "@/components/Compositions";
import { Layout } from "@/components/Layout";
import { TopContainer } from "@/components/TopContainer";
import { SearchPost } from "@/utils/common";
import Head from "next/head";

export default function Home({ articleData }) {
  console.log(articleData, "Shyna");
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
          <Articles data={articleData} />
          {/* <Compositions /> */}
        </Layout>
      </>
    </>
  );
}

export async function getServerSideProps({}) {
  const response = await SearchPost(
    {
      visiblity: "DRAFT",
    },
    { page: 1, size: 4 }
  );
  const articleData = response.data;

  return {
    props: {
      articleData,
    },
  };
}
