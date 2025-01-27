import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "transparent" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            p: 5,
          }}
        >
          <Box>
            <Typography textAlign="center" sx={{ color: "#6E85A4" }}>
              © 2024{" "}
              <span>
                <a href="/" style={{ color: "#6E85A4" }}>
                  shynagupta.com
                </a>
              </span>{" "}
              All Right Reserved.
            </Typography>
            <Typography textAlign="center" sx={{ color: "#3E73B9", mt: 2 }}>
              <span>
                <a
                  href="/terms-and-condition"
                  style={{
                    color: "#3E73B9",
                    borderBottom: "1px dotted #3E73B9",
                    paddingBottom: "2px",
                    marginRight: "10px",
                  }}
                >
                  Terms & Condition{" "}
                </a>
              </span>
              •
              <span>
                <a
                  href="/privacy-policy"
                  style={{
                    color: "#3E73B9",
                    borderBottom: "1px dotted #3E73B9",
                    paddingBottom: "2px",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  Privacy Policy
                </a>
              </span>
            </Typography>
            <Box sx={{ mt: 4 }}>
              <a href="/">
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "54px",
                    width: "150px",
                    m: "auto",
                  }}
                >
                  <Image
                    unoptimized
                    src="/shynaSignature.png"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt=""
                    title=""
                  />
                </Box>
              </a>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
