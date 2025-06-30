import axios from "axios";
import React from "react";
import { Layout } from "@/components/New/Layout";
import { Box, Grid, Typography } from "@mui/material";
import { FlareRounded } from "@mui/icons-material";
import { formatDateToDayMonth } from "@/hooks/formatDate";
import Image from "next/image";
import { Widget } from "@/components/New/Widget/Widget";

function Index({ postData }) {
  return (
    <>
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
                  alignItems: "center",
                  gap: 1.5,
                  mt: 2,
                  color: "rgb(155,155,145)",
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>
                  {postData?.data?.categories[0]?.name}
                </Typography>
                <FlareRounded
                  fontSize="small"
                  sx={{ color: "rgb(163,80,59)" }}
                />
                <Typography sx={{ fontSize: "14px" }}>
                  {formatDateToDayMonth(postData?.data?.date)}
                </Typography>
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
              fontSize="16px"
              dangerouslySetInnerHTML={{
                __html: postData?.data?.content,
              }}
            />
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
      "https://dev.snowchildstudio.com/wp-json/custom/v1/posts"
    );

    const posts = response.data;

    const paths = posts.map((post) => ({
      params: {
        category: post.category,
        slug: post.slug,
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const response = await axios.get(
      `https://dev.snowchildstudio.com/wp-json/custom/v1/posts/${slug}`
    );
    const postData = response.data;

    return {
      props: {
        postData,
      },
    };
  } catch (error) {
    console.error(`Error fetching data for slug: ${slug}`, error);
    return {
      notFound: true,
    };
  }
}

export default Index;
