import {
  Box,
  Card,
  CardContent,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { ArrowForwardIosRounded } from "@mui/icons-material";

export const ArticleCard = ({ data }) => {
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
              gap: 1.5,
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              rowGap: "25px",
            }}
          >
            {Array.from(Array(4)).map((item, key) => (
              <Card
                variant="outlined"
                sx={{
                  width: { xs: "100%", sm: "270px" },
                  border: "none",
                  borderRadius: "0px",
                  bgcolor: `#6087b520`,
                }}
                key={key}
              >
                <CardContent
                  sx={{
                    padding: 0,
                    "&:last-child": {
                      paddingBottom: 0,
                    },
                  }}
                >
                  <Skeleton variant="rectangular" height="200px" />
                  <Box sx={{ py: 1, px: 2 }}>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                  </Box>
                  <Box sx={{ px: 2, py: 1, pb: 4 }}>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};
