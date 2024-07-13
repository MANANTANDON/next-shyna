import { Box, Container, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export const TopContainer = () => {
  return (
    <>
      <Box sx={{ height: "100vh", m: -1, p: 2 }}>
        <Container
          maxWidth="lg"
          sx={{
            bgcolor: "#3FA2F640",
            height: "100vh",
            borderRadius: "40px",
            p: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Typography sx={{ color: "#3FA2F6", fontSize: "30px" }}>
            WELCOME
          </Typography>
          <Typography sx={{ color: "#3FA2F6", fontSize: "50px" }}>
            Shyna
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              bottom: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            scroll down
            <span>
              <KeyboardArrowDownRoundedIcon />
            </span>
          </Typography>
        </Container>
      </Box>
    </>
  );
};
