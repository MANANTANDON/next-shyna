import { formatDateToDayMonth } from "@/hooks/formatDate";
import { FlareRounded } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { DateAndTime } from "../Extras/DateAndTime";

export const ThirdContainer = ({ articles }) => {
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
            md={6}
            sx={{
              borderRight: { xs: "none", md: "0.5px solid #353535" },
              p: 2,
            }}
          >
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              <a href={`/opinion/${articles?.data[9]?.slug}`}>
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
                  {articles?.data[9]?.title}
                </Typography>
              </a>
              <DateAndTime type="main" articles={articles?.data[9]} />
            </Box>
            <Grid container>
              <Grid xs={12} md={5}>
                <a href={`/opinion/${articles?.data[9]?.slug}`}>
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
                      src={articles?.data[9]?.featured_image}
                      placeholder="blur"
                      blurDataURL="/shynaSignature.png"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt={articles?.data[9]?.title}
                      title={articles?.data[9]?.title}
                      quality={8}
                    />
                  </Box>{" "}
                </a>
              </Grid>
              <Grid item xs={12} md={7} sx={{ pl: { xs: 0, md: 3 } }}>
                <div
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 14,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  className="font-hel-400"
                  fontSize="16px"
                  dangerouslySetInnerHTML={{
                    __html: articles?.data[9]?.content,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Right Container */}
          <Grid
            xs={12}
            md={6}
            sx={{
              borderLeft: { xs: "none", md: "0.5px solid #353535" },
              borderTop: { xs: "0.5px solid #353535", md: 0 },
              p: 2,
            }}
          >
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              <a href={`/opinion/${articles?.data[10]?.slug}`}>
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
                  {articles?.data[10]?.title}
                </Typography>
              </a>
              <DateAndTime type="main" articles={articles?.data[10]} />
            </Box>
            <Grid container sx={{ overflow: "hidden" }}>
              <Grid xs={12} md={5}>
                <a href={`/opinion/${articles?.data[10]?.slug}`}>
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
                      src={articles?.data[10]?.featured_image}
                      placeholder="blur"
                      blurDataURL="/shynaSignature.png"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt={articles?.data[10]?.title}
                      title={articles?.data[10]?.title}
                      quality={8}
                    />
                  </Box>{" "}
                </a>
              </Grid>
              <Grid item xs={12} md={7} sx={{ pl: { xs: 0, md: 3 } }}>
                <div
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 14,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  className="font-hel-400"
                  fontSize="16px"
                  dangerouslySetInnerHTML={{
                    __html: articles?.data[10]?.content,
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
