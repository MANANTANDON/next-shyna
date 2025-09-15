import { formatDateToDayMonth } from "@/hooks/formatDate";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Widget = () => {
  const [articlesRes, setArticlesRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://dev.snowchildstudio.com/wp-json/custom/v1/posts",
          {
            params: {
              page: 1,
              per_page: 6,
            },
            timeout: 10000,
          }
        );
        setArticlesRes(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticlesRes([]);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <>
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 3,
        }}
      >
        {articlesRes?.data?.slice(0, 6)?.map((item, key) => (
          <Box key={key} sx={{}}>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
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
              <a href={`/opinion/${item?.slug}`} style={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    width: "100%",
                    boxSizing: "border-box",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    minHeight: "60px",
                  }}
                  className="font-hel-400"
                >
                  {item?.title}
                </Typography>
              </a>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Box sx={{ border: "1px solid #353535", width: "40px" }}></Box>
              <Typography sx={{ color: "rgb(155,155,145)" }}>
                {`${formatDateToDayMonth(item?.date)}`}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
