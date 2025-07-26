import { formatDateToDayMonth } from "@/hooks/formatDate";
import { FlareRounded } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { DateAndTime } from "../Extras/DateAndTime";

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
              <a href={`/opinion/${articles?.data[7]?.slug}`}>
                <Typography
                  sx={{
                    fontSize: "35px",
                    lineHeight: "40px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    "&:hover": {
                      color: "#00000099",
                    },
                  }}
                  className="font-700"
                >
                  {articles?.data[7]?.title}
                </Typography>
              </a>
              <DateAndTime articles={articles?.data[7]} type="main" />
            </Box>
            <a href={`/opinion/${articles?.data[7]?.slug}`}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "210px",
                  borderRadius: "2px",
                  my: 2,
                  cursor: "pointer",
                  "&:hover": {
                    "& img": {
                      transform: "scale(1.1)",
                    },
                  },
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
                  style={{
                    transition: "transform 0.4s ease",
                  }}
                />
              </Box>
            </a>
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
              <a href={`/opinion/${articles?.data[8]?.slug}`}>
                <Typography
                  sx={{
                    fontSize: "45px",
                    lineHeight: "50px",
                    "&:hover": {
                      color: "#00000099",
                    },
                  }}
                  className="font-700"
                  textAlign="center"
                >
                  {articles?.data[8]?.title}
                </Typography>
              </a>
              <DateAndTime articles={articles?.data[8]} type="main" />
            </Box>
            <Grid container sx={{ overflow: "hidden" }}>
              <Grid xs={12} md={5}>
                <a href={`/opinion/${articles?.data[8]?.slug}`}>
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      width: "100%",
                      height: { xs: "250px", md: "100%" },
                      borderRadius: "2px",
                      my: 2,
                      cursor: "pointer",
                      "&:hover": {
                        "& img": {
                          transform: "scale(1.1)",
                        },
                      },
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
                      style={{
                        transition: "transform 0.4s ease",
                      }}
                    />
                  </Box>
                </a>
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
