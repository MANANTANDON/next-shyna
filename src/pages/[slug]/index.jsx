import React from "react";
import { Layout } from "@/components/Layout";
import {
  fetchAllArticles,
  fetchBySlug,
  fetchPageBlocks,
  notion,
} from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { formatDateToDayMonth } from "@/hooks/formatDate";
import { SharingButton } from "@/components/Sharing/SharingButton";
import { INIT_URL, UIColor } from "@/constant";
import Head from "next/head";
import { calculateReadingTime } from "@/hooks/calculateReadingTime";

function Index({ post, postContent }) {
  const slug = `${INIT_URL}${post?.properties?.slug?.rich_text[0]?.plain_text}`;
  const tags = post?.properties?.tags?.multi_select;

  return (
    <>
      <Head>
        <title>{post?.properties?.Name?.title[0]?.plain_text} | Shyna</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/shyna.ico" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <meta property="og:site_name" content="Shyna" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={post?.properties?.Name?.title[0]?.plain_text}
        />
        <meta
          name="description"
          content={
            post?.properties?.subHeading?.rich_text[0]?.plain_text ||
            "Default description"
          }
        />
        <meta
          property="og:description"
          content={
            post?.properties?.subHeading?.rich_text[0]?.plain_text ||
            "Default description"
          }
        />
        <link
          rel="canonical"
          href={`${INIT_URL}/${post?.properties?.slug?.rich_text[0]?.plain_text}`}
        />
        <meta name="tweetmeme-title" content={slug} />

        <meta
          name="image"
          property="og:image"
          content={post?.cover?.file?.url}
        />
        <meta
          name="title"
          content={post?.properties?.Name?.title[0]?.plain_text}
        />
        <meta name="twitter:image" content={post?.cover?.file?.url} />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:alt"
          content={post?.properties?.Name?.title[0]?.plain_text}
        />
        <meta property="og:url" content={slug} />
        <meta
          property="article:published_time"
          content={post?.properties?.createdTime?.created_time}
        />
        <meta
          property="article:modified_time"
          content={post?.properties?.updatedTime?.created_time}
        />
        <meta
          itemprop="name"
          content={post?.properties?.Name?.title[0]?.plain_text}
        />
        <meta
          itemprop="description"
          content={post?.properties?.subHeading?.rich_text[0]?.plain_text}
        />

        {/* Structured Data (JSON-LD) for Article */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Article",
              "headline": "${post?.properties?.Name?.title[0]?.plain_text}",
              "image": "${post?.cover?.file?.url}",
              "datePublished": "${post?.properties?.createdTime?.created_time}",
              "dateModified": "${post?.properties?.updatedTime?.created_time}",
              "author": {
                "@type": "Person",
                "name": "Shyna"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Shyna",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/shyna.ico"
                }
              },
              "description": "${post?.properties?.subHeading?.rich_text[0]?.plain_text}"
            }
          `}
        </script>
      </Head>
      <Layout>
        <Container maxWidth="lg" sx={{ my: 2 }}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              height: { xs: "200px", sm: "450px", md: "550px", lg: "650px" },
              width: "100%",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <Image
              unoptimized
              src={post?.cover?.file?.url}
              blurDataURL={post?.cover?.file?.url}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={60}
              alt=""
              title=""
            />
          </Box>
        </Container>
        <Container maxWidth="md">
          {/* Heading */}
          <Typography
            fontSize="35px"
            fontWeight="bold"
            lineHeight="45px"
            sx={{ mt: 3, mb: 2 }}
            textAlign="left"
            variant="h1"
          >
            {post?.properties?.Name?.title[0]?.plain_text}
          </Typography>
          {/* Subheading */}
          <Typography
            fontSize="16px"
            textAlign="left"
            sx={{ color: "grey", mt: 1 }}
          >
            {post?.properties?.subHeading?.rich_text[0]?.plain_text}
          </Typography>
          {/* Reading time + Sharing */}
          <Grid container display="flex" alignItems="center" sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography sx={{ color: UIColor }} fontSize="14px">
                {`${calculateReadingTime(postContent)} • ${formatDateToDayMonth(
                  post?.properties?.createdTime?.created_time
                )} `}
              </Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="flex-end">
              <SharingButton
                slug={slug}
                text={post?.properties?.Name?.title[0]?.plain_text}
              />
            </Grid>
          </Grid>
          {/* Content */}
          <Box
            sx={{
              my: 4,
              py: 4,
              borderTop: "2px dashed #CBDBF0",
              borderBottom: "2px dashed #CBDBF0",
            }}
          >
            <div
              className="prose"
              style={{ width: "300%", marginBottom: "50px" }}
              dangerouslySetInnerHTML={{ __html: postContent }}
            />
            {/* Sharing Button */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "center",
              }}
            >
              <Typography sx={{ color: UIColor }}>
                Share This Article:
              </Typography>
              <SharingButton
                slug={slug}
                text={post?.properties?.Name?.title[0]?.plain_text}
              />
            </Box>
          </Box>
          <Box sx={{ borderBottom: "2px dashed #CBDBF0", pb: 4 }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {tags?.map((item, key) => (
                <Typography
                  key={key}
                  sx={{
                    color: UIColor,
                    bgcolor: `${UIColor}15`,
                    py: 0.5,
                    px: 1,
                    borderRadius: "7px",
                  }}
                  fontSize="14px"
                >
                  {item?.name}
                </Typography>
              ))}
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  // Fetch all slugs
  const articles = await fetchAllArticles();
  const paths = articles?.results?.map((article) => ({
    params: { slug: article?.properties?.slug?.rich_text[0]?.plain_text },
  }));

  return {
    paths,
    fallback: "blocking", // Pre-render the missing ones during the request
  };
}

export async function getStaticProps({ params }) {
  const post = await fetchBySlug(params.slug);

  if (post === undefined || !post) {
    return {
      redirect: {
        destination: `/404?id=${params.slug}&type=post`,
        permanent: false,
      },
    };
  }

  const postData = await fetchPageBlocks(post.id);
  const renderer = new NotionRenderer({ client: notion });
  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const postContent = await renderer.render(...postData);

  return {
    props: { post, postContent },
    revalidate: 60, // Revalidate every 60 seconds for fresh data
  };
}

export default Index;
