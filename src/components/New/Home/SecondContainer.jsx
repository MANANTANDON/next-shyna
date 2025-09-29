import { Box, Grid } from "@mui/material";
import React from "react";
import { DateAndTime } from "../Extras/DateAndTime";
import { HeadingOne } from "@/components/Typographies/HeadingOne";
import { ImgComponent } from "@/components/Typographies/ImgComponent";
import { PostContentOne } from "@/components/Typographies/PostContentOne";

export const SecondContainer = ({ articles }) => {
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
            md={4}
            sx={{
              borderRight: { xs: "none", md: "0.5px solid #353535" },
              p: 2,
            }}
          >
            <Box sx={{ borderBottom: "1.5px solid #353535", p: 1.5 }}>
              {/* post title */}
              <HeadingOne post={articles?.data[7]} type="one" />
              {/* post deets */}
              <DateAndTime articles={articles?.data[7]} type="main" />
            </Box>
            {/* post image */}
            <ImgComponent post={articles?.data[7]} h="210px" w="100%" mt={2} />
            {/* post content */}
            <PostContentOne post={articles?.data[7]} lines={5} />
          </Grid>
          {/* Right Container */}
          <Grid
            xs={12}
            md={8}
            sx={{
              borderLeft: { xs: "none", md: "1px solid #353535" },
              borderTop: { xs: "0.5px solid #353535", md: "none" },
              p: 2,
            }}
          >
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              {/* post title */}
              <HeadingOne post={articles?.data[8]} type="two" />
              {/* post deets */}
              <DateAndTime articles={articles?.data[8]} type="main" />
            </Box>
            <Grid container sx={{ mt: 2 }}>
              <Grid xs={12} md={5}>
                {/* post image */}
                <ImgComponent
                  post={articles?.data[8]}
                  h={{ xs: "250px", md: "100%" }}
                  w="100%"
                  mt={0}
                />
              </Grid>
              <Grid item xs={12} md={7} sx={{ pl: { xs: 0, md: 3 } }}>
                {/* post content */}
                <PostContentOne post={articles?.data[8]} lines={14} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
