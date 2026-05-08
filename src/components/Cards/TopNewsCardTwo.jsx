import Image from "next/image";
import React from "react";

export const TopNewsCardTwo = ({ post }) => {
  const formattedDate = post?.date
    ? new Date(post.date.replace(" ", "T")).toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    : "";
  return (
    <>
      <div className="rounded-[15px] w-full overflow-hidden sfpro-text shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:scale-[1.004] hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
        <a href={`/opinion/${post?.slug}`}>
          <div className="relative h-50 md:h-70 w-full overflow-hidden hover:cursor-pointer">
            <Image
              src={
                post?.featured_image === null
                  ? "/shynaSignature.png"
                  : post.featured_image
              }
              alt={post?.title || "Agents of Inclusion post image"}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </a>
        <div className="p-3 bg-zinc-50">
          <a
            href={`/opinion/${post?.slug}`}
            className="font-bold tracking-tight text-sm/5 h-10 overflow-hidden text-ellipsis hover:cursor-pointer"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {post?.title}
          </a>
          <div className="flex items-center justify-between text-zinc-500 mt-2">
            <div className="text-xs font-normal">{formattedDate}</div>
            <div className="text-sm font-medium cursor-pointer">􀍠</div>
          </div>
        </div>
      </div>
    </>
  );
};
