import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const NewsCard = ({ data }) => {
  return (
    <>
      <Card variant="outlined" sx={{ borderRadius: "0px", border: "none" }}>
        <CardContent
          sx={{
            padding: 0,
            "&:last-child": {
              paddingBottom: 0,
            },
          }}
        >
          <a href={`/${data?.properties?.slug?.rich_text[0]?.plain_text}`}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "200px",
              }}
            >
              <Image
                src={data?.properties?.featureImg?.files[0]?.file?.url}
                blurDataURL={data?.properties?.featureImg?.files[0]?.file?.url}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={data?.meta?.alt}
                title={data?.meta?.title}
                quality={8}
              />
            </Box>
          </a>
          <Box sx={{ bgcolor: `#6087b520`, height: "180px", py: 1 }}>
            <Typography
              sx={{ px: 2, color: "#6087b5" }}
              textAlign="center"
              fontSize="10px"
              fontWeight="bolder"
            >
              OPINION
            </Typography>
            <a href={`/${data?.properties?.slug?.rich_text[0]?.plain_text}`}>
              <Typography
                sx={{
                  px: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  my: 1,
                  "&:hover": {
                    color: "#6087b5",
                  },
                }}
                textAlign="center"
                fontSize="1rem"
                fontWeight="bold"
              >
                {data?.properties?.Name?.title[0]?.plain_text}
              </Typography>
            </a>
            <Typography
              sx={{
                px: 2,
                color: "#686D76",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "4",
                WebkitBoxOrient: "vertical",
                my: 1,
              }}
              textAlign="center"
              fontSize="0.7rem"
            >
              {data?.properties?.subHeading?.rich_text[0]?.plain_text}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
