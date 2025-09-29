import {
  ContentCopyRounded,
  CopyrightRounded,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Container,
  Grid,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export const TopContainer = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const SlideTransition = (props) => {
    return <Slide {...props} direction={open ? "down" : "up"} />;
  };
  return (
    <>
      <Box sx={{ py: { xs: 0, md: 5 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              px: 2,
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid xs={12} md={6} item>
              <Typography
                fontSize="18px"
                letterSpacing={1}
                sx={{ color: "#6E85A4", mb: 0.5 }}
              >
                Hey! I'm Shyna,
              </Typography>
              <Typography
                fontSize="18px"
                letterSpacing={1}
                sx={{ color: "#6E85A4", my: 0.5 }}
              >
                I write about politics, social issues and international affairs
              </Typography>
              <Typography fontSize="18px" letterSpacing={1}>
                <span style={{ color: "#6E85A4", my: 0.5 }}>
                  I can be reached at:{" "}
                </span>
                <span
                  style={{
                    fontWeight: "400",
                    borderBottom: "2px dotted #3E73B9",
                    color: "#3E73B9",
                  }}
                >
                  shyna20012@gmail.com
                </span>
                <span style={{ marginLeft: "10px" }}>
                  <CopyToClipboard text="shyna20012@gmail.com">
                    <ContentCopyRounded
                      onClick={handleClick}
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "#3e73b9",
                        },
                      }}
                    />
                  </CopyToClipboard>
                </span>
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mt: 1 }}
              >
                <Link
                  href="https://www.instagram.com/shyna.co/"
                  className="links"
                  target="_blank"
                  aria-label="Shyna Gupta Instagram Link"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://in.linkedin.com/in/shyna-gupta-053016210"
                  target="_blank"
                  className="links"
                  aria-label="Shyna Gupta LinkeIn Link"
                >
                  <LinkedIn />
                </Link>
              </Box>
            </Grid>

            <Grid
              xs={12}
              md={4}
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-end" },
                my: { xs: 3, sm: 0 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: "200px",
                  width: "200px",
                  borderRadius: "50%",
                  border: "2px solid #6087b550",
                }}
              >
                <Image
                  unoptimized
                  src="/manan.jpg"
                  blurDataURL="/manan.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Shyna Gupta"
                  title="Shyna Gupta"
                />
              </Box>
            </Grid>
            {/* <Grid xs={12} md={6} item sx={{ display: { md: "none" } }}>
              <Typography fontWeight="light" sx={{ color: "#6E85A4" }}>
                {info[0]?.paragraph?.rich_text[0]?.plain_text}
              </Typography>
              <Typography fontWeight="light">
                {info[1]?.paragraph?.rich_text[0]?.plain_text}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "light" }}>
                  I can be reached at:{" "}
                </span>
                <span
                  style={{
                    fontWeight: "bolder",
                    borderBottom: "2px solid #000",
                  }}
                >
                  shyna20012@gmail.com
                </span>
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Link
                  href="https://www.instagram.com/shyna.co/"
                  className="links"
                  target="_blank"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://in.linkedin.com/in/shyna-gupta-053016210"
                  target="_blank"
                  className="links"
                >
                  <LinkedIn />
                </Link>
              </Box>
            </Grid> */}
          </Grid>
        </Container>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        key={"top" + "center"}
        TransitionComponent={SlideTransition}
      >
        <Alert
          severity="success"
          sx={{ bgcolor: "#E9F0F8", border: "1px solid #E0E9F5", p: 0, px: 2 }}
        >
          email copied :)
        </Alert>
      </Snackbar>
    </>
  );
};

// Manan <3 Shyna
