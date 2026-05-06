import {
  EmailRounded,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import { Box } from "@mui/material";
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
          unoptimized
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
    <div className="bg-[rgb(227,225,214)] py-4 lg:py-6 flex items-center justify-center">
      <a
        href="/"
        className="font-gothic text-[#353535] text-4xl md:text-5xl lg:text-6xl w-fit"
      >
        Agents of Inclusion
      </a>
    </div>
  );
};
