import { formatDateToDayMonth } from "@/hooks/formatDate";
import { FlareRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

export const DateAndTime = ({ articles, type }) => {
  if (type === "secondary") {
    return (
      <>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Box sx={{ border: "1px solid #353535", width: "40px" }}></Box>
          <Typography sx={{ color: "#00000090" }}>
            {`${formatDateToDayMonth(articles?.date)}`}
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mt: 1.5,
          color: "#00000090",
        }}
      >
        <Typography sx={{ fontSize: "14px" }} className="sf-regular">
          {articles?.categories[0]?.name}
        </Typography>
        <FlareRounded fontSize="small" sx={{ color: "rgb(163,80,59)" }} />
        <Typography sx={{ fontSize: "14px" }} className="sf-regular">
          {formatDateToDayMonth(articles?.date)}
        </Typography>
      </Box>
    </>
  );
};
