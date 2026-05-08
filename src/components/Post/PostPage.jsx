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

  const formatText = (excerpt) => {
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
      .replace(/&hellip;/g, "...")
      .replace(/&amp;/g, "&")
      .replace(/&#8217;/g, "'")
      .replace(/&#8220;/g, "\u201C")
      .replace(/&#8221;/g, "\u201D")
      .replace(/&#8216;/g, "\u2018")
      .replace(/&#8212;/g, "\u2014")
      .replace(/&#8211;/g, "\u2013")
      .trim();
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 md:mt-20">
        <h1 className="sfpro-text text-2xl/7 md:text-5xl/13 font-extrabold tracking-tight w-full max-w-200 whitespace-normal wrap-break-word px-4 lg:px-0">
          {formatText(postData?.title)}
        </h1>
        <h1 className="sfpro-text text-sm md:text-base font-medium tracking-tight w-full max-w-200 whitespace-normal wrap-break-word px-4 lg:px-0 text-zinc-600 mt-2">
          {formatText(postData?.excerpt)}
        </h1>
        <div className="w-full max-w-200 px-4 lg:px-0 text-zinc-500 flex items-center justify-between my-5">
          <div className="text-sm font-semibold tracking-tight">
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

        {/* Content */}
        <div className="w-full max-w-200 px-5 lg:px-0 my-5">
          <div
            className="sfpro-text post-content text-base/6.5 font-normal"
            dangerouslySetInnerHTML={{
              __html: formatContent(postData?.content),
            }}
          />
        </div>
      </div>
    </>
  );
};
