import React from "react";
import dynamic from "next/dynamic";
import styles from "styles/Home.module.css";
// import Header from "components/header/index";
import Sidebar from "components/sidebar";

export default function index() {
  const DynamicHeader = dynamic(() => import("src/components/header/"), {
    ssr: false,
  });
  return (
    <>
      <DynamicHeader />
      <Sidebar />
      <main className="ml-32 m-auto">
        <div className="flex flex-col h-screen mr-5">
          <div className="border-2 border-white h-1/2">
            <div>Profile</div>
          </div>
          <div className="border-2 border-white h-1/2">
            <div>Skills</div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
}
