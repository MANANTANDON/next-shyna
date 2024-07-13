import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <Box
          sx={{ mx: -1, mt: -1, position: "sticky", top: 0, zIndex: 10 }}
          className="glass"
        >
          <Header />
        </Box>
        <Box
          sx={{
            height: "150vh",
            mx: -1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};
