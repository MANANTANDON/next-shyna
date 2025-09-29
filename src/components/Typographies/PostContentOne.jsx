import React from "react";

export const PostContentOne = ({ post, lines }) => {
  return (
    <>
      <div
        style={{
          fontSize: "16px",
          lineHeight: "22px",
          display: "-webkit-box",
          WebkitLineClamp: lines,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        className="sf-medium"
        dangerouslySetInnerHTML={{
          __html: post?.content,
        }}
      />
    </>
  );
};
