import { createContext, useContext, useState } from "react";
import { copy } from "../data/copy";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("videoGame"); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "professional" ? "videoGame" : "professional"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// The current theme's text from src/data/copy.js.
export const useCopy = () => copy[useTheme().theme];
