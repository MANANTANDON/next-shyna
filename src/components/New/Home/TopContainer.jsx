import { formatDateToDayMonth } from "@/hooks/formatDate";
import { FlareRounded } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const TopContainer = ({ articles }) => {
  //Custom Designs
  console.log(articles, "Manan Tandon");
  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Grid container>
          {/* First Sector*/}
          <Grid
            xs={3}
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
              <Typography
                sx={{ fontSize: "28px", lineHeight: "35px" }}
                className="font-700"
              >
                {articles?.data[0]?.title}
              </Typography>
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
            <div
              style={{
                fontSize: "15px",
                lineHeight: 1.3,
                display: "-webkit-box",
                WebkitLineClamp: 11,
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
            xs={6}
            sx={{
              bgcolor: "rgb(227,225,214)",
              borderTopLeftRadius: "9px",
              p: 3,
              border: "0.5px solid #353535",
            }}
          >
            <Box sx={{ border: "1.5px solid #353535", p: 1.5 }}>
              <Typography
                sx={{ fontSize: "50px", lineHeight: "55px" }}
                className="font-700"
              >
                {articles?.data[1]?.title}
              </Typography>
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
            <div
              style={{
                fontSize: "15px",
                lineHeight: 1.3,
                display: "-webkit-box",
                WebkitLineClamp: 4,
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
            xs={3}
            sx={{
              bgcolor: "rgb(227,225,214)",
              borderTopRightRadius: "9px",
              borderBottomRightRadius: "9px",
              p: 2,
              border: "0.5px solid #353535",
            }}
          >
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
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}
            >
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
                    <Typography
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        fontSize: "22px",
                        height: "68px",
                      }}
                      className="font-hel-400"
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Box
                      sx={{ border: "1px solid #353535", width: "40px" }}
                    ></Box>
                    <Typography sx={{ color: "rgb(155,155,145)" }}>
                      {`${formatDateToDayMonth(item?.date)}`}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
