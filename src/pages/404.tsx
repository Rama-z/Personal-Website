import { useRouter } from "next/router";
import React from "react";

export default function Error() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>This page are not found</div>
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          Back to Home
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        Makan
      </div>
    </>
  );
}
