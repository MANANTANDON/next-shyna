import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Header = () => {
  const menus = ["Articles", "Compositions"];
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <a href="/">
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              height: { xs: "40px", md: "54px" },
              width: { xs: "110px", md: "150px" },
            }}
          >
            <Image
              src="/shynaSignature.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="shynagutpa.com"
              title="shynagupta.com"
              unoptimized
            />
          </Box>
        </a>
      </Container>
    </>
  );
};
