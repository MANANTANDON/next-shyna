import React from "react";
import { Header } from "./Header/Header";
import { Box, Container } from "@mui/material";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        bgcolor: "#353535",
        m: -1,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mx: { xs: -2, md: -3 } }}>
          <Header />
          {children}
          <Footer />
        </Box>
      </Container>
    </Box>
  );
};
