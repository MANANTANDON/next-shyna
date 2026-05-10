import React from "react";

export const Footer = () => {
  return (
    <footer className="mt-10 p-2">
      <div className="mx-1 flex flex-col items-center justify-between gap-2 p-2 md:flex-row md:gap-0">
        <div className="flex flex-col items-center md:items-start">
          <p className="sf-medium text-[14px] text-[#999991]">
            All right reserved
          </p>
          <p className="sf-medium text-[14px] text-[#353535]">
            ©{" "}
            <a
              href="https://snowchildstudio.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              SnowChild Studios
            </a>
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="/terms-and-condition"
            className="sf-medium text-[14px] text-[#353535] hover:underline"
          >
            Terms and condition
          </a>
          <a
            href="/privacy-policy"
            className="sf-medium text-[14px] text-[#353535] hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="/sitemap"
            className="sf-medium text-[14px] text-[#353535] hover:underline"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};
