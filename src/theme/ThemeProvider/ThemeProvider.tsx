import { createContext, useContext, useState } from "react";
import { darkTheme, theme } from "../Theme";

import { ThemeProvider as SCThemeProvider } from "styled-components";

interface LMProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeDarkContext = createContext<LMProps>({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

export const ThemeDarkProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  return (
    <ThemeDarkContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeDarkContext.Provider>
  );
};

export const useToggleDarkTheme = () => useContext(ThemeDarkContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isDarkMode } = useToggleDarkTheme();
  return (
    <SCThemeProvider theme={isDarkMode ? darkTheme : theme}>
      {children}
    </SCThemeProvider>
  );
};
