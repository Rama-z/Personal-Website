import Header from "components/header";
import Sidebar from "components/sidebar";
import React from "react";
import PreloadProvider from "src/context/PreloadContext";
import { TLayoutChildren } from "src/types/component";

const Layout = ({ children }: TLayoutChildren) => {
  return (
    <>
      <PreloadProvider>
        <Header />
        <div>{children}</div>
      </PreloadProvider>
    </>
  );
};

export default Layout;
