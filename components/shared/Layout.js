"use client";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import { daltechutility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  useEffect(() => {
    daltechutility.scrollAnimation();
  }, []);

  return (
    <Fragment>
      <ImageView />
      <EmbedPopup />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};
export default Layout;
