import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { DateAndTime } from "../New/Extras/DateAndTime";
import { SharingButton } from "../Sharing/SharingButton";
import Image from "next/image";

export const PostPage = ({ postData, slug }) => {
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Box
            sx={{
              p: 2,
              mx: { xs: -2, md: 0 },
            }}
          >
            <Box sx={{ border: "1.5px solid #353535", p: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  lineHeight: { xs: "30px", md: "38px" },
                }}
                className="sf-semibold"
              >
                {postData?.data?.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: { xs: "flex-start", md: "center" },
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  gap: { xs: 2, md: 1.5 },
                  mt: { xs: 1, md: 4 },
                  color: "rgb(155,155,145)",
                }}
              >
                <DateAndTime articles={postData?.data} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SharingButton slug={slug} text={postData?.data?.title} />
                </Box>
              </Box>
            </Box>

            <Box sx={{ my: 2, borderBottom: "1px solid #353535", pb: 2 }}>
              <Image
                src={postData?.data?.featured_image}
                alt={postData?.data?.title}
                title={postData?.data?.title}
                layout="responsive"
                width={16}
                height={9}
                placeholder="blur"
                blurDataURL="/shynaSignature.png"
                unoptimized
                quality={8}
              />
            </Box>

            <Container maxWidth="md">
              <Box
                sx={{
                  mx: { xs: -2, md: 0 },
                  fontSize: { xs: "17px", md: "18px" },
                  lineHeight: { xs: "25px" },
                }}
              >
                <div
                  className="sf-regular wp-content"
                  dangerouslySetInnerHTML={{
                    __html: postData?.data?.content,
                  }}
                />
              </Box>
            </Container>

            {/* Share Section */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderTop: "1px solid #353535",
                pt: 2,
              }}
            >
              <Typography sx={{ mb: 2 }}>Share This Article</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SharingButton slug={slug} text={postData?.data?.title} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
