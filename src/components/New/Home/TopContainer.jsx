import { Box, Grid } from "@mui/material";
import React from "react";
import { MoreArticles } from "../More Articles/MoreArticles";
import { DateAndTime } from "../Extras/DateAndTime";
import { HeadingOne } from "@/components/Typographies/HeadingOne";
import { ImgComponent } from "@/components/Typographies/ImgComponent";
import { PostContentOne } from "@/components/Typographies/PostContentOne";

export const TopContainer = ({ articles }) => {
  const posts = articles?.data || [];

  if (posts.length < 2) {
    return null;
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Grid container>
        {/* First Sector */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            bgcolor: "rgb(227,225,214)",
            borderTopLeftRadius: "9px",
            borderTopRightRadius: "9px",
            borderBottomLeftRadius: "9px",
            p: 2,
            border: "0.5px solid #353535",
          }}
        >
          <Box sx={{ borderBottom: "1.5px solid #353535", pt: 1, pb: 2 }}>
            <HeadingOne post={posts[0]} type="one" />
            <DateAndTime articles={posts[0]} />
          </Box>

          <ImgComponent post={posts[0]} h="230px" w="100%" mt={2} />

          <PostContentOne post={posts[0]} lines={10} />
        </Grid>

        {/* Middle Sector */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            bgcolor: "rgb(227,225,214)",
            borderTopLeftRadius: "9px",
            p: 2,
            border: "0.5px solid #353535",
          }}
        >
          <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
            <HeadingOne post={posts[1]} type="two" />
            <DateAndTime articles={posts[1]} />
          </Box>

          <ImgComponent post={posts[1]} h="300px" w="100%" mt={2} />

          <PostContentOne post={posts[1]} lines={7} />
        </Grid>

        {/* Last Sector */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            bgcolor: "rgb(227,225,214)",
            borderTopRightRadius: "9px",
            borderBottomRightRadius: "9px",
            p: 2,
            border: "0.5px solid #353535",
          }}
        >
          <MoreArticles articles={articles} />
        </Grid>
      </Grid>
    </Box>
  );
};
