import axios from "axios";
import React from "react";
import { Layout } from "@/components/New/Layout";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Widget } from "@/components/New/Widget/Widget";
import Head from "next/head";
import { INIT_URL } from "@/constant";
import { SharingButton } from "@/components/Sharing/SharingButton";
import { DateAndTime } from "@/components/New/Extras/DateAndTime";
import { PostPage } from "@/components/Post/PostPage";

function Index({ postData }) {
  const slug = `${INIT_URL}opinion/${postData?.data?.slug}`;

  if (!postData || !postData.data) {
    return (
      <Layout>
        <Typography>Post not found</Typography>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{postData?.data?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/shyna.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta property="og:site_name" content="Shyna" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData?.data?.title} />
        <meta
          name="description"
          content={postData?.data?.excerpt || postData?.data?.title}
        />
        <meta
          property="og:description"
          content={postData?.data?.excerpt || postData?.data?.title}
        />
        <link
          rel="canonical"
          href={`${INIT_URL}/opinion/${postData?.data?.slug}`}
        />
        <meta
          name="tweetmeme-title"
          content={`${INIT_URL}/opinion/${postData?.data?.slug}`}
        />

        <meta
          name="image"
          property="og:image"
          content={postData?.data?.featured_image}
        />
        <meta
          name="title"
          content={postData?.data?.meta?.title || postData?.data?.title}
        />
        <meta name="twitter:image" content={postData?.data?.featured_image} />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content={postData?.data?.title} />
        <meta
          property="og:url"
          content={`${INIT_URL}/opinion/${postData?.data?.slug}`}
        />
        <meta
          property="article:published_time"
          content={postData?.data?.date?.date_gmt}
        />
        <meta
          property="article:modified_time"
          content={postData?.data?.modified_gmt}
        />
        <meta itemProp="name" content={postData?.data?.title} />
        <meta
          itemProp="description"
          content={postData?.data?.excerpt || postData?.data?.title}
        />
      </Head>

      <Layout>
        <Box sx={{ bgcolor: "rgb(227,225,214)", mt: 2, borderRadius: "9px" }}>
          <PostPage postData={postData} slug={slug} />
        </Box>
        {/* <Grid container sx={{ mt: 2 }}> */}
        {/* Main Content */}

        {/* Sidebar */}
        {/* <Grid
            item
            xs={12}
            md={2}
            sx={{
              bgcolor: "rgb(227,225,214)",
              borderTopLeftRadius: "9px",
              p: 2,
              border: "0.5px solid #353535",
            }}
          >
            <Widget />
          </Grid> */}
        {/* </Grid> */}
      </Layout>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const response = await axios.get(
      `https://dev.snowchildstudio.com/wp-json/custom/v1/posts/${slug}`,
      { timeout: 10000 }
    );

    const postData = response.data;

    if (!postData) {
      return { notFound: true };
    }

    return {
      props: {
        postData,
      },
    };
  } catch (error) {
    console.error("Error fetching SSR data:", error.message);

    if (error.response?.status === 404) {
      return { notFound: true };
    }

    return { notFound: true };
  }
}

export default Index;
