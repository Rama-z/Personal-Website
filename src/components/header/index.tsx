import { useTheme } from "next-themes";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === systemTheme ? systemTheme : theme;
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const onScroll = () => {
      const { pageYOffset, scrollY } = window;
      setScrollY(window.pageXOffset);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const themeChanger = () => {
    if (!mounted) return null;
    if (currentTheme !== "dark") {
      return (
        <div className="">
          <button
            className=""
            onClick={() => {
              setTheme("dark");
            }}
          >
            <LightModeOutlinedIcon />
          </button>
        </div>
      );
    }
    return (
      <div className="">
        <button
          className=""
          onClick={() => {
            setTheme("light");
          }}
        >
          <DarkModeOutlinedIcon />
        </button>
      </div>
    );
  };
  return (
    <>
      <div
        className={
          scrollY >= 80
            ? "hidden"
            : "sticky flex flex-row justify-between items-center px-12 h-20 w-screen max-w-7xl m-auto z-20 bg-white dark:bg-black border-b-2 dark:border-white border-black"
        }
      >
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/testing");
          }}
        >
          Logo
          {/* {currentTheme === "dark" ? (
            <Image src={WhiteLogos} width="50" alt="asd" priority={true} />
          ) : (
            <Image src={DarkLogos} width="50" alt="asd" priority={true} />
          )} */}
        </div>
        <div>{themeChanger()}</div>
      </div>
    </>
  );
}
