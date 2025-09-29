import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { DateAndTime } from "../Extras/DateAndTime";
import { HeadingTwo } from "@/components/Typographies/HeadingTwo";
import { ImgComponent } from "@/components/Typographies/ImgComponent";
import { PostContentOne } from "@/components/Typographies/PostContentOne";

export const FourthContainer = ({ articles }) => {
  return (
    <>
      <Box
        sx={{
          borderRadius: "9px",
          bgcolor: "rgb(227, 225, 214)",
          borderTop: "1px solid #353535",
        }}
      >
        <Grid container>
          {/* Left Container */}
          <Grid
            xs={12}
            md={8}
            sx={{
              borderRight: { xs: "none", md: "0.5px solid #353535" },
              p: 2,
            }}
          >
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              <HeadingTwo post={articles?.data[11]} type="two" />
              <DateAndTime type="main" articles={articles?.data[11]} />
            </Box>
            <Grid container sx={{ mt: 2 }}>
              <Grid xs={12} md={5}>
                <ImgComponent
                  post={articles?.data[11]}
                  h={{ xs: "250px", md: "100%" }}
                  w={"100%"}
                  mt={0}
                />
              </Grid>
              <Grid item xs={12} md={7} sx={{ pl: { xs: 0, md: 3 } }}>
                <PostContentOne post={articles?.data[11]} lines={11} />
              </Grid>
            </Grid>
          </Grid>

          {/* Right Container */}
          <Grid
            xs={12}
            md={4}
            sx={{
              borderLeft: { xs: "none", md: "1px solid #353535" },
              borderTop: { xs: "0.5px solid #353535", md: "none" },
              p: 2,
            }}
          >
            <Box sx={{ borderBottom: "1.5px solid #353535", p: 1.5 }}>
              <HeadingTwo post={articles?.data[12]} type="two" />
              <DateAndTime type="main" articles={articles?.data[12]} />
            </Box>
            <Grid container sx={{ mt: 2 }}>
              <Grid xs={12} md={5}>
                <ImgComponent
                  post={articles?.data[12]}
                  h={{ xs: "250px", md: "100%" }}
                  w={"100%"}
                  mt={0}
                />
              </Grid>
              <Grid item xs={12} md={7} sx={{ pl: { xs: 0, md: 3 } }}>
                <PostContentOne post={articles?.data[12]} lines={11} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          borderRadius: "9px",
          bgcolor: "rgb(227, 225, 214)",
          borderTop: "1px solid #353535",
          py: 3,
          my: 1,
        }}
      >
        <a href="/articles">
          <Typography
            className="sf-bold"
            textAlign="center"
            sx={{ fontSize: "40px" }}
          >
            ~ More Articles ~
          </Typography>
        </a>
      </Box>
    </>
  );
};
