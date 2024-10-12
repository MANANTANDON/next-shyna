import { Layout } from "@/components/Layout";
import { PostPage } from "@/components/Post/PostPage";
import { GetDataBySlug } from "@/utils/common";
import { Container } from "@mui/material";
import React from "react";

export default function Index({ articleData }) {
  return (
    <>
      <Layout>
        <Container maxWidth="md">
          <PostPage data={articleData} />
        </Container>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const response = await GetDataBySlug(query?.slug);
  const articleData = response.data;

  return {
    props: {
      articleData,
    },
  };
}
