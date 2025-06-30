import { formatDateToDayMonth } from "@/hooks/formatDate";
import { FlareRounded } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MoreArticles } from "../More Articles/MoreArticles";

export const TopContainer = ({ articles }) => {
  //Custom Design
  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Grid container>
          {/* First Sector*/}
          <Grid
            xs={12}
            md={3}
            sx={{
              bgcolor: "rgb(227,225,214)",
              borderTopLeftRadius: "9px",
              borderTopRightRadius: "9px",
              borderBottomLeftRadius: "9px",
              p: 2,
              border: "0.5px solid #353535",
            }}
          >
            <Box sx={{ borderBottom: "1.5px solid #353535", p: 1.5 }}>
              <a href={`/opinion/${articles?.data[0]?.slug}`}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    lineHeight: "35px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                  className="font-700"
                >
                  {articles?.data[0]?.title}
                </Typography>
              </a>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mt: 2,

                  color: "rgb(155,155,145)",
                }}
              >
                <Typography sx={{ fontSize: "14px" }}>
                  {articles?.data[0]?.categories[0]?.name}
                </Typography>
                <FlareRounded
                  fontSize="small"
                  sx={{ color: "rgb(163,80,59)" }}
                />
                <Typography sx={{ fontSize: "14px" }}>
                  {formatDateToDayMonth(articles?.data[0]?.date)}
                </Typography>
              </Box>
            </Box>
            <a href={`/opinion/${articles?.data[0]?.slug}`}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "230px",
                  borderRadius: "2px",
                  my: 1,
                }}
              >
                <Image
                  unoptimized
                  src={articles?.data[0]?.featured_image}
                  placeholder="blur"
                  blurDataURL="/shynaSignature.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={articles?.data[0]?.title}
                  title={articles?.data[0]?.title}
                  quality={8}
                />
              </Box>
            </a>
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
                __html: articles?.data[0]?.content,
              }}
            />
          </Grid>
          {/* Middle Sector*/}
          <Grid
            xs={12}
            md={6}
            sx={{
              bgcolor: "rgb(227,225,214)",
              borderTopLeftRadius: "9px",
              p: 3,
              border: "0.5px solid #353535",
            }}
          >
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              <a href={`/opinion/${articles?.data[1]?.slug}`}>
                <Typography
                  sx={{
                    fontSize: "35px",
                    lineHeight: "40px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                  className="font-700"
                >
                  {articles?.data[1]?.title}
                </Typography>
              </a>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 2 }}
              >
                <Typography>
                  {articles?.data[1]?.categories[0]?.name}
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
                  {formatDateToDayMonth(articles?.data[1]?.date)}
                </Typography>
              </Box>
            </Box>
            <a href={`/opinion/${articles?.data[1]?.slug}`}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "300px",
                  borderRadius: "2px",
                  my: 2,
                }}
              >
                <Image
                  unoptimized
                  src={articles?.data[1]?.featured_image}
                  placeholder="blur"
                  blurDataURL="/shynaSignature.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={articles?.data[1]?.title}
                  title={articles?.data[1]?.title}
                  quality={8}
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
                __html: articles?.data[1]?.content,
              }}
            />
          </Grid>
          {/*Last Sector*/}
          <Grid
            xs={12}
            md={3}
            sx={{
              bgcolor: "rgb(227,225,214)",
              borderTopRightRadius: "9px",
              borderBottomRightRadius: "9px",
              p: 2,
              border: "0.5px solid #353535",
            }}
          >
            <MoreArticles articles={articles} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
