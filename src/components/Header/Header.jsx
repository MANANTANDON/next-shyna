import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
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
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
        }}
      >
        <Link href="/">
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
        </Link>
        {/* <Box sx={{ display: "flex", gap: 5 }}>
          {menus.map((item, key) => (
            <Link
              key={key}
              href="/"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Typography>{item}</Typography>
            </Link>
          ))}
        </Box> */}
      </Container>
    </>
  );
};
