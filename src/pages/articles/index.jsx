import { ArticlesPage } from "@/components/Articles/ArticlesPage";
import { Layout } from "@/components/Layout";
import { INIT_URL } from "@/constant";
import { formatDateToDayMonth } from "@/hooks/formatDate";
import { fetchAllArticles } from "@/lib/notion";
import Head from "next/head";
import React from "react";

export default function Articles({ articlesRes }) {
  return (
    <>
      <Head>
        <title>Latest Articles | Shyna Gupta</title>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Shyna Gupta" />
        <link rel="canonical" href="https://shynagupta.com/articles" />
        <link rel="icon" href="/shyna.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Latest Articles | Shyna Gupta" />
        <meta property="og:url" content="https://shynagupta.com/articles" />
        <meta
          property="og:image"
          content="https://shynagupta.com/shynaSignature.png"
        />
        <meta property="og:image:alt" content="Shyna Gupta Logo" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Read the latest articles by Shyna, an expert journalist covering trends in economics and information technology."
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Latest Articles | Shyna Gupta" />
        <meta
          name="twitter:description"
          content="Explore the latest insights in economics and technology."
        />
        <meta
          name="twitter:image"
          content="https://shynagupta.com/shynaSignature.png"
        />

        {/* SEO Meta Description */}
        <meta
          name="description"
          content="Read the latest articles by Shyna, an expert journalist covering trends in economics and information technology. Stay informed with insightful articles and fresh perspectives."
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${INIT_URL}`,
              },
              url: `${INIT_URL}articles`,
              numberOfItems: articlesRes.length,
              itemListOrder: "https://schema.org/ItemListOrderAscending",
              itemListElement: articlesRes.map((item, key) => ({
                "@type": "ListItem",
                position: `${key + 1}`,
                url: `${INIT_URL}${item?.properties?.slug?.rich_text[0]?.plain_text}`,
                name: `${item?.properties?.Name?.title[0]?.plain_text}`,
                description: `${item?.properties?.subHeading?.rich_text[0]?.plain_text}`,
                publish: formatDateToDayMonth(
                  item?.properties?.createdTime?.created_time
                ),
              })),
            }),
          }}
        />
      </Head>

      <Layout>
        <ArticlesPage articles={articlesRes} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let startCursor = undefined;
  const articles = await fetchAllArticles(startCursor, 20);
  const articlesRes = articles?.results;

  return {
    props: { articlesRes },
  };
}
