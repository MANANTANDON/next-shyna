import { Box, Grid } from "@mui/material";
import React from "react";
import { DateAndTime } from "../Extras/DateAndTime";
import { HeadingTwo } from "@/components/Typographies/HeadingTwo";
import { ImgComponent } from "@/components/Typographies/ImgComponent";
import { PostContentOne } from "@/components/Typographies/PostContentOne";
import { HeadingOne } from "@/components/Typographies/HeadingOne";

export const ThirdContainer = ({ articles }) => {
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
            md={6}
            sx={{
              borderRight: { xs: "none", md: "0.5px solid #353535" },
              p: 2,
            }}
          >
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              {/* post title */}
              <HeadingTwo post={articles?.data[9]} type="two" />
              {/* post deets */}
              <DateAndTime type="main" articles={articles?.data[9]} />
            </Box>
            <Grid container sx={{ mt: 2 }}>
              <Grid xs={12} md={5}>
                {/* post image */}
                <ImgComponent
                  post={articles?.data[9]}
                  h={{ xs: "250px", md: "100%" }}
                  w="100%"
                  mt={0}
                />
              </Grid>
              <Grid item xs={12} md={7} sx={{ pl: { xs: 0, md: 3 } }}>
                {/* post content */}
                <PostContentOne post={articles?.data[9]} lines={14} />
              </Grid>
            </Grid>
          </Grid>
          {/* Right Container */}
          <Grid
            xs={12}
            md={6}
            sx={{
              borderLeft: { xs: "none", md: "0.5px solid #353535" },
              borderTop: { xs: "0.5px solid #353535", md: 0 },
              p: 2,
            }}
          >
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              <HeadingOne post={articles?.data[10]} type={"two"} />
              <DateAndTime type="main" articles={articles?.data[10]} />
            </Box>
            <Grid container sx={{ overflow: "hidden", mt: 2 }}>
              <Grid xs={12} md={5}>
                <ImgComponent
                  post={articles?.data[10]}
                  h={{ xs: "250px", md: "100%" }}
                  width="100%"
                  mt={0}
                />
              </Grid>
              <Grid item xs={12} md={7} sx={{ pl: { xs: 0, md: 3 } }}>
                <PostContentOne post={articles?.data[10]} lines={14} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
