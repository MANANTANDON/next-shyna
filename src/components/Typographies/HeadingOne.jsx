import { Typography } from "@mui/material";
import React from "react";

export const HeadingOne = ({ post, type }) => {
  if (type === "one") {
    return (
      <>
        <Typography
          component={"a"}
          href={`/opinion/${post?.slug}`}
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
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
  }

  if (type === "two") {
    return (
      <>
        <Typography
          component={"a"}
          href={`/opinion/${post?.slug}`}
          sx={{
            fontSize: "28px",
            lineHeight: "34px",
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
  }
};
