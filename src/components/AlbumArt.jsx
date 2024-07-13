import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
export const AlbumArt = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "row", gap: 2 }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "400px",
            width: "400px",
            borderRadius: "3px",
          }}
        >
          <Image
            src="/mdm.jpeg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography fontSize="50px" className={bebasNeue.className}>
            My Dear Meloncholy
          </Typography>{" "}
          <Typography fontSize="30px" className={bebasNeue.className}>
            The Weeknd
          </Typography>
        </Box>
      </Container>
    </>
  );
};
