import { Layout } from "@/components/Layout";
import { PostPage } from "@/components/Post/PostPage";
import { Container } from "@mui/material";
import React from "react";

export default function Index() {
  return (
    <>
      <Layout>
        <Container maxWidth="md">
          <PostPage />
        </Container>
      </Layout>
    </>
  );
}
