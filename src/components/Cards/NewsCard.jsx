import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const NewsCard = () => {
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
              src="/images/img1.png"
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
            <a
              href="/latest-statement-in-governance"
              style={{ textDecoration: "none", color: "black" }}
            >
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
                LATEST STATEMENT IN GOVERNANCE
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
              Exploring the Rising Divide in U.S., Indian, and European
              Politics: Impacts and Implications
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
