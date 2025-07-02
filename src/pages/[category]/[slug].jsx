import axios from "axios";
import React from "react";
import { Layout } from "@/components/New/Layout";
import { Box, Grid, Typography } from "@mui/material";
import { FlareRounded } from "@mui/icons-material";
import { formatDateToDayMonth } from "@/hooks/formatDate";
import Image from "next/image";
import { Widget } from "@/components/New/Widget/Widget";
import Head from "next/head";
import { INIT_URL } from "@/constant";
import { SharingButton } from "@/components/Sharing/SharingButton";

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/shyna.ico" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>

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
        <meta itemprop="name" content={postData?.data?.title} />
        <meta
          itemprop="description"
          content={postData?.data?.excerpt || postData?.data?.title}
        />
      </Head>
      <Layout>
        <Grid container sx={{ mt: 2 }}>
          <Grid
            item
            xs={12}
            md={8.5}
            sx={{
              bgcolor: "rgb(227,225,214)",
              borderTopRightRadius: "9px",
              p: 2,
              border: "0.5px solid #353535",
            }}
          >
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              <Typography
                sx={{ fontSize: "28px", lineHeight: "35px" }}
                className="font-700"
              >
                {postData?.data?.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "flex-start", md: "center" },
                  flexDirection: { xs: "column", md: "row" },
                  gap: 1.5,
                  mt: 2,
                  color: "rgb(155,155,145)",
                }}
              >
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  <Typography sx={{ fontSize: "14px" }}>
                    {postData?.data?.categories?.[0]?.name}
                  </Typography>
                  <FlareRounded
                    fontSize="small"
                    sx={{ color: "rgb(163,80,59)" }}
                  />
                  <Typography sx={{ fontSize: "14px" }}>
                    {formatDateToDayMonth(postData?.data?.date)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SharingButton slug={slug} text={postData?.data?.title} />
                </Box>
              </Box>
            </Box>
            <Box sx={{ my: 2 }}>
              <Image
                src={postData?.data?.featured_image}
                alt={postData?.data?.title}
                title={postData?.data?.title}
                layout="responsive"
                width={16}
                height={9}
                placeholder="blur"
                blurDataURL="/shynaSignature.png"
                unoptimized
                quality={8}
              />
            </Box>
            <div
              style={{
                fontSize: "16px",
                lineHeight: 1.3,
              }}
              className="font-hel-400 wp-content"
              dangerouslySetInnerHTML={{
                __html: postData?.data?.content,
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderTop: "1px solid #353535",
                pt: 2,
              }}
            >
              <Typography>Share This Article</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SharingButton slug={slug} text={postData?.data?.title} />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3.5}
            sx={{
              bgcolor: "rgb(227,225,214)",
              borderTopLeftRadius: "9px",
              p: 2,
              border: "0.5px solid #353535",
              position: "sticky",
              top: "20px",
              alignSelf: "flex-start",
              maxHeight: "100vh",
              overflowY: "auto",
            }}
          >
            <Widget />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(
      "https://dev.snowchildstudio.com/wp-json/custom/v1/posts",
      {
        timeout: 10000, // Add timeout
      }
    );

    const posts = response.data;

    // Add validation
    if (!Array.isArray(posts)) {
      console.error("Posts response is not an array:", posts);
      return {
        paths: [],
        fallback: "blocking", // Changed to blocking for better error handling
      };
    }

    const paths = posts
      .map((post) => {
        // Add validation for required fields
        if (!post.slug) {
          console.error("Post missing slug:", post);
          return null;
        }

        return {
          params: {
            category: post.category || "uncategorized", // Provide fallback
            slug: post.slug,
          },
        };
      })
      .filter(Boolean); // Remove null entries

    console.log("Generated paths:", paths); // Debug log

    return {
      paths,
      fallback: "blocking", // Changed from false to blocking
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }) {
  const { slug, category } = params;

  console.log("getStaticProps called with params:", params); // Debug log

  try {
    const response = await axios.get(
      `https://dev.snowchildstudio.com/wp-json/custom/v1/posts/${slug}`,
      {
        timeout: 10000, // Add timeout
      }
    );

    const postData = response.data;

    // Add validation
    if (!postData) {
      console.error(`No data returned for slug: ${slug}`);
      return {
        notFound: true,
      };
    }

    console.log("Post data fetched successfully for slug:", slug); // Debug log

    return {
      props: {
        postData,
      },
      revalidate: 60, // Add ISR revalidation
    };
  } catch (error) {
    console.error(
      `Error fetching data for slug: ${slug}`,
      error.response?.status,
      error.response?.data
    );

    // Check if it's a 404 from the API
    if (error.response?.status === 404) {
      return {
        notFound: true,
      };
    }

    // For other errors, you might want to retry or show an error page
    return {
      notFound: true,
    };
  }
}

export default Index;
