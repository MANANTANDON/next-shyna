import { calculateReadingTime } from "@/hooks/calculateReadingTime";
import { useFormatText } from "@/hooks/useFormatText";
import Image from "next/image";
import React from "react";

export const MoreNews = ({ post }) => {
  const formattedDate = post?.date
    ? new Date(post.date.replace(" ", "T")).toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
      })
    : "";

  return (
    <div className="p-4 rounded-3xl bg-zinc-50 sfpro-text shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:scale-[1.004] hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
      <div className="flex gap-4 ">
        <a
          href={`/opinion/${post?.slug}`}
          className="min-w-0 flex-1 text-left wrap-break-word font-bold tracking-tight hover:cursor-pointer"
        >
          {useFormatText(post?.title)}
        </a>

        <a href={`/opinion/${post?.slug}`}>
          <div className="relative h-30 w-30 md:h-40 md:w-40 shrink-0 overflow-hidden rounded-[11px] hover:cursor-pointer">
            <Image
              src={
                post?.featured_image === null
                  ? "/shynaSignature.png"
                  : post.featured_image
              }
              alt={post?.title || "Agents of Inclusion post image"}
              fill
              sizes="180px"
              className="object-cover object-center"
            />
          </div>
        </a>
      </div>
      <div className="flex items-center justify-between text-zinc-500 mt-2">
        <div className="text-xs font-normal">
          {formattedDate} • {calculateReadingTime(post?.content)}
        </div>
        <div className="text-sm font-medium cursor-pointer">􀍠</div>
      </div>
    </div>
  );
};
