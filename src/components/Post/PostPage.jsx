import React from "react";
import Image from "next/image";

export const PostPage = ({ postData, slug }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
  const formatExcerpt = (excerpt) => {
    if (!excerpt) return "";

    return excerpt
      .replace(/&hellip;/g, "...")
      .replace(/&amp;/g, "&")
      .replace(/&#8217;/g, "'")
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/<[^>]*>/g, "")
      .trim();
  };
  const formatContent = (content) => {
    if (!content) return "";

    return content
      .replace(/\\n\\n+/g, '<div class="h-4"></div>')
      .replace(/\\n/g, "")
      .replace(/<a[^>]*><\/a>/g, "")
      .replace(/<p>\s*<\/p>/g, "")
      .trim();
  };
  return (
    <>
      <div className="flex flex-col items-center mt-10 md:mt-20">
        <h1 className="sfpro-text text-2xl/7 md:text-5xl/13 font-extrabold tracking-tight w-full max-w-200 whitespace-normal wrap-break-word px-4 lg:px-0">
          {postData?.title}
        </h1>
        <h1 className="sfpro-text text-sm md:text-base font-medium tracking-tight w-full max-w-200 whitespace-normal wrap-break-word px-4 lg:px-0 text-zinc-600 mt-2">
          {formatExcerpt(postData?.excerpt)}
        </h1>
        <div className="w-full max-w-200 px-4 lg:px-0 text-zinc-500 flex items-center justify-between my-5">
          <div className="text-sm font-semibold tracking-tight   ">
            Shyna Gupta • {formatDate(postData?.date)}
          </div>
          <div className="sfpro-text cursor-pointer">􀈂</div>
        </div>

        <div className="my-5">
          <Image
            src={
              postData?.featured_image === null
                ? "/shynaSignature.png"
                : postData?.featured_image
            }
            alt={postData?.title}
            title={postData?.title}
            layout="responsive"
            width={16}
            height={9}
            placeholder="blur"
            blurDataURL="/shynaSignature.png"
            unoptimized
            quality={8}
          />
        </div>
        <div className="w-full max-w-200 px-5 lg:px-0 my-5">
          <div
            className="sfpro-text wp-content text-base md:text-lg"
            dangerouslySetInnerHTML={{
              __html: formatContent(postData?.content),
            }}
          />
        </div>
      </div>
    </>
  );
};

{
  /* <Box>
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
                src={
                  postData?.data?.featured_image === null
                    ? "/shynaSignature.png"
                    : postData?.data?.featured_image
                }
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
      </Box> */
}
