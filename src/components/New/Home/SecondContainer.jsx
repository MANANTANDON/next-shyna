import React from "react";
import { MoreNews } from "@/components/Cards/MoreNews";

export const SecondContainer = ({ articles }) => {
  const posts = articles?.data || [];

  if (posts.length < 2) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 mt-20 flex flex-col gap-5">
      <h2 className="text-[#FF0054] text-2xl font-bold tracking-tight">
        More Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.slice(6).map((item, key) => (
          <MoreNews post={item} key={key} />
        ))}
      </div>
    </div>
  );
};
