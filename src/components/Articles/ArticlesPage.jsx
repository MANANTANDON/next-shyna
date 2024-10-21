import { Box, Typography, Container } from "@mui/material";
import React, { useEffect } from "react";
import { NewsCard } from "../Cards/NewsCard";

export const ArticlesPage = ({ articles }) => {
  return (
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
          }}
        >
          <Typography
            fontWeight="bolder"
            variant="h1"
            fontSize="25px"
            sx={{
              my: 2,
              "&:hover": {
                cursor: "pointer",
                color: "#6087b5",
              },
            }}
          >
            ARTICLES
          </Typography>
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
          {articles?.map((item, key) => (
            <Box sx={{ width: { xs: "100%", sm: "270px" } }} key={key}>
              <NewsCard data={item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};
