import { EditOutlined } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={2.5}
        sx={{
          bgcolor: "rgb(227,225,214)",
          p: 1,
          border: "0.5px solid  #353535",
          borderBottomLeftRadius: "7px",
          borderBottomRightRadius: "7px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href="/">
          <Image
            src="/shynaSignature.png"
            width={200}
            height={54}
            style={{
              height: "auto",
            }}
            alt="shynagutpa.com"
            title="shynagupta.com"
            unoptimized
          />
        </a>
      </Grid>
      <Grid
        item
        xs={7}
        sx={{
          bgcolor: "rgb(227,225,214)",
          p: 1,
          border: "0.5px solid  #353535",
          borderBottomLeftRadius: "7px",
          borderBottomRightRadius: "7px",
        }}
      >
        <Typography
          className="font-700"
          textAlign="center"
          sx={{ fontSize: "60px", color: "#353535" }}
        >
          Agents of Inclusion{/* Shyna co. */}
        </Typography>
      </Grid>
      <Grid
        item
        xs={2.5}
        sx={{
          bgcolor: "rgb(227,225,214)",
          px: 5,
          border: "0.5px solidrgb(27, 21, 21)",
          borderBottomLeftRadius: "7px",
          borderBottomRightRadius: "7px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            border: "2px solid green",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1.5px solid #353535",
            borderRadius: "20px",
            px: 2.5,
            py: 1,
          }}
        >
          <EditOutlined /> Email
        </Typography>
        <Box
          sx={{
            height: "50px",
            width: "50px",
            position: "relative",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <Image
            src="/manan.jpg"
            alt="Shyna Gupta"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Grid>
    </Grid>
  );
};
