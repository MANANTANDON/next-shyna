import { Box, Typography } from "@mui/material";
import React from "react";
import { DateAndTime } from "../Extras/DateAndTime";

export const MoreArticles = ({ articles }) => {
  return (
    <>
      <a href="/articles">
        <Typography
          className="font-700"
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
          <Box key={key} sx={{}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Typography
                sx={{
                  fontSize: "40px",
                  pb: 1.5,
                }}
                className="font-700i"
              >
                0{key + 1}
              </Typography>
              <a href={`/opinion/${item?.slug}`}>
                <Typography
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    fontSize: "18px",
                    lineHeight: "30px",
                    height: "68px",
                    "&:hover": {
                      color: "#00000099",
                    },
                  }}
                  className="font-hel-400"
                >
                  {item?.title}
                </Typography>
              </a>
            </Box>
            <DateAndTime type="secondary" articles={item} />
          </Box>
        ))}
      </Box>
    </>
  );
};
