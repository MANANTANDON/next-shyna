"use client";
import { Facebook, LinkedIn, WhatsApp, X } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

export const SharingButton = ({ slug, text }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <a
          href={`https://api.whatsapp.com/send?text=${text} ${slug}`}
          style={{
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          target="_blank"
        >
          <WhatsApp fontSize="small" sx={{ color: "#353535" }} />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?url=${slug}&title=${text}`}
          style={{
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          target="_blank"
        >
          <LinkedIn fontSize="small" sx={{ color: "#353535" }} />
        </a>
        <a
          href={`https://www.facebook.com/sharer.php?u=${slug}`}
          style={{
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          target="_blank"
        >
          <Facebook fontSize="small" sx={{ color: "#353535" }} />
        </a>
        <a
          href={`https://twitter.com/share?url=${slug}&text=${text}`}
          style={{
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          target="_blank"
        >
          <X fontSize="small" sx={{ color: "#353535" }} />
        </a>
      </Box>
    </>
  );
};
