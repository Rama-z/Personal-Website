import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/ComingSoon.module.css";

function ComingSoon() {
  const router = useRouter();
  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="font-extrabold text-8xl p-20 font-Poppins select-none">
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
              className={`${styles.wrapper} overflow-hidden rounded-full relative border-white border-2 px-10 py-2`}
              onClick={() => {
                router.push("/testing");
              }}
            >
              <div
                id={styles.slide}
                className="rounded-full bg-slate-50 px-10 py-2 absolute -right-44 top-0 select-none text-zinc-900 "
              >
                Back to Home
              </div>
              <div className="select-none">Back to Home</div>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default ComingSoon;
