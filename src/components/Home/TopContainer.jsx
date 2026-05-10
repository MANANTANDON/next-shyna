import React from "react";
import { TopNewsCard } from "@/components/Cards/TopNewsCard";
import { TopNewsCardTwo } from "@/components/Cards/TopNewsCardTwo";

export const TopContainer = ({ articles }) => {
  const posts = articles?.data || [];

  if (posts.length < 2) {
    return null;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col gap-5 mt-10">
        <h2 className="text-[#FF0054] text-2xl font-bold tracking-tight">
          Top Articles
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-5">
          <TopNewsCard post={posts[0]} />
          <TopNewsCard post={posts[1]} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {posts.slice(2, 6).map((item, key) => (
            <TopNewsCardTwo post={item} key={key} />
          ))}
        </div>
      </div>
    </>
  );
};
