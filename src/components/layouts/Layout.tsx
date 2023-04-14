import Header from "components/header";
import Sidebar from "components/sidebar";
import React from "react";
import PreloadProvider from "src/context/PreloadContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PreloadProvider>
        <Header />
        <div>{children}</div>
      </PreloadProvider>
    </>
  );
}
