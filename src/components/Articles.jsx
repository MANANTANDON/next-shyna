import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NewsCard } from "./Cards/NewsCard";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { SearchPost } from "@/utils/common";
import { ArticleCard } from "@/skeleton/ArticleCard";

export const Articles = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const getData = async () => {
    setLoading(true);
    try {
      const response = await SearchPost(
        {
          visiblity: "DRAFT",
        },
        { page: 1, size: 4 }
      );
      setData(response?.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <ArticleCard />;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            bgcolor: "#ffffff90",
            py: 2,
            px: 2,
            borderRadius: "10px",
            my: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              width: "fit-content",
              "&:hover": {
                cursor: "pointer",
                color: "#6087b5",
              },
            }}
          >
            <Typography
              fontWeight="bolder"
              fontSize="25px"
              sx={{
                my: 2,
              }}
            >
              ARTICLES
            </Typography>
            <Box>
              <ArrowForwardIosRounded />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: "25px",
            }}
          >
            {data?.data?.rows?.map((item, key) => (
              <Box sx={{ width: { xs: "100%", sm: "270px" } }} key={key}>
                <NewsCard data={item} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};
