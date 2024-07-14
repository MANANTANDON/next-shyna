import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const NewsCard = ({ color }) => {
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
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "200px",
            }}
          >
            <Image
              src="/img1.jpeg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
          <Box sx={{ bgcolor: `#6087b520`, height: "180px", py: 1 }}>
            <Typography
              sx={{ px: 2, color: "#6087b5" }}
              textAlign="center"
              fontSize="10px"
              fontWeight="bolder"
            >
              OPINION
            </Typography>
            <Typography
              sx={{
                px: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                my: 1,
              }}
              textAlign="center"
              fontSize="1rem"
              fontWeight="bold"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
