import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React from "react";
import styles from "../../styles/ComingSoon.module.css";
import Header from "../../components/header/index";
import Head from "next/head";
import { useTheme } from "next-themes";

function ComingSoon() {
  const router = useRouter();
  const DynamicHeader = dynamic(() => import("src/components/header/"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Coming Soon Page</title>
      </Head>
      <DynamicHeader />
      <main>
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="animate-wiggles font-extrabold text-8xl p-20 font-Libre select-none">
            Coming Soon
          </div>
          <div className="animate-bounce border-none rounded-full p-4 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </div>
          <div>
            <button
              className={`rounded-full relative border-black border-2 px-10 py-2 dark:border-white hover:border-black hover:bg-white hover:text-black duration-500`}
              onClick={() => {
                router.push("/");
              }}
            >
              <div className="select-none">Back to Home</div>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default ComingSoon;
