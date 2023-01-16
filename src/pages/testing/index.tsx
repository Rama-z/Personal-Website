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
      <main className="ml-40 m-auto">
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="my-10">Testing</div>
        <div className="font-black">index</div>
      </main>
    </>
  );
}
