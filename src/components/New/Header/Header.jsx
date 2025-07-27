import {
  EmailRounded,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Header = () => {
  const socials = (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1.5,
        }}
      >
        <a
          href="https://www.instagram.com/shynaa.co/"
          target="_blank"
          aria-label="Shyna Gupta Instagram Link"
        >
          <Instagram />
        </a>
        <a
          href="https://in.linkedin.com/in/shyna-gupta-053016210"
          target="_blank"
          aria-label="Shyna Gupta LinkeIn Link"
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.youtube.com/@ShynaaG"
          target="_blank"
          aria-label="Shyna Gupta Youtube Link"
        >
          <YouTube />
        </a>
        <a
          href="mailto:shyna20012@gmail.com"
          target="_blank"
          aria-label="Shyna Gupta Email Link"
        >
          <EmailRounded />
        </a>
      </Box>
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
    </>
  );
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={2.5}
        sx={{
          bgcolor: "rgb(227,225,214)",
          p: 1,
          border: "0.5px solid  #353535",
          borderBottomLeftRadius: "7px",
          borderBottomRightRadius: "7px",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href="/">
          <Image
            src="/shynaSignature.png"
            width={150}
            height={30}
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
        xs={12}
        md={7}
        sx={{
          bgcolor: "rgb(227,225,214)",
          p: 1,
          border: "0.5px solid  #353535",
          borderBottomLeftRadius: "7px",
          borderBottomRightRadius: "7px",
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", md: "center" },
        }}
      >
        <Box>
          <a href="/">
            <Typography
              className="font-700"
              textAlign="center"
              sx={{ fontSize: { xs: "30px", md: "45px" }, color: "#353535" }}
            >
              Shyna co.
            </Typography>
          </a>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {socials}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={2.5}
        sx={{
          bgcolor: "rgb(227,225,214)",
          px: 5,
          border: "0.5px solidrgb(27, 21, 21)",
          borderBottomLeftRadius: "7px",
          borderBottomRightRadius: "7px",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        {socials}
      </Grid>
    </Grid>
  );
};

{
  /* <Link
          href="mailto:shyna20012@gmail.com"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <EmailRounded sx={{ color: "#353535" }} />
        </Link>
        <Link
          href="https://in.linkedin.com/in/shyna-gupta-053016210"
          target="_blank"
          className="links"
          aria-label="Shyna Gupta LinkeIn Link"
        >
          <LinkedIn sx={{ color: "#353535" }} />
        </Link> */
}
