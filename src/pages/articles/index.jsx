import { ArticlesPage } from "@/components/Articles/ArticlesPage";
import { Layout } from "@/components/Layout";
import { fetchAllArticles } from "@/lib/notion";
import React from "react";

export default function Articles({ articlesRes }) {
  return (
    <>
      <title>Articles</title>
      <link rel="canonical" href="https://shynagupta.com/articles" />
      <link rel="icon" href="/shyna.ico" />
      <meta property="og:title" content="Shyna" />
      <meta property="og:url" content="https://shynagupta.com/articles" />
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
      <Layout>
        <ArticlesPage articles={articlesRes} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const articles = await fetchAllArticles();
  const articlesRes = articles?.results;

  return { props: { articlesRes } };
}
