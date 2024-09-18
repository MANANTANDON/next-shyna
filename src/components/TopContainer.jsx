import { Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const TopContainer = () => {
  return (
    <>
      <Box sx={{ py: 5 }}>
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
            <Grid
              xs={12}
              md={6}
              item
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Typography fontWeight="light">Hey! I'm Shyna,</Typography>
              <Typography fontWeight="light">
                based out of New Delhi, India. I write about politics, social
                issues and international affairs.
              </Typography>
              <Typography sx={{ my: 1 }}>
                <span style={{ fontWeight: "light" }}>
                  I can be reached at:{" "}
                </span>
                <span
                  style={{
                    fontWeight: "bolder",
                    borderBottom: "2px solid #000",
                  }}
                >
                  shyna20012@gmail.com
                </span>
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
                  height: "200px",
                  width: "200px",
                  borderRadius: "50%",
                  border: "6px solid #6087b550",
                }}
              >
                <Image
                  src="/Shyna.jpg"
                  blurDataURL="/Shyna.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Shyna Gupta"
                  title="Shyna Gupta"
                />
              </Box>
            </Grid>
            <Grid xs={12} md={6} item sx={{ display: { md: "none" } }}>
              <Typography fontWeight="light">Hey! I'm Shyna,</Typography>
              <Typography fontWeight="light">
                based out of New Delhi, India. I write about politics, social
                issues and international affairs.
              </Typography>
              <Typography sx={{ my: 1 }}>
                <span style={{ fontWeight: "light" }}>
                  I can be reached at:{" "}
                </span>
                <span
                  style={{
                    fontWeight: "bolder",
                    borderBottom: "2px solid #000",
                  }}
                >
                  shyna20012@gmail.com
                </span>
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
          </Grid>
        </Container>
      </Box>
    </>
  );
};

// I can be reached at: Shyna20012@gmail.com
