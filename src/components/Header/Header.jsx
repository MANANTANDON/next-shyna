import { useFormatText } from "@/hooks/useFormatText";
import {
  EmailRounded,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const socials = (
  <>
    <div className="flex items-center gap-3 md:gap-5">
      <a
        href="https://www.instagram.com/shynaa.co/"
        target="_blank"
        aria-label="Shyna Gupta Instagram Link"
      >
        <Instagram className="text-zinc-100" fontSize="small" />
      </a>
      <a
        href="https://in.linkedin.com/in/shyna-gupta-053016210"
        target="_blank"
        aria-label="Shyna Gupta LinkeIn Link"
      >
        <LinkedIn className="text-zinc-100" fontSize="small" />
      </a>
      <a
        href="https://www.youtube.com/@ShynaaG"
        target="_blank"
        aria-label="Shyna Gupta Youtube Link"
      >
        <YouTube className="text-zinc-100" fontSize="small" />
      </a>
      <a
        href="mailto:shyna20012@gmail.com"
        target="_blank"
        aria-label="Shyna Gupta Email Link"
      >
        <EmailRounded className="text-zinc-100" fontSize="small" />
      </a>
    </div>
  </>
);

export const Header = ({ articles }) => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const posts = articles?.data || [];

  if (posts.length < 2) {
    return null;
  }

  const updateDate = () => {
    const now = new Date();

    const formattedDate = now.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

    setCurrentDate(formattedDate);
  };

  const updateTime = () => {
    const now = new Date();

    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    setCurrentTime(formattedTime);
  };

  useEffect(() => {
    updateDate();
    updateTime();

    const interval = setInterval(() => {
      updateTime();
    }, 60000);

    return () => clearInterval(interval);
  }, [currentTime]);

  return (
    <>
      <div className="pt-3 md:pt-5 pb-2 bg-[#FF0054]">
        <div className="max-w-7xl mx-auto px-2 md:px-10 ">
          <div className="sfpro-text flex items-center justify-between">
            <div className="font-black text-sm md:text-base">
              <span className="tracking-tighter text-zinc-50">
                {currentDate}
              </span>
              <span className="tracking-tighter ml-2 text-zinc-200">
                {currentTime}
              </span>
            </div>
            <div>{socials}</div>
          </div>

          <div className="pt-8 pb-4 lg:pt-6 lg:pb-6 flex items-center justify-center">
            <a
              href="/"
              className="fg text-4xl md:text-5xl lg:text-7xl w-fit font-black"
              style={{ color: "#FFFFFF" }}
            >
              Agents of Inclusion
            </a>
          </div>
        </div>
      </div>
      <Marquee className="text-zinc-100">
        <div className="bg-[#FF0054] text-zinc-100 flex items-center gap-10 py-1 text-sm md:text-base">
          {posts.slice(10).map((item, key) => (
            <a href="" key={key} style={{ color: "#FFFFFF" }}>
              <span>• {useFormatText(item?.title)}</span>
            </a>
          ))}
        </div>
      </Marquee>
    </>
  );
};
