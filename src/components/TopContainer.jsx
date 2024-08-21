import { Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const TopContainer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "white", py: 5 }}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              px: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid xs={12} md={6} item>
              <Typography fontSize="30px">
                <span style={{ fontWeight: "lighter" }}>Hey! </span>
                <span style={{ fontWeight: "bolder" }}>I'm Shyna, </span>
                <span style={{ fontWeight: "lighter" }}>A</span>
              </Typography>
              <Typography fontSize="30px" fontWeight="bolder">
                Convergence Journalist
              </Typography>
              <Typography fontSize="30px">
                <span style={{ fontWeight: "lighter" }}>Based in </span>
                <span style={{ fontWeight: "bolder" }}>INDIA </span>
              </Typography>
              <Typography fontSize="14px" sx={{ color: "#6087b5", my: 4 }}>
                So you want to read about the latest world events? The little
                nuggets of history we are still repeating, but are bored
                scrolling the conventional wisdoms.. Perhaps you'd prefer some
                poetic musings, strong opinions, and a few real- life tales
                thrown in? Well, you are at the right place. Welcome to my
                space!
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Link
                  href="https://www.instagram.com/shyna.co/"
                  className="links"
                  target="_blank"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://in.linkedin.com/in/shyna-gupta-053016210"
                  target="_blank"
                  className="links"
                >
                  <LinkedIn />
                </Link>
              </Box>
            </Grid>
            <Grid
              xs={12}
              md={6}
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                my: { xs: 3, sm: 0 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: "300px",
                  width: "300px",
                  borderRadius: "50%",
                  border: "10px solid #6087b550",
                }}
              >
                <Image
                  src="/shyna.jpeg"
                  blurDataURL="/shyna.jpeg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
