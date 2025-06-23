import { formatDateToDayMonth } from "@/hooks/formatDate";
import { FlareRounded } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const SecondContainer = ({ articles }) => {
  console.log(articles, "MANAN");
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
          <Grid xs={5} sx={{ borderRight: "0.5px solid #353535", p: 2 }}>
            <Box sx={{ borderBottom: "1.5px solid #353535", p: 1.5 }}>
              <Typography
                sx={{ fontSize: "40px", lineHeight: "35px" }}
                className="font-700"
              >
                {articles[7]?.properties?.Name?.title[0]?.plain_text}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}
              >
                <Typography>OPINION</Typography>
                <FlareRounded
                  fontSize="small"
                  sx={{ color: "rgb(163,80,59)" }}
                />
                <Typography>Shyna Gupta</Typography>
                <FlareRounded
                  fontSize="small"
                  sx={{ color: "rgb(163,80,59)" }}
                />
                <Typography>
                  {formatDateToDayMonth(
                    articles[7]?.properties?.createdTime?.created_time
                  )}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "230px",
                borderRadius: "2px",
                my: 2,
              }}
            >
              <Image
                unoptimized
                src={`/images/${articles[7]?.properties?.slug?.rich_text[0]?.plain_text}.jpeg`}
                placeholder="blur"
                blurDataURL="/shynaSignature.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={articles[7]?.properties?.Name?.title[0]?.plain_text}
                title={articles[7]?.properties?.Name?.title[0]?.plain_text}
                quality={8}
              />
            </Box>
            <Typography
              sx={{
                my: 1,
                fontSize: "18px",
              }}
              textAlign="left"
              fontSize="16px"
            >
              {articles[7]?.properties?.subHeading?.rich_text[0]?.plain_text}
            </Typography>
          </Grid>
          <Grid xs={7} sx={{ borderLeft: "0.5px solid #353535", p: 2 }}>
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              <Typography
                sx={{ fontSize: "50px" }}
                className="font-700"
                textAlign="center"
              >
                {articles[8]?.properties?.Name?.title[0]?.plain_text}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}
              >
                <Typography>OPINION</Typography>
                <FlareRounded
                  fontSize="small"
                  sx={{ color: "rgb(163,80,59)" }}
                />
                <Typography>Shyna Gupta</Typography>
                <FlareRounded
                  fontSize="small"
                  sx={{ color: "rgb(163,80,59)" }}
                />
                <Typography>
                  {formatDateToDayMonth(
                    articles[8]?.properties?.createdTime?.created_time
                  )}
                </Typography>
              </Box>
            </Box>
            <Grid container>
              <Grid xs={4}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    borderRadius: "2px",
                    my: 2,
                  }}
                >
                  <Image
                    unoptimized
                    src={`/images/${articles[8]?.properties?.slug?.rich_text[0]?.plain_text}.jpeg`}
                    placeholder="blur"
                    blurDataURL="/shynaSignature.png"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt={articles[8]?.properties?.Name?.title[0]?.plain_text}
                    title={articles[8]?.properties?.Name?.title[0]?.plain_text}
                    quality={8}
                  />
                </Box>{" "}
              </Grid>
              <Grid xs={7}>
                <Typography
                  sx={{
                    my: 1,
                    fontSize: "18px",
                  }}
                  textAlign="left"
                  fontSize="16px"
                >
                  {
                    articles[8]?.properties?.subHeading?.rich_text[0]
                      ?.plain_text
                  }
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
