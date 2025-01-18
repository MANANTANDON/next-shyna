import { Box, Typography, Container, Grid } from "@mui/material";
import React from "react";
import { NewsCard } from "../Cards/NewsCard";

export const ArticlesPage = ({ articles }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          pt: { xs: 0, md: 2 },
          pb: 5,
          px: { xs: 0, md: 2 },
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
            fontSize="30px"
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
        <Grid
          container
          gap={4.2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            borderTop: "2px dashed #CBDBF0",
            borderBottom: "2px dashed #CBDBF0",
            py: 3,
          }}
        >
          {articles?.map((item, key) => (
            <Grid item xs={12} sm={5.72} md={3.71} lg={3.76} key={key}>
              <NewsCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
