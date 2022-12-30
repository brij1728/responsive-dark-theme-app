import { createContext, useContext, useState } from "react";
import { darkTheme, theme } from "../Theme";

import { ThemeProvider as SCThemeProvider } from "styled-components";

interface LMProps {
  isLightMode: boolean;
  toggleLightMode: () => void;
}

const LightModeContext = createContext<LMProps>({
  isLightMode: true,
  toggleLightMode: () => {},
});

export const LightModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLightMode, setLightMode] = useState(true);
  const toggleLightMode = () => setLightMode((prev) => !prev);
  return (
    <LightModeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};

export const useToggleLightMode = () => useContext(LightModeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLightMode } = useToggleLightMode();
  return (
    <SCThemeProvider theme={isLightMode ? theme : darkTheme}>
      {children}
    </SCThemeProvider>
  );
};
