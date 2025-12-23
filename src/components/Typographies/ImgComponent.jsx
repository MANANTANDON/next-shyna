import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ImgComponent = ({ post, h, w, mt }) => {
  return (
    <>
      <a href={`/opinion/${post?.slug}`}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: w,
            height: h,
            borderRadius: "2px",
            mt: mt,
            cursor: "pointer",
            "&:hover": {
              "& img": {
                transform: "scale(1.1)",
              },
              "&::after": {
                opacity: 1,
              },
            },
          }}
        >
          <Image
            unoptimized
            src={
              post?.featured_image === null
                ? "/shynaSignature.png"
                : post.featured_image
            }
            placeholder="blur"
            blurDataURL="/shynaSignature.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={post?.title}
            title={post?.title}
            quality={8}
            style={{
              transition: "transform 0.4s ease",
            }}
          />
        </Box>
      </a>
    </>
  );
};
