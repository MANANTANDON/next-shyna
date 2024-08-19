import { IMG_URI, INIT_URL } from "@/constant";
import { formatDateToDayMonth } from "@/hooks/formatDate";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export const PostPage = ({ data }) => {
  const slug = `${INIT_URL}${data?.data?.slug}`;
  const imgUrl = `${IMG_URI}${data?.data?.featureImg}`;
  return (
    <>
      <Head>
        <title>{data?.data?.meta?.title || data?.data?.title}</title>
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
          content={data?.data?.meta?.title || data?.data?.title}
        />
        <meta
          name="description"
          content={data?.data?.meta?.description || data?.data?.title}
        />
        <meta
          property="og:description"
          content={data?.data?.meta?.description || data?.data?.title}
        />
        <link rel="canonical" href={`${INIT_URL}/${data?.data?.slug}`} />
        <meta name="tweetmeme-title" content={slug} />

        <meta name="image" property="og:image" content={imgUrl} />

        <meta
          name="title"
          content={data?.data?.meta?.title || data?.data?.title}
        />
        <meta name="twitter:image" content={imgUrl} />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content={data?.data?.title} />
        <meta property="og:url" content={slug} />
        <meta
          property="article:published_time"
          content={data?.data?.createdAt}
        />
        <meta
          property="article:modified_time"
          content={data?.data?.updatedAt}
        />
        <meta
          itemprop="name"
          content={data?.data?.meta?.title || data?.data?.title}
        />
        <meta
          itemprop="description"
          content={data?.data?.meta?.description || data?.data?.title}
        />
      </Head>
      <Box
        sx={{
          bgcolor: "white",
          p: 2,
          my: 2,
          borderRadius: "5px",
          mx: -1,
        }}
      >
        {/* HEADING */}
        <Typography
          fontSize="35px"
          fontWeight="bold"
          lineHeight="45px"
          sx={{ mt: 5, mb: 2 }}
          textAlign="center"
        >
          {data?.data?.title}
        </Typography>
        {/*SUBHEADING*/}
        <Typography
          fontSize="16px"
          textAlign="center"
          sx={{ color: "grey", mt: 2 }}
        >
          {data?.data?.meta?.subheading}
        </Typography>
        {/* BY USER */}
        <Typography
          textAlign="center"
          sx={{ mb: 5, mt: 2, color: "#6087B5" }}
        >{`${data?.data?.byLiner?.name} | ${formatDateToDayMonth(
          data?.data?.createdAt
        )} `}</Typography>

        {/*IMAGE*/}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: { xs: "200px", sm: "500px" },
            width: "100%",
            borderRadius: "10px",
            my: 2,
          }}
        >
          <Image
            src={`${IMG_URI}/${data?.data?.featureImg}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={data?.data?.meta?.alt}
            title={data?.data?.meta?.title}
          />
        </Box>
        {/* CONTENT */}
        <Box>
          <div
            className="blogRootContainer"
            dangerouslySetInnerHTML={{ __html: data?.data?.content }}
          />
        </Box>
      </Box>
    </>
  );
};
