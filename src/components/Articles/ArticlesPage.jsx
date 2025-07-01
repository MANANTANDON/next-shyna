import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

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
      <Grid container>
        {articles?.data?.map((item, key) => (
          <Grid
            xs={12}
            md={3}
            key={key}
            sx={{
              p: { xs: 1, md: 2.5 },
              borderTop: { xs: "none", md: "0.5px solid #353535" },
              borderLeft: { xs: "none", md: "0.5px solid #353535" },
              borderRight: { xs: "none", md: "0.5px solid #353535" },
              borderBottom: "1px solid #353535",
            }}
          >
            <a href={`/opinion/${item?.slug}`}>
              <Box
                sx={{
                  position: "relative",
                  height: "200px",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "5px",
                  mt: { xs: 2, md: 0 },
                  mb: 2,
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
            </a>
            <a href={`/opinion/${item?.slug}`}>
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
                }}
              >
                {item?.title}
              </Typography>
            </a>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                fontSize: "14px",
                my: 1,
              }}
              className="font-hel-400"
            >
              {item?.excerpt}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
