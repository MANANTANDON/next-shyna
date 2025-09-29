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
          <Typography sx={{ color: "#00000090" }} className="sf-medium">
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
        <Typography sx={{ fontSize: "14px" }} className="sf-medium">
          {articles?.categories[0]?.name}
        </Typography>
        <FlareRounded fontSize="small" sx={{ color: "rgba(147, 86, 71, 1)" }} />
        <Typography sx={{ fontSize: "14px" }} className="sf-medium">
          {formatDateToDayMonth(articles?.date)}
        </Typography>
      </Box>
    </>
  );
};
