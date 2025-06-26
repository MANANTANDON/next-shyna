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
          {/* Left Container */}
          <Grid
            xs={12}
            md={5}
            sx={{ borderRight: "0.5px solid #353535", p: 2 }}
          >
            <Box sx={{ borderBottom: "1.5px solid #353535", p: 1.5 }}>
              <Typography
                sx={{ fontSize: "40px", lineHeight: "45px" }}
                className="font-700"
              >
                {articles?.data[7]?.title}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}
              >
                <Typography>
                  {articles?.data[7]?.categories[0]?.name}
                </Typography>
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
                  {formatDateToDayMonth(articles?.data[7]?.date)}
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
                src={articles?.data[7]?.featured_image}
                placeholder="blur"
                blurDataURL="/shynaSignature.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt={articles?.data[7]?.title}
                title={articles?.data[7]?.title}
                quality={8}
              />
            </Box>
            <div
              style={{
                fontSize: "15px",
                lineHeight: 1.3,
                display: "-webkit-box",
                WebkitLineClamp: 5,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              className="font-hel-400"
              fontSize="16px"
              dangerouslySetInnerHTML={{
                __html: articles?.data[7]?.content,
              }}
            />
          </Grid>
          {/* Right Container */}
          <Grid xs={12} md={7} sx={{ borderLeft: "0.5px solid #353535", p: 2 }}>
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              <Typography
                sx={{ fontSize: "50px", lineHeight: "50px" }}
                className="font-700"
                textAlign="center"
              >
                {articles?.data[8]?.title}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}
              >
                <Typography>
                  {" "}
                  {articles?.data[8]?.categories[0]?.name}
                </Typography>
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
                  {formatDateToDayMonth(articles?.data[8]?.date)}
                </Typography>
              </Box>
            </Box>
            <Grid container>
              <Grid xs={12} md={5}>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: { xs: "250px", md: "100%" },
                    borderRadius: "2px",
                    my: 2,
                  }}
                >
                  <Image
                    unoptimized
                    src={articles?.data[8]?.featured_image}
                    placeholder="blur"
                    blurDataURL="/shynaSignature.png"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt={articles?.data[8]?.title}
                    title={articles?.data[8]?.title}
                    quality={8}
                  />
                </Box>{" "}
              </Grid>
              <Grid item xs={12} md={7} sx={{ pl: { xs: 0, md: 3 } }}>
                <div
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 15,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  className="font-hel-400"
                  fontSize="16px"
                  dangerouslySetInnerHTML={{
                    __html: articles?.data[8]?.content,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
