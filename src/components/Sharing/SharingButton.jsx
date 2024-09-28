import { Facebook, LinkedIn, WhatsApp, X } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

export const SharingButton = ({ slug, text }) => {
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
};
