import React from "react";

export const BackTopTop = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <button
        onClick={handleBackToTop}
        className="bg-[#FF0054] transition-all duration-300 text-center py-2.5 px-6 rounded-[24px] flex items-center justify-center gap-2 cursor-pointer w-fit sfpro-text text-zinc-50 text-sm font-medium"
      >
        <span className="text-xs">􀆇</span>Back to Top
      </button>
    </div>
  );
};
