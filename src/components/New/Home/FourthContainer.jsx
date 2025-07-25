import { formatDateToDayMonth } from "@/hooks/formatDate";
import { FlareRounded } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { DateAndTime } from "../Extras/DateAndTime";

export const FourthContainer = ({ articles }) => {
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
            md={8}
            sx={{
              borderRight: { xs: "none", md: "0.5px solid #353535" },
              p: 2,
            }}
          >
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              <a href={`/opinion/${articles?.data[11]?.slug}`}>
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
                  {articles?.data[11]?.title}
                </Typography>
              </a>
              <DateAndTime type="main" articles={articles?.data[11]} />
            </Box>
            <Grid container>
              <Grid xs={12} md={5}>
                <a href={`/opinion/${articles?.data[11]?.slug}`}>
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
                      src={articles?.data[11]?.featured_image}
                      placeholder="blur"
                      blurDataURL="/shynaSignature.png"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt={articles?.data[11]?.title}
                      title={articles?.data[11]?.title}
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
                    WebkitLineClamp: 8,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  className="font-hel-400"
                  fontSize="16px"
                  dangerouslySetInnerHTML={{
                    __html: articles?.data[11]?.content,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Right Container */}
          <Grid
            xs={12}
            md={4}
            sx={{
              borderLeft: { xs: "none", md: "1px solid #353535" },
              borderTop: { xs: "0.5px solid #353535", md: "none" },
              px: 2,
              py: 3,
            }}
          >
            <Box sx={{ borderBottom: "1.5px solid #353535", p: 1.5 }}>
              <a href={`/opinion/${articles?.data[12]?.slug}`}>
                <Typography
                  sx={{
                    fontSize: "28px",
                    lineHeight: "35px",
                    "&:hover": {
                      color: "#00000099",
                    },
                  }}
                  className="font-700"
                  textAlign="left"
                >
                  {articles?.data[12]?.title}
                </Typography>
              </a>
              <DateAndTime type="main" articles={articles?.data[12]} />
            </Box>
            <Grid container sx={{ overflow: "hidden" }}>
              <Grid xs={12} md={5}>
                <a href={`/opinion/${articles?.data[12]?.slug}`}>
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
                      src={articles?.data[12]?.featured_image}
                      placeholder="blur"
                      blurDataURL="/shynaSignature.png"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt={articles?.data[12]?.title}
                      title={articles?.data[12]?.title}
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
                    WebkitLineClamp: 10,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  className="font-hel-400"
                  fontSize="16px"
                  dangerouslySetInnerHTML={{
                    __html: articles?.data[12]?.content,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          borderRadius: "9px",
          bgcolor: "rgb(227, 225, 214)",
          borderTop: "1px solid #353535",
          py: 3,
          my: 1,
        }}
      >
        <a href="/articles">
          <Typography
            className="font-700i"
            textAlign="center"
            sx={{ fontSize: "40px" }}
          >
            ~ More Articles ~
          </Typography>
        </a>
      </Box>
    </>
  );
};
