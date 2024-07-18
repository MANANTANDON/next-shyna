import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <Box
          sx={{ mt: -1, position: "sticky", top: 0, zIndex: 10 }}
          className="glass"
        >
          <Header />
        </Box>
        <Box
          sx={{
            mx: -1,
          }}
        >
          {children}
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};
