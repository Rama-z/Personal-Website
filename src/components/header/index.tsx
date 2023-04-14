import { useTheme } from "next-themes";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import HeaderButton from "components/elements/HeaderButton";
import useLoaded from "src/utils/customHooks/useLoaded";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const content: string[] = ["About", "Experience", "Project", "Contact"];

  const isLoaded = useLoaded();

  return (
    <>
      <header className="flex flex-row justify-between items-center px-12 h-20 m-auto z-20 bg-white dark:bg-black border-b-2 dark:border-white border-black">
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/testing");
          }}
        >
          Logo
        </div>
        <div className={`flex items-center ${isLoaded && "slideDown"}`}>
          {content.map((content, idx) => {
            return (
              <HeaderButton
                key={content}
                buttons={content}
                dataFade={idx + 1}
              />
            );
          })}
          <div className="pl-10">
            <button
              className=""
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              {theme === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
