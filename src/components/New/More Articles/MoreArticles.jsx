import { Box, Typography } from "@mui/material";
import React from "react";
import { DateAndTime } from "../Extras/DateAndTime";
import { HeadingTwo } from "@/components/Typographies/HeadingTwo";

export const MoreArticles = ({ articles }) => {
  return (
    <>
      <a href="/articles">
        <Typography
          className="sf-medium"
          sx={{
            fontSize: "30px",
            borderBottom: "1.5px solid #353535",
            pb: 2,
          }}
        >
          More Articles
        </Typography>
      </a>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
        {articles?.data?.slice(2, 7)?.map((item, key) => (
          <Box key={key}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Typography
                sx={{
                  fontSize: "40px",
                  pb: 1.5,
                  flexShrink: 0,
                }}
                className="font-700i"
              >
                0{key + 1}
              </Typography>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <HeadingTwo post={item} />
              </Box>
            </Box>
            <DateAndTime type="secondary" articles={item} />
          </Box>
        ))}
      </Box>
    </>
  );
};
