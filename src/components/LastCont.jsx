import { Container, Typography } from "@mui/material";
import React from "react";

export const LastCont = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "#E6836940",
          borderRadius: "40px",
          p: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#E68369",
            fontWeight: "bolder",
            fontSize: "40px",
            height: "60px",
          }}
        >
          from 4d616e616e
        </Typography>
        <Typography sx={{ color: "#E68369", fontSize: "30px", my: 100 }}>
          ....................
        </Typography>
        <Typography sx={{ color: "#E68369", fontSize: "30px" }}>
          Yours 4d616e616e
        </Typography>
      </Container>
    </>
  );
};
