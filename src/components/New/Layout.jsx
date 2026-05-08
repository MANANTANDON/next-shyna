import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children, articles }) => {
  return (
    <>
      <div>
        <Header articles={articles} />
        {children}
        <Footer />
      </div>
    </>
  );
};
