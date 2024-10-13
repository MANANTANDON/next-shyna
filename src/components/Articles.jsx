import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { NewsCard } from "./Cards/NewsCard";
import { ArrowForwardIosRounded } from "@mui/icons-material";

export const Articles = ({ articles }) => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#ffffff90",
            py: 2,
            px: 2,
            borderRadius: "10px",
            my: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              width: "fit-content",
              "&:hover": {
                cursor: "pointer",
                color: "#6087b5",
              },
            }}
          >
            <Typography
              fontWeight="bolder"
              fontSize="25px"
              sx={{
                my: 2,
              }}
            >
              ARTICLES
            </Typography>
            <Box>
              <ArrowForwardIosRounded />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1.5,
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: "25px",
            }}
          >
            {articles.map((item, key) => (
              <Box sx={{ width: { xs: "100%", sm: "270px" } }} key={key}>
                <NewsCard data={item} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};
