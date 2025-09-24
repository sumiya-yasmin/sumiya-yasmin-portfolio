"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
} | null>(null);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme;
      }
    }
    return "dark";
  });

  useEffect(() => {
    if (document.body) {
      document.body.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
 const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;

}

  
