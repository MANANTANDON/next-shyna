import React from "react";
import { Layout } from "@/components/Layout";
import { fetchBySlug, fetchPageBlocks, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { formatDateToDayMonth } from "@/hooks/formatDate";
import { SharingButton } from "@/components/Sharing/SharingButton";
import { INIT_URL, UIColor } from "@/constant";
import Head from "next/head";
import { IosShare } from "@mui/icons-material";
import { calculateReadingTime } from "@/hooks/calculateReadingTime";

function Index({ post, postContent }) {
  const slug = `${INIT_URL}${post?.properties?.slug?.rich_text[0]?.plain_text}`;
  const tags = post?.properties?.tags?.multi_select;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Head>
        <title> {post?.properties?.Name?.title[0]?.plain_text}</title>
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
        <meta
          property="og:title"
          content={post?.properties?.Name?.title[0]?.plain_text}
        />
        <meta
          name="description"
          content={post?.properties?.subHeading?.rich_text[0]?.plain_text}
        />
        <meta
          property="og:description"
          content={post?.properties?.subHeading?.rich_text[0]?.plain_text}
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
              // alt={data?.data?.meta?.alt}
              // title={data?.data?.meta?.title}
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
          {/* SUBHEADING */}
          <Typography
            fontSize="16px"
            textAlign="left"
            sx={{ color: "grey", mt: 1 }}
          >
            {post?.properties?.subHeading?.rich_text[0]?.plain_text}
          </Typography>
          {/*Reading, time + sharing*/}
          <Grid container display="flex" alignItems="center" sx={{ mt: 2 }}>
            <Grid xs={6}>
              <Typography
                sx={{ color: UIColor }}
                fontSize="14px"
              >{`${calculateReadingTime(postContent)} • ${formatDateToDayMonth(
                post?.properties?.createdTime?.created_time
              )} `}</Typography>
            </Grid>
            <Grid xs={6} display="flex" justifyContent="flex-end">
              <SharingButton
                slug={slug}
                text={post?.properties?.Name?.title[0]?.plain_text}
              />
            </Grid>
          </Grid>
          {/* CONTENT */}
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
              style={{
                width: "300%",
                marginBottom: "50px",
              }}
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
              <Typography
                sx={{
                  color: UIColor,
                }}
              >
                Share This Article:
              </Typography>{" "}
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

export async function getServerSideProps({ query }) {
  const post = await fetchBySlug(query.slug);
  console.log(post, "Need to check");

  if (post === undefined) {
    return {
      redirect: {
        destination: `/404?id=${query.slug}&type=post`,
        permanent: false,
      },
    };
  }

  const postData = await fetchPageBlocks(post?.id);

  const renderer = new NotionRenderer({
    client: notion,
  });

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined));

  const postContent = await renderer.render(...postData);

  return { props: { post, postContent } };
}

export default Index;

{
  /* <Container maxWidth="md">
<Box
  mt={2}
  sx={{
    bgcolor: "#fff",
    mx: { xs: -1, md: 0 },
    p: 2,
    mb: 10,
    borderRadius: "2px",
  }}
>
  {/* BY USER 
  <Typography
    textAlign="center"
    sx={{ mt: 1, color: "#6087B5" }}
  >{`Shyna Gupta | ${formatDateToDayMonth(
    post?.properties?.createdTime?.created_time
  )} `}</Typography>
  {/* Sharing Button
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      mb: 2,
      mt: 1,
    }}
  >
    <SharingButton
      slug={slug}
      text={post?.properties?.Name?.title[0]?.plain_text}
    />
  </Box>

  <Box
    sx={{
      // border: "2px solid red",
      mt: 2,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      className="prose"
      style={{
        width: "300%",
        marginBottom: "50px",
        // border: "2px solid green",
      }}
      dangerouslySetInnerHTML={{ __html: postContent }}
    />
  </Box>


  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      mb: 2,
      mt: 5,
    }}
  >
    <Typography>Share This Article</Typography>
    <SharingButton
      slug={slug}
      text={post?.properties?.Name?.title[0]?.plain_text}
    />
  </Box>
</Box>
</Container> */
}
