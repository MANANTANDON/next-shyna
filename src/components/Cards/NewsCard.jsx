import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const NewsCard = ({ data }) => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#eaf0f7",
          border: "2px solid #E0E9F5",
          borderRadius: "4px",
        }}
      >
        <CardContent
          sx={{
            padding: 1.6,
            "&:last-child": {
              paddingBottom: 4,
            },
          }}
        >
          <a
            href={`/${data?.properties?.slug?.rich_text[0]?.plain_text}`}
            aria-label={data?.properties?.Name?.title[0]?.plain_text}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "200px",
                borderRadius: "2px",
              }}
            >
              <Image
                unoptimized
                src={data?.properties?.featureImg?.files[0]?.file?.url}
                placeholder="blur"
                blurDataURL="/shynaSignature.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={data?.properties?.Name?.title[0]?.plain_text}
                title={data?.properties?.Name?.title[0]?.plain_text}
                quality={8}
              />
            </Box>
          </a>
          <Box sx={{ height: "180px", py: 1.8 }}>
            <Typography
              sx={{
                color: "#3E73B9",
                bgcolor: "#E0E9F5",
                borderRadius: "2px",
                width: "fit-content",
                py: "4px",
                px: "6px",
              }}
              textAlign="left"
              fontSize="14px"
              fontWeight="bolder"
            >
              OPINION
            </Typography>
            <a href={`/${data?.properties?.slug?.rich_text[0]?.plain_text}`}>
              <Typography
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  my: 1.8,
                  color: "#14263D",
                }}
                textAlign="left"
                fontSize="18px"
                fontWeight="bold"
              >
                {data?.properties?.Name?.title[0]?.plain_text}
              </Typography>
            </a>
            <Typography
              sx={{
                color: "#6E85A4",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                my: 1.8,
                height: "76px",
              }}
              textAlign="left"
              fontSize="16px"
            >
              {data?.properties?.subHeading?.rich_text[0]?.plain_text}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
