import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { NewsCard } from "./Cards/NewsCard";
import { KeyboardArrowRight } from "@mui/icons-material";

export const Articles = ({ articles }) => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 2,
          }}
        >
          <Grid
            container
            gap={4.2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {articles?.map((item, key) => (
              <Grid item xs={12} sm={5.72} md={3.72} lg={3.76} key={key}>
                <NewsCard data={item} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              my: 5,
            }}
          >
            <a href="/articles">
              <Box
                sx={{
                  borderRadius: "4px",
                  color: "#6E85A4",
                  bgcolor: "#E9F0F8",
                  border: "1px solid #E0E9F5",
                  display: "flex",
                  p: 1.5,
                }}
              >
                <Typography fontWeight="bolder" fontSize="17px">
                  More Articles
                </Typography>
                <KeyboardArrowRight />
              </Box>
            </a>
          </Box>
        </Box>
      </Container>
    </>
  );
};
