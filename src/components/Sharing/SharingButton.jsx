"use client";

import {
  Facebook,
  IosShareRounded,
  LinkedIn,
  WhatsApp,
  X,
} from "@mui/icons-material";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";

export const SharingButton = ({ slug, text }) => {
  const [isClient, setIsClient] = useState(false);
  const isLaptop = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  if (!isClient || !navigator?.share || !isLaptop) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <a
            href={`https://api.whatsapp.com/send?text=${text} ${slug}`}
            style={{
              padding: "10px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            target="_blank"
          >
            <WhatsApp fontSize="small" sx={{ color: "#6087B5" }} />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${slug}&title=${text}`}
            style={{
              padding: "10px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            target="_blank"
          >
            <LinkedIn fontSize="small" sx={{ color: "#6087B5" }} />
          </a>
          <a
            href={`https://www.facebook.com/sharer.php?u=${slug}`}
            style={{
              padding: "10px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            target="_blank"
          >
            <Facebook fontSize="small" sx={{ color: "#6087B5" }} />
          </a>
          <a
            href={`https://twitter.com/share?url=${slug}&text=${text}`}
            style={{
              padding: "10px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            target="_blank"
          >
            <X fontSize="small" sx={{ color: "#6087B5" }} />
          </a>
        </Box>
      </>
    );
  }

  return (
    <IconButton
      onClick={() => {
        navigator
          .share({
            title: text,
            slug,
          })
          .then(() => console.log("Successful share"))
          .catch(() => console.log("Error sharing"));
      }}
    >
      <IosShareRounded fontSize="small" sx={{ color: "#000" }} />
    </IconButton>
  );
};
