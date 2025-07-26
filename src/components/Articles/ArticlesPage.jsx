import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { DateAndTime } from "../New/Extras/DateAndTime";

export const ArticlesPage = ({ articles }) => {
  return (
    <Box
      sx={{
        my: 2,
        mx: 0,
        bgcolor: "rgb(227, 225, 214)",
        p: 2,
        borderRadius: "7px",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "52px" },
          mb: 2,
          px: 1,
          borderBottom: { xs: "1px solid #353535", md: "none" },
        }}
        className="font-700"
      >
        Articles
      </Typography>

      {/* Grid container with border and divide styles */}
      <Box
        sx={{
          border: { xs: "none", md: "1px solid #353535" },
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <Grid container>
          {articles?.data?.map((item, index) => {
            const isLastInRow = (index + 1) % 4 === 0; // For md breakpoint (4 columns)
            const isLastRow =
              index >= articles.data.length - (articles.data.length % 4 || 4);

            return (
              <Grid
                item
                xs={12}
                md={3}
                key={index}
                sx={{
                  p: { xs: 1, md: 2.5 },
                  // Mobile borders
                  borderBottom: {
                    xs:
                      index !== articles.data.length - 1
                        ? "1px solid #353535"
                        : "none",
                    md: "none",
                  },
                  // Desktop borders
                  borderRight: {
                    xs: "none",
                    md: !isLastInRow ? "1px solid #353535" : "none",
                  },
                  borderBottom: {
                    xs:
                      index !== articles.data.length - 1
                        ? "1px solid #353535"
                        : "none",
                    md: !isLastRow ? "1px solid #353535" : "none",
                  },
                  "&:hover": {
                    bgcolor: "rgba(53, 53, 53, 0.05)",
                    transition: "background-color 0.2s ease",
                  },
                }}
              >
                <a
                  href={`/opinion/${item?.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: "200px",
                      width: "100%",
                      overflow: "hidden",
                      borderRadius: "5px",
                      mt: { xs: 2, md: 0 },
                      mb: 2,
                      transition: "transform 0.2s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <Image
                      src={item?.featured_image}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt={item?.title}
                    />
                  </Box>

                  <Typography
                    className="font-700"
                    sx={{
                      fontSize: "20px",
                      lineHeight: "25px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      height: "54px",
                      mb: 0.5,
                      "&:hover": {
                        color: "#00000099",
                        transition: "color 0.2s ease",
                      },
                    }}
                  >
                    {item?.title}
                  </Typography>
                  <DateAndTime articles={item} />
                  <Typography
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.4,
                      mt: 0.5,
                    }}
                    className="font-hel-400"
                  >
                    {item?.excerpt}
                  </Typography>
                </a>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
