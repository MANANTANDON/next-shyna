import { Articles } from "@/components/Articles";
import { Layout } from "@/components/Layout";
import { TopContainer } from "@/components/TopContainer";
import { fetchAllArticles } from "@/lib/notion";
import Head from "next/head";

export default function Home({ articlesRes }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shyna Gupta",
    url: "https://shynagupta.com",
    sameAs: ["https://twitter.com/shyna", "https://www.linkedin.com/in/shyna"],
    jobTitle: "Author & Journalist",
    worksFor: {
      "@type": "Organization",
      name: "Shyna's Publications",
    },
  };

  return (
    <>
      <Head>
        <title>
          Shyna Gupta | Author & Journalist - Insights on Politics, Social
          Issues and International Affairs
        </title>
        <link rel="canonical" href="https://shynagupta.com/" />
        <link rel="icon" href="/shyna.ico" />

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore the latest trends in economics and technology with Shyna Gupta, an author and journalist. Discover insightful articles and fresh perspectives that inform and inspire."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Shyna Gupta, author, journalist, economics, technology trends, IT insights"
        />

        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Shyna Gupta | Author & Journalist" />
        <meta property="og:url" content="https://shynagupta.com" />
        <meta property="og:image" content="/shynaSignature.png" />
        <meta property="og:image:alt" content="Shyna Gupta's Signature" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Explore the latest trends in economics and technology with Shyna Gupta, an author and journalist. Discover insightful articles and fresh perspectives that inform and inspire."
        />

        {/* Responsive Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <Layout>
        <TopContainer />
        <Articles articles={articlesRes} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let startCursor = undefined;
  const articles = await fetchAllArticles(startCursor, 6);
  const articlesRes = articles?.results;

  return {
    props: { articlesRes },
    revalidate: 600,
  };
}
