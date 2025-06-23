import { SecondContainer } from "@/components/New/Home/SecondContainer";
import { TopContainer } from "@/components/New/Home/TopContainer";
import { Layout } from "@/components/New/Layout";
import { fetchAllArticles } from "@/lib/notion";
import React from "react";

const Index = ({ articlesRes }) => {
  return (
    <>
      <Layout>
        <TopContainer articles={articlesRes} />
        <SecondContainer articles={articlesRes} />
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  let startCursor = undefined;
  const articles = await fetchAllArticles(startCursor, 9);
  const articlesRes = articles?.results;

  return {
    props: { articlesRes },
  };
}
