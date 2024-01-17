"use client";

import { useTheme } from "@/context/theme-context";
import React, { useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleThemeHandler } = useTheme();

  return (
    <button
      className="fixed bottom-5 left-5 bg-gray-300 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-800"
      onClick={toggleThemeHandler}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
