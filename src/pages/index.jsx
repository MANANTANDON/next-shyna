import { FourthContainer } from "@/components/New/Home/FourthContainer";
import { SecondContainer } from "@/components/New/Home/SecondContainer";
import { ThirdContainer } from "@/components/New/Home/ThirdContainer";
import { TopContainer } from "@/components/New/Home/TopContainer";
import { Layout } from "@/components/New/Layout";
import axios from "axios";
import Head from "next/head";
import React from "react";

export default function Home({ articlesRes }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shyna Gupta",
    url: "https://shynagupta.com",
    sameAs: [
      "https://x.com/shyna20012",
      "https://www.linkedin.com/in/shyna-gupta-053016210/",
    ],
    jobTitle: "Writer | International affairs",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Shyna Gupta",
                  item: "https://www.shynagupta.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Articles",
                  item: "https://www.shynagupta.com/articles",
                },
              ],
            }),
          }}
        />
      </Head>
      <Layout>
        <TopContainer articles={articlesRes} />
        <SecondContainer articles={articlesRes} />
        <ThirdContainer articles={articlesRes} />
        <FourthContainer articles={articlesRes} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get(
      "https://dev.snowchildstudio.com/wp-json/custom/v1/posts",
      {
        params: {
          page: 1,
          per_page: 15,
        },
        timeout: 10000,
      }
    );

    const articlesRes = response.data;

    return {
      props: {
        articlesRes,
      },
    };
  } catch (error) {
    console.error("Error fetching articles:", error);

    return {
      props: {
        articlesRes: [],
      },
    };
  }
}
