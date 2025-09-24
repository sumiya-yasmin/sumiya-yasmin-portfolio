"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      style={{ borderColor: 'var(--foreground)' }}
      className="p-2 border rounded-lg cursor-pointer"
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
    </button>
  );
};
