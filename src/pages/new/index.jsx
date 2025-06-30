import { FourthContainer } from "@/components/New/Home/FourthContainer";
import { SecondContainer } from "@/components/New/Home/SecondContainer";
import { ThirdContainer } from "@/components/New/Home/ThirdContainer";
import { TopContainer } from "@/components/New/Home/TopContainer";
import { Layout } from "@/components/New/Layout";
import axios from "axios";
import React from "react";

const Index = ({ articlesRes }) => {
  return (
    <>
      <Layout>
        <TopContainer articles={articlesRes} />
        <SecondContainer articles={articlesRes} />
        <ThirdContainer articles={articlesRes} />
        <FourthContainer articles={articlesRes} />
      </Layout>
    </>
  );
};

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

export default Index;
