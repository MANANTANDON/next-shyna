import { Typography } from "@mui/material";
import React from "react";

export const HeadingTwo = ({ post }) => {
  return (
    <>
      <Typography
        component={"a"}
        href={`/opinion/${post?.slug}`}
        sx={{
          fontSize: "22px",
          lineHeight: "30px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
          mb: 1,
          "&:hover": {
            color: "#00000099",
          },
        }}
        className="sf-semibold"
      >
        {post?.title}
      </Typography>
    </>
  );
};
