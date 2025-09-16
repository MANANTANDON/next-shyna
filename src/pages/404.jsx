import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Custom404 = () => {
  return (
    <>
      <Container
        sx={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            fontSize: { xs: "50px", sm: "120px" },
            color: "#3E73B9",
            fontWeight: "bold",
          }}
        >
          404
        </Typography>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography textAlign="center" fontSize={{ xs: "30px", md: "50px" }}>
            Post not found
          </Typography>

          <a href="/">
            <Typography
              align="center"
              sx={{
                bgcolor: "#E9F0F8",
                width: "fit-content",
                p: 1.5,
                borderRadius: "7px",
                color: "#6E85A4",
                border: "2px solid #E0E9F5",
                fontWeight: "bold",
                mt: 2,
              }}
            >
              Back to homepage
            </Typography>
          </a>
        </Box>
      </Container>
    </>
  );
};

export default Custom404;
