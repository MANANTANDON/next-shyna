import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Link from "next/link";

export const SongCont = () => {
  return (
    <>
      <Box sx={{ m: -1, p: 2 }}>
        <Container
          maxWidth="lg"
          sx={{
            bgcolor: "#E0A75E40",
            borderRadius: "40px",
            p: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ color: "#00000080", fontSize: "80px", my: 5, mt: 50 }}
          >
            Kaise tu
            <span
              style={{
                color: "#E0A75E",
                borderBottom: "10px solid #E0A75E",
                marginLeft: "20px",
              }}
            >
              gungunaaye,
            </span>
          </Typography>
          <Typography sx={{ color: "#00000080", fontSize: "80px", my: 5 }}>
            {" "}
            <span
              style={{
                color: "#E0A75E",
                borderBottom: "10px solid #E0A75E",
                marginRight: "20px",
              }}
            >
              muskuraaye ☺️
            </span>
            Chhoti-moti baaton
          </Typography>
          <Typography sx={{ color: "#00000080", fontSize: "80px", my: 5 }}>
            pe{" "}
            <span
              style={{
                color: "#E0A75E",
                borderBottom: "10px solid #E0A75E",
                marginRight: "20px",
              }}
            >
              muhn fulaye? 😤
            </span>
          </Typography>
          <Box
            sx={{
              height: "300vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#E0A75E", fontSize: "80px", my: 5 }}>
              Toh! Yeh hai Poori Movie 🫠
            </Typography>
          </Box>
          <Box sx={{ my: 10, color: "#00000080" }}>
            <Typography fontSize="20px">Gaane Ke Links</Typography>
            <Typography sx={{ display: "flex", mt: 2 }} fontSize="20px">
              <AppleIcon />:
              <Link
                href={`https://music.apple.com/in/album/nadaaniyan/1746969040?i=1746969044`}
                style={{ color: "#E0A75E" }}
              >
                https://music.apple.com/in/album/nadaaniyan/1746969040?i=1746969044
              </Link>
            </Typography>
            <Typography sx={{ display: "flex", mt: 2 }} fontSize="20px">
              <MusicNoteIcon />:
              <Link
                href={`https://music.apple.com/in/album/nadaaniyan/1746969040?i=1746969044`}
                style={{ color: "#E0A75E" }}
              >
                https://open.spotify.com/album/5iB4wggqDR2cQSduJGBfUy?si=0LGMvE-0T4S67zXFxne4qw
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};
