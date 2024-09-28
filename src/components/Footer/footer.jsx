import { Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "white", py: 4, mb: -2, mx: -1, mt: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ px: 2, borderBottom: "1.5px solid grey", pb: 2 }}>
            <Grid container>
              <Grid item md={6} sm={12}>
                <Box>
                  <a href="/">
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        height: "54px",
                        width: "150px",
                      }}
                    >
                      <Image
                        src="/shynaSignature.png"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </Box>
                  </a>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      my: 2,
                    }}
                  >
                    <Link
                      href="https://www.instagram.com/shyna.co/"
                      className="links"
                      style={{ border: "none" }}
                      target="_blank"
                    >
                      <Instagram />
                    </Link>
                    <Link
                      href="https://in.linkedin.com/in/shyna-gupta-053016210"
                      target="_blank"
                      className="links"
                      style={{ border: "none" }}
                    >
                      <LinkedIn />
                    </Link>
                  </Box>
                </Box>
              </Grid>
              {/* <Grid
                item
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "row", md: "row-reverse" },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography fontSize="14px" sx={{ color: "#6087b5" }}>
                    About Me
                  </Typography>
                  <Typography fontSize="14px" sx={{ color: "#6087b5" }}>
                    Lets Catch Up
                  </Typography>
                </Box>
              </Grid> */}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              mt: 4,
              px: 2,
            }}
          >
            <Typography fontSize="12px">
              © 2024 shynagupta.com All Right Reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: { xs: 2, sm: 0 } }}>
              <a href="/privacy-policy" style={{ textDecoration: "none" }}>
                <Typography
                  fontSize="12px"
                  sx={{ color: "#6087b5", "&:hover": { color: "#6087b590" } }}
                >
                  Privacy Policy
                </Typography>
              </a>
              <a href="/terms-and-condition" style={{ textDecoration: "none" }}>
                <Typography
                  fontSize="12px"
                  sx={{ color: "#6087b5", "&:hover": { color: "#6087b590" } }}
                >
                  Terms & Condition
                </Typography>
              </a>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
